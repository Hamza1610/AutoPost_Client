import { loginWithPopup, logout, isAuthenticated } from 'firebase/auth';

const FacebookLogin = () => {
  
  const log = loginWithPopup()

  const handleLogIn = async () => {
    const response = await log('facebook')
    console.log('log in', response);
  };
  const handleLogOut = async () => {
    // Using logout instead
    const response = await logout()
    console.log('Log out: ', response);
  };

  return (
    <div className="social-div facebook-div">
      <h4 className="status">Status: {isAuthenticated ? "Online" : "Offline"}</h4>
      <button onClick={handleLogIn}>Login Facebook</button>
      <button onClick={handleLogOut}>Logout Facebook</button>
    </div>
  );
};

export default FacebookLogin;
