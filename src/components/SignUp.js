import './components.css';
import { useState } from "react";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase-config';

const SignUp = () => {
    const [userName, setUserName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [linkeInToken, setLinkeInToken] = useState('');
    const [twitterXToken, setTwitterXToken] = useState('');
    const [facebookToken, setFacebookToken] = useState('');
    const [error, setError] = useState('');

    const handlePasswordAndData = async () => {
        if (password !== confirmPassword) {
            console.log('Passwords do not match');
            setError('Password and Confirm password does not match')
        } else {
            try {
                try {
                    // the key here should be the same with the models
                    const data = {
                        "UserName": userName,
                        "Email": email,
                        "Password": password,
                        "LinkeIn_Token": linkeInToken,
                        "Twitter_X_Token": twitterXToken,
                        "Facebook_Token": facebookToken
                    }
                    // delete this later original is in the error handler
                    console.log(data);
                    const response = await fetch('/sign-up', {
                        method: 'POST',
                        body: JSON.stringify(data),
                        headers: {
                            'Content-Type': 'application/json',
                          },
                    })
                    const json = response.json();
                    if (!response.ok) {
                        setError(json.error)
                    }
                    if (response && response.ok) {
                        // this store unique registration number to the browser
                        localStorage.setItem('username', userName);
                        setError('')
                        setEmail('')
                        setUserName('')
                        setPassword('')
                        setLinkeInToken('')
                        setFacebookToken('')
                        setTwitterXToken('')
                        console.log("Registered successfully ");
                    }
                } catch (error) {
                    console.log(error);
                }
                // Later user variable is to be placed above the data form valriable
                const user = await createUserWithEmailAndPassword(auth, email, password);
                console.log(user);
            } catch (error) {
                console.log(error.message);
                if (error.message) {
                    setError(error.message);
                }
            }
            console.log(password);
        }
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        handlePasswordAndData();

    }

    return (
        <div className="sign-up">
            <h1 className="component-label">Sign up</h1>
            <form onSubmit={handleSubmit}>
                {error && (
                    <div className="error-div">{error}</div>
                )}
                <input
                    className="sign-in-input user_name"
                    name="userName"
                    type="text"
                    placeholder="Username"
                    onChange={(e) => { setUserName(e.target.value) }}
                    value={userName}
                    required
                />
                <input
                    name="email"
                    className="sign-in-input email"
                    type='email'
                    placeholder="Email"
                    onChange={(e) => { setEmail(e.target.value) }
                    }
                    value={email}
                />
                <textarea cols="30" rows="10"
                    onChange={(e) => { setLinkeInToken(e.target.value) }}
                    className="sign-in-input linkedIn"
                    name="linkeIn"
                    type="text"
                    placeholder="LinkedIn token here"
                    value={linkeInToken}
                    required
                ></textarea>
                <textarea cols="30" rows="10"
                    onChange={(e) => { setLinkeInToken(e.target.value) }}
                    className="sign-in-input twitter_X"
                    name="twitter"
                    type="text"
                    placeholder="Twitter token here"
                    value={twitterXToken}
                    required
                ></textarea>
                <textarea cols="30" rows="10"
                    onChange={(e) => { setLinkeInToken(e.target.value) }}
                    className="sign-in-input facebook"
                    name="facebook"
                    type="text"
                    placeholder="Facebook token here"
                    value={facebookToken}
                    required
                ></textarea>
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
                <input
                    className="submit-button"
                    type="submit"
                    value="Sign up"
                    name="submit-button"
                    required
                />
            </form>
        </div>
    )
}

export default SignUp;
