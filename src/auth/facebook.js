import {} from 'firebase/auth'

const FacebookLogin = () => {
  const { loginWithRedirect, loginWithPopup, logout, isAuthenticated } = useAuth0();
  
  const handleLogIn = async () => {
    const response = await loginWithRedirect("facebook");
    console.log(response);
  };
  const handleLogOut = async () => {
    // Using logout instead
    console.log('Log out');
  };

  return (
    <div className="social-div facebook-div">
      <h4 className="status">Status: {isAuthenticated ? "Online" : "Offline"}</h4>
      <button onClick={handleLogIn}>Login Facebook</button>
      <button onClick={logout}>Logout Facebook</button>
    </div>
  );
};

export default FacebookLogin;
