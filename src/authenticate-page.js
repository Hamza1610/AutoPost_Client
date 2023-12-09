import FacebookLogin from './auth/facebook';
import LinkedInLogin from "./auth/linkedin";
import TwitterLogin from "./auth/twitter";
import "./authenticate-page.css";

import {Auth0Provider} from '@auth0/auth0-react';

const Authenticate = () => { 
    
    return (
        <Auth0Provider
        className="auth-page"
        domain={process.env.REACT_APP_CLIENT_DOMAIN}
        clientId={process.env.REACT_APP_CLIEN_ID}
        redirectUrl={window.location.origin()}
        >
        {/* Your application code goes here */}
        <FacebookLogin />
        <LinkedInLogin />
        <TwitterLogin />
      </Auth0Provider>
    );
};

export default Authenticate;