import {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';
import { Navigate } from 'react-router-dom';
import './all.css';

const SignIn =  () => {

    const [email, setEmail] = useState('');
    const [password, setPassowrd] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            localStorage.setItem('user', JSON.stringify(user))
            console.log(user);
            if (user) {
                
                Navigate('/api/')
            }
        } catch (error) {
            console.log(error.message);
            setError('invalid email or password');

        }
    }
    return (
        <Container className='sign-up'>

            <Row className='align-items-center h-75 w-100 justify-content-center' md={2} sm={4} >
                <Col className='sign-up-col'>
                    <Form  onSubmit={handleSubmit} className='sign-in-form'>
                        <Form.Label className='sign-in-label'><h1>Sign in</h1></Form.Label>
                        {error && (<p style={{color: 'crimson'}}>{error}</p>) }
                        <Form.Group className="sign-in-input mb-3" controlId="formBasicEmail">
                            <Form.Control
                                name='email'
                                size='lg'
                                type="email"
                                placeholder="Enter email"
                                className='w-100'
                                onChange={(e) => setEmail(e.target.value)}
                                />
                        </Form.Group>
            
                        <Form.Group className="sign-in-input mb-3" controlId="formBasicPassword">
                            <Form.Control
                                name='password'
                                size='lg' type="password"
                                placeholder="Password"
                                className='w-100'
                                onChange={(e) => setPassowrd(e.target.value)}
                                />
                        </Form.Group>
                        <Button variant="primary" type="submit">
                        Submit
                        </Button><br/>
                        <Form.Label>Don't have account? <a href='/sign-up'>Sign up</a></Form.Label>
                    </Form>
                </Col>
            </Row>
        </Container>
    );
}
export default SignIn;