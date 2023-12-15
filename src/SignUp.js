import { auth } from './firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import './all.css'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { useState } from 'react';
import { Navigate } from 'react-router-dom';

const SignUp =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async(e) => {
        e.preventDefault();

        try {
            if (password === confirmPassword) {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                const user = userCredential.user;
                console.log('Email/Password user:', user);
                setError('');
                setEmail('');
                setPassword('');
                setConfirmPassword('');
                console.log("Registered successfully");
                onAuthStateChanged(auth, (user) => {
                    if (user) {
                        console.log(user);
                        return (Navigate('/library'))
                    }
                });
            } else {
                setError('Passowrd and Confirm password does not match')
            }
    
        } catch (error) {
            console.log('Email/Password error:', error.message);
            setError(error.message);
        }
    }

    return (
        <Container className='sign-up'>
            <Row className='align-items-center h-75 w-100 justify-content-center' md={2} lg={2} sm={12} xs={12}>
                <Col className='sign-up-col'>
                    <Form onSubmit={handleSubmit} className='sign-up-form'>
                        <Form.Label className='sign-up-label'><h1 >Sign up</h1> </Form.Label>
                        {error && (<p style={{color: 'crimson'}}>{error}</p>) }
                        <Form.Group className="sign-up-input mb-3" controlId="formBasicEmail" sm={1} >
                            <Form.Control
                                name='email'
                                size='lg'
                                type="email"
                                placeholder="Enter email"
                                className='w-100 email'
                                onChange={(e) => setEmail(e.target.value)}
                                required
                            />
                        </Form.Group>
            
                        <Form.Group className="sign-up-input mb-3" controlId="formBasicPassword">
                            <Form.Control
                                name='password'
                                size='lg'
                                type="password"
                                placeholder="Password"
                                className='w-100 password'
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="sign-up-input mb-3" controlId="formBasicConfirmPassword">
                            <Form.Control
                                name='confirm'
                                size='lg'
                                type="password"
                                placeholder="Confirm password"
                                className='w-100'
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="formBasicCheckbox">
                            <Form.Check type="checkbox" label="Agree to our terms and conditions" required/>
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button><br/>
                        <Form.Label>Already registered an account? <a href='/sign-in'>Sign in</a></Form.Label>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignUp;