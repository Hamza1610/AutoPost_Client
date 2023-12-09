import './sign_up.css';
import { useState } from "react";
import { createUserWithEmailAndPassword, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import { auth } from './firebase-config';
import { onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate()
    
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');

    const handleEmailPasswordSignUp = async () => {
        if (password === confirmPassword) {
            try {
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
                    navigate("/auth/");
                    }
                });
    
            } catch (error) {
                console.log('Email/Password error:', error.message);
                setError(error.message);
            }
        }
        else {
            setError('Password and Confirm password do not match');
            return;
        }
    };

    const handleGoogleSignUp = async () => {
        const provider = new GoogleAuthProvider();
        try {
            const userCredential = await signInWithPopup(auth, provider);
            const user = userCredential.user;
            console.log('Google user:', user);
            setError('');
            console.log("Registered with Google successfully");
        } catch (error) {
            console.log('Google error:', error.message);
            setError(error.message);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (email && password && confirmPassword) {
            handleEmailPasswordSignUp();
        } else {
            handleGoogleSignUp();
        }
    };

    return (
        <div className="sign-in">
            <h1 className="component-label">Sign up</h1>
            <form onSubmit={handleSubmit} className="sign-up-form">
                {error && (
                    <div className="error-div">{error}</div>
                )}
                <input
                    className="sign-in-input email"
                    name="email"
                    type="email"
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }}
                    value={email}
                    required
                />
                <input
                    onChange={(e) => { setPassword(e.target.value) }}
                    className="sign-in-input password"
                    name="password"
                    type="password"
                    placeholder="Password"
                    value={password}
                    required
                />
                <input
                    onChange={(e) => { setConfirmPassword(e.target.value) }}
                    className="sign-in-input confirm-password"
                    name="confirm-password"
                    type="password"
                    placeholder="Confirm Password"
                    required
                />
                <div className="sumbit-div">
                    <button
                        className="submit-signup-button"
                        type="submit"
                        name="submit-button"
                    >
                        Sign up with Email
                    </button>
                    <button
                        className="submit-signup-button"
                        type="button"
                        onClick={handleGoogleSignUp}
                    >
                        Sign up with Google
                    </button>
                </div>
            </form>
        </div>
    );
}

export default Signup;
