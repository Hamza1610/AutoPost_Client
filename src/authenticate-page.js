import "./authenticate-page.css";
import FacebookLogin from './auth/facebook';
import LinkedInLogin from './auth/linkedin';
import TwitterLogin from './auth/twitter';
import Button from "react-bootstrap/Button";

const Authenticate = () => { 
    
    return (
        <div>
        {/* Your application code goes here */}
        <FacebookLogin />
        <LinkedInLogin />
        <TwitterLogin />
        <div className="sign-out-div">
          <Button variant="primary" className="w-50 m-2">Sign out</Button>
          <Button variant="primary" className="w-50 m-2">Delete account</Button>
        </div>
      </div>
    );
};

export default Authenticate;