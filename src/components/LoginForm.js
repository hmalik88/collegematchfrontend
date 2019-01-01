import React from 'react'

export default class LoginForm extends React.Component {

  state = {email: '', password: ''}

  handleChange = (e) => {
    if (e.target.type === 'text') {
      this.setState({email: e.target.value})
    } else {
      this.setState({password: e.target.value})
    }
  }

  render() {
    return(
      <div>
        <form>
          Email: <input onChange={this.handleChange} type="text" value={this.state.email} /><br/>
          Password: <input onChange={this.handleChange} type="password" value={this.state.password} /><br/>
          <button type="submit">Login</button>
        </form>
      </div>
      )
  }

}
