import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Welcome.scss'

const WelcomeContainer = () => {
  return(
    <>
      <h1 className='welcome'>CollegeMatch</h1>
        <p className='collegematch-intro'>
          Analytics and tracking platform for<br/> making the match that <span className='maters'>maters</span>
        </p>
      <div className='welcome-button'>
        <Link to="/login">
        Please sign up or log in
        </Link>
      </div>
    </>
        )
}

export default WelcomeContainer
