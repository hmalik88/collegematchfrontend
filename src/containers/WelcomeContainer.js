import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Welcome.scss'

const WelcomeContainer = () => {
  return(
    <>
    <h1 className='welcome'>CollegeMatch</h1>
      <p className='collegematch-intro'>
        Analytics and tracking platform for making the match that <span className='maters'>maters</span>
      </p>
      <Link style={{display: 'inline', height: '100%'}} to="/signup"><button>Create an Account</button></Link>
      <Link style={{display: 'inline', height: '100%'}} to="/login"><button>Login</button></Link>
    </>
        )
}

export default WelcomeContainer
