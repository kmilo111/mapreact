import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";
import  Home from "./initial/Home.js";
import  Login from "./initial/Login.js";
import  Signup from "./initial/Signup.js";

const Header = () =>{
  return (
    <nav>
      <Link to="/"></Link>
      <Link to="/home">Home</Link>
      <Link to="/signup">Signup</Link>
    </nav>
  )
}

const App = () =>{
  
    return (
      <Router>
       <div>
          <Header/>
          <Route exact path="/" component={Login} />
          <Route path="/home" component={Home} />
          <Route path="/signup" component={Signup} />
       </div>
     </Router>
    )
  
}

export default App