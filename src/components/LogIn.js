
import './components.css'
import {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config'
const LogIn = () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
        } catch (error) {
            console.log(error.message);
            if (error.message=='Firebase: Error (auth/invalid-email).') {
                setError('invalid email or password');
            }
        }


    }
    return (
        <div className="log-in">
            <h1 className="component-label" >Log In</h1>
            <form onSubmit={handleSubmit}>
                {error && (
                    <div className="error-div">{error}</div>
                )}
                <input className="sign-in-input reg_num" name="reg_num" type="text" placeholder="Registration Number: " onChange={(e)=>setEmail(e.target.value)} />
                <input className="sign-in-input password" name="password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <input className="submit-button" type="submit" value="Log in"/>
            </form>           
        </div>
    )    
}
export default LogIn;