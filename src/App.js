import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer'
import CreateUserContainer from './containers/CreateUserContainer'


class App extends Component {
  render() {
    let changeURL = () => {
      let newState = {goal: "Login or sign up!"}
      window.history.pushState(newState, "login", "login")
    }
    return (
      <div className="App">
        <Switch>
          <Route path="/signup" component={CreateUserContainer} />
          <Route exact path="/" component={LoginContainer} />
        </Switch>
      </div>
    );
  }
}

export default App;
