import React from 'react'

export default class CreateUserForm extends React.Component {
  state = {email: "", password: ""}

  handleChange = e => {
    if (e.target.type === 'text') {
      this.setState({email: e.target.value})
    } else {
      this.setState({password: e.target.value})
    }
  }

  render() {
    return(
      <div>
        <h1>Create Your Account</h1>
        <form onSubmit={this.props.handleSubmit}>
        E-mail: <input onChange={this.handleChange} type="text" value={this.state.email} /><br/>
        Password: <input onChange={this.handleChange} type="password" value={this.state.password} /><br/><br/>
        <button type="submit">Create Account</button>
        </form>
      </div>
      )
  }

}
