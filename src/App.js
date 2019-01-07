import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import './App.css';
import LoginContainer from './containers/LoginContainer'
import CreateUserContainer from './containers/CreateUserContainer'
import WelcomeContainer from './containers/WelcomeContainer'
import DashboardContainer from './containers/DashboardContainer'
import NavBar from './containers/NavBar'
import CollegeSearchContainer from './containers/CollegeSearchContainer'
import CollegeContainer from './containers/CollegeContainer'

class App extends Component {
  constructor() {
    super()
    this.state= {user: null}
  }

  handleLogin = e => {
  e.preventDefault()
  let email = e.target[0].value
  let password = e.target[1].value
  let login = {
    user: {
      "e_mail": email,
      "password": password
    }
  }
  this.setUser(login)

  }

  setUser = login => {
    fetch('http://localhost:3000/api/v1/login', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(login)
    })
    .then(res => res.json())
    .then(res => {
      localStorage.setItem("token", res.jwt)
      this.setState({user: res.user})
    })
    .then(() => {
      this.props.history.push("/dashboard")
    })

  }

  logOut = () => {
    localStorage.removeItem("token")
    this.setState({user: null})
  }

  componentDidMount() {
    let token = localStorage.getItem("token")
    if (token !== null ) {
      fetch('http://localhost:3000/api/v1/current_user', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Action: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => this.setState({user: res.user}))
  } else {
    return <Redirect to="/login" />
  }
  }

  render() {
    return (
      <div className="App">
        <NavBar logOut={this.logOut} />
        <Switch>
          <Route path="/:linkName/info" render={() => <CollegeContainer props={this.props} unitId={this.props.location.unitId} />} />
          <Route exact path="/dashboard" render={() => <DashboardContainer user={this.state.user} />} />
          <Route exact path="/search" component={CollegeSearchContainer} />
          <Route exact path="/signup" component={CreateUserContainer} />
          <Route exact path="/login" render={() => <LoginContainer handleLogin={this.handleLogin} />} />
          <Route path="/" render={WelcomeContainer} />

        </Switch>
      </div>
    );
  }
}

export default withRouter(App);
