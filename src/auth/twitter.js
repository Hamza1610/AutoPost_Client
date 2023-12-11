import React from "react";
import { loginWithPopup, logout, isAuthenticated } from 'firebase/auth';


const TwitterLogin = () => {

  const log = loginWithPopup()

  const handleLogIn = async () => {
    const response = await log('twitter')
    console.log('log in', response);
  };
  const handleLogOut = async () => {
    // Using logout instead
    const response = await logout()
    console.log('Log out: ', response);
  };

  return (
    <div className="social-div twitter-div">
      <h4 className="status">Status: {isAuthenticated ? "Online" : "Offline"}</h4>
      <button onClick={handleLogIn}>Login Twitter</button>
      <button onClick={handleLogOut}>Logout Twitter</button>
    </div>
  );
};

export default TwitterLogin;
