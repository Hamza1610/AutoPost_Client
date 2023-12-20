import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import axios from 'axios';
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Offcanvas from 'react-bootstrap/Offcanvas';
import Form from 'react-bootstrap/Form';
import './all.css';
import Authenticate from './authenticate-page';

const Home = () => { 

    const [postImages, setPostImages] = useState([]);    
    const [post, setPost] = useState('');    
    const [error, setError] = useState(false);

    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const data = new FormData()
                data.append("message", post)
                for (let i = 0; i < postImages.length; i++) {
                    data.append('images', postImages[i]);
                    console.log(postImages[i].path);
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
            

        } catch(error) {
            setError("User is unknown please Sign-in to use the our feature", error)
            console.log(error);
        }

    }
return (
    <div className="home">
        {error && (
            <div >Error: {error}</div>
        )}

        {/* Navbar component */}
        <Navbar className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home"><h2>AutoPost</h2></Navbar.Brand>
                <Navbar.Toggle />
                <Navbar.Collapse className="justify-content-end">
                <Navbar.Text>
                    <Button variant="primary" onClick={handleShow}>
                        Login States
                    </Button>
                </Navbar.Text>
                </Navbar.Collapse>
            </Container>
        </Navbar>

        {/* Offcanvas component */}
        <Offcanvas show={show} onHide={handleClose}>
            <Offcanvas.Header closeButton>
            <Offcanvas.Title>Login States</Offcanvas.Title>
            </Offcanvas.Header>
            <Offcanvas.Body>
                <Authenticate/>
            </Offcanvas.Body>
        </Offcanvas>

        {/* Form component */}
        <div className='post-form-div'>
            <Form onSubmit={handleSubmit}>
                <Form.Text><h2>Welcome to Autopost</h2></Form.Text>
                <Form.Text text-muted="true">Post to your social media platforms with one click</Form.Text>
                <Form.Group
                    className="mb-3"
                    controlId="formBasicEmail"
                    onSubmit={handleSubmit}
                >
                    <Form.Control
                        type="file"
                        placeholder="Choose the file to upload"
                        accept='image/*'
                        multiple
                        onChange={(e) => setPostImages(e.target.files)}
                        required
                    />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control
                        type="text"
                        value={post}
                        placeholder="Post text"
                        onChange={(e) => setPost(e.target.value)}
                        autoComplete='true'
                        required
                    />
                </Form.Group>
                
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mark Facebook" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mark LinkedIn" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check type="checkbox" label="Mark Twitter" />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Post
                </Button>
            </Form>
        </div>
    </div>
)
}
export default Home;