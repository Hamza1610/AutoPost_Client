import React from "react";
import { signInWithPopup, TwitterAuthProvider, signOut } from 'firebase/auth';
import {auth} from './firebase-config';
import { useState  } from "react";
import Button from 'react-bootstrap/Button';
import { useLinkedIn } from "react-linkedin-login-oauth2";
import LinkedInAuth from './test_auth_lib'


const LinkedInLogin = () => {

  const [User, setUser] = useState(null)
  const [indicator, setIndicator] = useState({ width: '20px', height:'20px', borderRadius:'50%', backgroundColor:'crimson'})


  const { linkedInLogin } = useLinkedIn({
    clientId:  process.env.REACT_APP_LINKEDIN_CLIENT_ID,
    redirectUri: `${window.location.origin}/api/`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
    scope: (details) => {
      console.log(details);
    }
  });

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
      <hr />
      <h5 className="status">Status: {User ? <div style={indicator}></div> : <div style={indicator}></div>}</h5>
      <Button className="m-2" onClick={linkedInLogin}>Login </Button>
      <Button className="m-2" variant="danger" onClick={handleLogOut}>Logout</Button>
    </div>
  );
};

export default LinkedInLogin;
