
import React, { Component} from "react";
import {hot} from "react-hot-loader";
import { HashRouter as Router, Route } from 'react-router-dom'
// import "./App.css";

// Pages
import HomePage from './home';

class App extends Component{
  render(){
    return(
      <Router>
        <Route exact path="/" component={HomePage}/>
      </Router>
    );
  }
}

export default hot(module)(App);
