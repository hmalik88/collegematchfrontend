import React from 'react'
import LoginForm from '../components/LoginForm'
import { Link }  from 'react-router-dom'

export default class LoginContainer extends React.Component {

  handleSubmit = (e) => {

  }

  render() {
    return(
      <div>
        <h1>CollegeMatch</h1>
        <p className="collegematch-intro">
          College Match was created with the sole purpose of helping young adults and others seeking higher education an easy way to narrow down their options when it comes to finding a college that is a good fit for them!
        </p>
        <LoginForm handleSubmit={this.handleSubmit} /><br/>
        <Link style={{display: 'block', height: '100%'}} to="/signup"><button>Create an Account</button></Link>
      </div>

      )
  }

}
