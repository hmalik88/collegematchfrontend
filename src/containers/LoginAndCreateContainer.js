import React from 'react'
import CreateUserForm from '../components/CreateUserForm'
import '../scss/LoginAndCreate.scss'
import LoginForm from '../components/LoginForm'

export default class LoginAndCreateContainer extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.classList.remove('welcome-root');
    root.classList.toggle('login-root');
  }

  handleSubmit = e => {
    e.preventDefault()
    let user = {
      user: {
        first_name: e.target[0].value,
        last_name: e.target[1].value,
        e_mail: e.target[2].value,
        password: e.target[3].value,
        address_line_1: e.target[4].value,
        address_line_2: e.target[5].value,
        unit: e.target[6].value,
        city: e.target[7].value,
        state: e.target[8].value,
        zip_code: parseInt(e.target[9].value)
      }
    }

    fetch('http://localhost:3000/api/v1/users', {
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify(user)
    })
  }

  componentDidMount() {
    let root = document.querySelector('#root');
    if ([root.classList].includes('welcome-root')) {
      root.classList.toggle('welcome-root')
    }
  }


  render() {
    return(
      <>
        <h1 className='create-title'>Create an account</h1>
        <h1 className='login-title'>Log in</h1>
        <CreateUserForm handleSubmit={this.handleSubmit} />
        <hr className="page-divider" />
        <LoginForm handleLogin={this.props.handleLogin} />
      </>
      )
  }

}
