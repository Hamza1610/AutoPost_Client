import axios from 'axios';
import { useState } from 'react';

import './home.css';
const Home = () => {  
    const [postImages, setPostImages] = useState([]);    
    const [post, setPost] = useState('');    
    const [error, setError] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = localStorage.getItem('userName')
        console.log(userName);
        if (userName) {
            const data = new FormData()
                data.append("user", userName)
                data.append("message", post)
                for (let i = 0; i < postImages.length; i++) {
                    data.append('images', postImages[i]);
                  }

            const response = await axios.post('/api/post', data);
            if (response.status == 200) {
                setError('');
                setPost('');
                setPostImages([]);
                alert("Contents posted successfully");
                console.log("Posted successfully: ");
            } else {
                const json = await response.data;
                console.log(json.error);
                setError(json.error);
            }
            

        } else {
            setError("User is unknown please registier to get yourself to use the service")
        }

    }
return (
    <div className="home">
        {error && (
            <div>Error: {error}</div>
        )}
        <div className='post-field'>
            <form onSubmit={handleSubmit}>
                <h2>Welcome to Autopost</h2>
                <p>Post to your social media platforms with one click</p>
                <input
                    type="file" accept='image/*'
                    placeholder='Upload Images'
                    multiple
                    onChange={(e) => setPostImages(e.target.files)}
                    required
                    />
                <textarea
                    value={post}
                    cols="30" rows="10"
                    placeholder='Post constent'
                    onChange={(e) => setPost(e.target.value)}
                    autoComplete='true'
                    required
                    ></textarea>
                <input type="submit" value='Upload messages'/>
            </form>
        </div>
    </div>
)
}
export default Home;