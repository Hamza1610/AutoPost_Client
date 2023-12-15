import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
// import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Home";
import SignUp from "./SignUp";
import SignIn from "./SignIn";
import Auth from "./authenticate-page";
import Landing from "./LandingPage";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact Component={Landing} />
          <Route path="/api/" exact Component={Home} />
          <Route path="/sign-up" exact Component={SignUp} />
          <Route path="/auth/" exact Component={Auth} />
          <Route path="/sign-in" exact Component={SignIn} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
