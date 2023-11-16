import React from "react";
import { useAuth0 } from "@auth0/auth0-react";


const TwitterLogin = () => {
  const { loginWithPopup, logout, isAuthenticated } = useAuth0();
  
  const handleLogIn = async () => {
    const response = await loginWithPopup("twitter");
    console.log(response);
  };

  return (
    <div className="social-div twitter-div">
      <h4 className="status">Status: {isAuthenticated ? "Online" : "Offline"}</h4>
      <button onClick={handleLogIn}>Login Twitter</button>
      <button onClick={logout}>Logout Twitter</button>
    </div>
  );
};

export default TwitterLogin;
