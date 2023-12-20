import { useAuth0 } from "@auth0/auth0-react";

// log in function
const LoginButton = () => {
  const { loginWithRedirect} = useAuth0();

  return <button onClick={() => loginWithRedirect()}>Log In</button>;
};

// Log out function
const LogoutButton = () => {
  const { logout } = useAuth0();

  return (
    <button onClick={() => logout({ logoutParams: { returnTo: window.location.origin + '/api/' } })}>
      Log Out
    </button>
  );
};


const Profile = () => {
  const { user, isAuthenticated, isLoading } = useAuth0();

  if (isLoading) {
    return <div>Loading ...</div>;
  }

  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
      </div>
    )
  );
};


export {LoginButton, LogoutButton,Profile}