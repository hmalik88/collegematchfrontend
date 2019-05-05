import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import LoginAndCreateContainer from './containers/LoginAndCreateContainer'
import WelcomeContainer from './containers/WelcomeContainer'
import NavComponents from './containers/NavComponents'
import './scss/App.scss'


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
      this.props.history.push("/home")
    })

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
      <>
        <Switch>
          <Route exact path="/login" render={() => <LoginAndCreateContainer handleLogin={this.handleLogin} />} />
          <Route exact path="/" component={WelcomeContainer} />
          <NavComponents user={this.state.user} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
