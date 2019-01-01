import React from 'react'
import LoginForm from '../components/LoginForm'

export default class LoginContainer extends React.Component {

  render() {
    return(
      <div>
        <h1>CollegeMatch</h1>
        <p class="collegematch-intro">
          College Match was created with the sole purpose of helping young adults and others seeking higher education an easy way to narrow down their options when it comes to finding a college that is a good fit for them!
        </p>
        <LoginForm />
        <button>Create an Account</button>
      </div>

      )
  }

}
