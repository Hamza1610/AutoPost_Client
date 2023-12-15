import React from "react";
import { signInWithPopup, FacebookAuthProvider, signOut } from 'firebase/auth';
import {auth} from './firebase-config';
import { useState  } from "react";
import Button from "react-bootstrap/Button";


const FacebookLogin = () => {

  const [User, setUser] = useState(null)

  const onlineIndicator = { width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'green'}
  const offlineIndicator = { width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'crimson'}

  const handleLogIn = async () => {

      // Sign in using a popup.
      const provider = new FacebookAuthProvider();
      const result = await signInWithPopup(auth, provider);

      // The signed-in user info.
      const user = result.user;
      setUser(user);
      // This gives you a Facebook Access Token.
      const credential = provider.credentialFromResult(auth, result);
      const token = credential.accessToken;

      localStorage.setItem('user', JSON.stringify(user));
      console.log('User:', user);
      console.log('Token:', token);

  };
  const handleLogOut = async () => {
    // Logs out the user
    try {
      const response = await signOut(auth)
       console.log('Log out: ', response);
    } catch (error) {
      console.log('Logout error msg: ', error);
    }
  };

  return (
    <div className="social-div twitter-div mb-3">
      <h2>Facebook</h2>
      <h5 className="status">Status: {User ? <div style={onlineIndicator}></div> : <div style={offlineIndicator}></div>}</h5>
      <Button className="m-2" onClick={handleLogIn}>Login </Button>
      <Button className="m-2" variant="danger" onClick={handleLogOut}>Logout</Button>
    </div>
  );
};

export default FacebookLogin;
