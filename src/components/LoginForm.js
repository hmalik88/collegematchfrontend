import React from 'react'

export defauls class LoginForm extends React.Component {

  state = {email: '', password: ''}

  render() {
    <div>
      <form>
        <input type="text" value={this.state.email} />
        <input type="password" value={this.state.password} />
        <button type="submit" />
      </form>
    </div>
  }

}
