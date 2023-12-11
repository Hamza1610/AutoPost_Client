import React from "react";
import { loginWithPopup, logout, isAuthenticated } from 'firebase/auth';


const LinkedInLogin = () => {
  
  const log = loginWithPopup()

  const handleLogIn = async () => {
    const response = await log('linkedIn')
    console.log('log in', response);
  };
  const handleLogOut = async () => {
    // Using logout instead
    const response = await logout()
    console.log('Log out: ', response);
  };

  return (
    <div className="social-div linkedin-div">
      <h4 className="status">Status: {isAuthenticated ? "Online" : "Offline"}</h4>
      <div className="log-buttons">
        <button onClick={handleLogIn}>Login LinkedIn</button>
        <button onClick={handleLogOut}>Logout LinkedIn</button>
      </div>
    </div>
  );
};

export default LinkedInLogin;
