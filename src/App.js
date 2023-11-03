import { BrowserRouter as Router, Routes as Switch, Route } from "react-router-dom";
import './App.css';
import Home from "./Home";
import Signin from "./sign_up";
import Login from "./log_in";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/api/" exact Component={Home} />
          <Route path="/sign-up" exact Component={Signin} />
          <Route path="/log-in" exact Component={Login} />

        </Switch>
      </div>
    </Router>
  );
}

export default App;
