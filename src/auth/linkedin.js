import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const LinkedInLogin = () => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  
  const handleLogIn = async () => {
    const response = await loginWithPopup("linkedin");
    console.log(response);
  };

  return (
    <div className="social-div linkedin-div">
      <h4 className="status">Status: {isAuthenticated ? "Online" : "Offline"}</h4>
      <div className="log-buttons">
        <button onClick={handleLogIn}>Login LinkedIn</button>
        <button onClick={logout}>Logout LinkedIn</button>
      </div>
    </div>
  );
};

export default LinkedInLogin;
