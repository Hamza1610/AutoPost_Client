import {useState} from 'react';
import { signInWithEmailAndPassword, signInWithPopup, FacebookAuthProvider, GoogleAuthProvider} from 'firebase/auth';
import { auth } from './firebase-config'

import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Navigate } from 'react-router-dom';

const SignIn =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [error, setError] = useState('');

    const handleFacebookLogIn = async () => {

        try {
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);
    
            // The signed-in user info.
            const user = result.user;
            // This gives you a Facebook Access Token.
            const credential = provider.credentialFromResult(auth, result);
            const token = credential.accessToken;
            if (token) {
                Navigate('/library')
            }
            // to remove the setError later
            setError('')
        } catch (error) {
            console.log(error);
            setError(error);
        }
    }
    const handleGoogleLogIn = async () => {

        try {
             // Sign in using a popup.
            const provider = new FacebookAuthProvider();
            const result = await signInWithPopup(auth, provider);

            // The signed-in user info.
            const user = result.user;
            // This gives you a Facebook Access Token.
            const credential = provider.credentialFromResult(auth, result);
            const token = credential.accessToken;   
            if (token) {
                Navigate('/library')
            }
        } catch (error) {
            console.log(error);
            setError(error)
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            if (user) {
                Navigate('/library')
            }
        } catch (error) {
            console.log(error.message);
            setError('invalid email or password');

        }
    }
    return (
        <Container>
            <Row md={4}>
                <Col sm={2}>
                    <h1 >Sign in</h1>
                </Col>
            </Row>
            <Row className='align-items-center h-75 w-100 justify-content-center' md={4} >
                <Col >
                    <Form  onSubmit={handleSubmit}>
                        <Form.Label style={{fontSize: '1.3em'}}>Sign in your account: </Form.Label>
                        {error && (<p style={{color: 'crimson'}}>{error}</p>) }
                        <Form.Group className="mb-3" controlId="formBasicEmail">
                            <Form.Label>Email address</Form.Label>
                            <Form.Control name='email' size='lg' type="email" placeholder="Enter email" className='w-100'/>
                        </Form.Group>
            
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label>Password</Form.Label>
                            <Form.Control name='password' size='lg' type="password" placeholder="Password" className='w-100'/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button><br/>
                        <Form.Label>Don't account? <a href='/sign-up'>Sign up</a></Form.Label>
                    </Form>
                    <Form>
                        <hr style={{fontSize: '100px', color: 'white'}}/>
                        <Form.Group >
                            <Button
                                size='lg'
                                type='submit'
                                className='m-3'
                                onClick={handleGoogleLogIn}
                                >Google</Button>
                            <Button
                                size='lg'
                                type='submit'
                                className='m-3'
                                onClick={handleFacebookLogIn}
                                >Facebook</Button>
                        </Form.Group>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignIn;