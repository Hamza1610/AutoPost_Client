import React from "react";
import { signInWithPopup, TwitterAuthProvider, signOut } from 'firebase/auth';
import {auth} from './firebase-config';
import { useState  } from "react";
import Button from 'react-bootstrap/Button';


const LinkedInLogin = () => {

  const [User, setUser] = useState(null)

  const onlineIndicator = { width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'green'}
  const offlineIndicator = { width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'crimson'}

  const handleLogIn = async () => {
    try {
      // Sign in using a popup.
      const provider = new TwitterAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // The signed-in user info.
      const user = result.user;
      setUser(user);
      // This gives you a Facebook Access Token.
      const credential = provider.credentialFromResult(auth, result);
      const token = credential.accessToken;

      console.log('User:', user);
      console.log('Token:', token);
    } catch (error) {
      console.log('Login error msg:',error);

    }

  };
  const handleLogOut = async () => {
    // logs user out of account
    try {
      const response = await signOut(auth)
      console.log('Log out: ', response);    
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="social-div twitter-div mb-3">
      <h2>LinkedIn</h2>
      <h5 className="status">Status: {User ? <div style={onlineIndicator}></div> : <div style={offlineIndicator}></div>}</h5>
      <Button className="m-2" onClick={handleLogIn}>Login </Button>
      <Button className="m-2" variant="danger" onClick={handleLogOut}>Logout</Button>
    </div>
  );
};

export default LinkedInLogin;
