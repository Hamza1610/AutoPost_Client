
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';

import SignUp from "./components/SignUp";
import LogIn from "./components/LogIn";
import Home from "./components/Home";

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
        <Route Component={SignUp} path='/sign-up'/>
        <Route Component={LogIn} path='/log-in'/>
        <Route Component={Home} path='/home'/>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
