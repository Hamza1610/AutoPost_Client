import "./authenticate-page.css";
import FacebookLogin from './auth/facebook';
import LinkedInLogin from './auth/linkedin';
import TwitterLogin from './auth/twitter';
import {LoginButton, LogoutButton,Profile} from './auth/test_auth_lib';
import Button from "react-bootstrap/Button";

const Authenticate = () => { 

    
  return (
        <div>
        {/* Your application code goes here */}
        {/* <FacebookLogin />
        <LinkedInLogin />
        <TwitterLogin /> */}

        <Profile />
        <LoginButton />
        <LogoutButton />
        <div className="sign-out-div">
          <Button variant="primary" className="w-50 m-2">Sign out</Button>
          <Button variant="primary" className="w-50 m-2">Delete account</Button>
        </div>
      </div>
    );
};

export default Authenticate;