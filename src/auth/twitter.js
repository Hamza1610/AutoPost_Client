import { useEffect, useState } from "react";
import { signInWithPopup, TwitterAuthProvider, signOut } from 'firebase/auth';
import {auth} from './firebase-config';
import Button from "react-bootstrap/Button";

const TwitterLogin = () => {

  const [User, setUser] = useState(null)
  const [indicator, setIndicator] = useState({ width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'crimson'})

  const handleLogIn = async () => {

    // logs user in
    try {

      // Sign in using a popup.

      const provider = new TwitterAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // The signed-in user info.
      const user = result.user;
      setUser(user)
      // This gives you a Twitter Access Token and Secret.
      const credential = TwitterAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      const secret = credential.secret;

      localStorage.setItem('user_tt', JSON.stringify(user));
      console.log('User:', user);
      console.log('Token:', token);
      console.log('Secret:', secret);  

    } catch (error) {
      console.log('Login error:', error);
    }

  };
  const handleLogOut = async () => {
    
    try {
      // Using logout instead
      const response = await signOut(auth)
      console.log('Log out: ', response); 
    } catch (error) {
      
    }
  };
  useEffect(() => {
    if (localStorage.getItem('user_fb')) {
      setIndicator({width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'green'})
    }
  })

  return (
    <div className="social-div twitter-div mb-3">
      <h2>Twitter</h2>
      <h5 className="status">Status: {User ? <div style={indicator}></div> : <div style={indicator}></div>}</h5>
      <Button className="m-2" onClick={handleLogIn}>Login </Button>
      <Button className="m-2" variant="danger" onClick={handleLogOut}>Logout</Button>
    </div>
  );
};

export default TwitterLogin;
