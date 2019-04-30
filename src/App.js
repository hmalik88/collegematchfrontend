import React, { Component } from 'react';
import { Route, Switch, Redirect, withRouter} from 'react-router-dom';
import LoginAndCreateContainer from './containers/LoginAndCreateContainer'
import WelcomeContainer from './containers/WelcomeContainer'
import HomeContainer from './containers/HomeContainer'
import CollegeSearchContainer from './containers/CollegeSearchContainer'
import CollegeInfoContainer from './containers/CollegeInfoContainer'
import CollegeTrackContainer from './containers/CollegeTrackContainer.js'
import IntelliMatch from './containers/IntelliMatch'
import Survey from './containers/Survey'
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
          <Route exact path="/:college/tracks" render={ () => <CollegeTrackContainer />} />
          <Route exact path="/:linkName/info" render={() => <CollegeInfoContainer props={this.props} unitId={this.props.location.unitId} />} />
          <Route exact path="/intellimatch/:number" render={() => <Survey {...this.props} />} />
          <Route exact path="/intellimatch" render={() => <IntelliMatch />} />
          <Route exact path="/home" render={() => <HomeContainer user={this.state.user} />} />
          <Route exact path="/search" component={CollegeSearchContainer} />
          <Route exact path="/login" render={() => <LoginAndCreateContainer handleLogin={this.handleLogin} />} />
          <Route exact path="/" component={WelcomeContainer} />
        </Switch>
      </>
    );
  }
}

export default withRouter(App);
