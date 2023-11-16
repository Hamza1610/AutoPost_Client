import './log_in.css'
import {useState} from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from './firebase-config'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const user = await signInWithEmailAndPassword(auth, email, password);
            console.log(user);
            navigate("/api/");
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
                <input className="sign-in-input userName" name="userName" type="text" placeholder="Username or email" onChange={(e)=>setEmail(e.target.value)} />
                <input className="sign-in-input password" name="password" type="password" placeholder="Password" onChange={(e)=>setPassword(e.target.value)} />
                <input className="submit-button" type="submit" value="Log in"/>
            </form>           
        </div>
    )    
}
export default Login;