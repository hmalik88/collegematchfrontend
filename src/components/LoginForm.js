import React from 'react'

export default class LoginForm extends React.Component {

  state = {email: '', password: ''}

  handleChange = e => {
    if (e.target.type === 'text') {
      this.setState({email: e.target.value})
    } else {
      this.setState({password: e.target.value})
    }
  }

  render() {
    return(
      <>
        <form className='login-form' onSubmit={this.props.handleLogin}>
          <label className='login-label'>E-mail</label><input id="first-login-input" onChange={this.handleChange} type="text" className='login-input' value={this.state.email} /><br/>
          <label className='login-label'>Password</label><input id="password-login" onChange={this.handleChange} type="password" className='login-input' value={this.state.password} /><br/>
          <button className='login-submit' type="submit">Login</button>
        </form>
      </>
      )
  }

}
