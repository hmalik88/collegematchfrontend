import React from 'react'
import { Link } from 'react-router-dom'

const WelcomeContainer = () => {
  return(
    <div>
    <h1>CollegeMatch</h1>
      <p className="collegematch-intro">
        College Match was created with the sole purpose of helping young adults and others seeking higher education an easy way to narrow down their options when it comes to finding a college that is a good fit for them!
      </p>
      <Link style={{display: 'inline', height: '100%'}} to="/signup"><button>Create an Account</button></Link>
      <Link style={{display: 'inline', height: '100%'}} to="/login"><button>Login</button></Link>
    </div>
        )
}

export default WelcomeContainer
