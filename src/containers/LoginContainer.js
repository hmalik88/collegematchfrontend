import React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginContainer extends React.Component {

  render() {
    return(
      <div>
        <h1>Login to your account!</h1>
        <LoginForm handleLogin={this.props.handleLogin} /><br/>
      </div>

      )
  }

}
