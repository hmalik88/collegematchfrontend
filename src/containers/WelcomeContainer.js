import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Welcome.scss'
import logo from '../images/cm-logo-welcome.svg'
import card from '../images/cmcardfront.svg'


const WelcomeContainer = () => {
  return(
    <>
      <div id="card-1" className="card" src={card} alt="card"></div>
      <div id="card-2" className="card" src={card} alt="card"></div>
      <div id="card-3" className="card" src={card} alt="card"></div>
      <div id="card-4" className="card" src={card} alt="card"></div>
      <div id="card-5" className="card" src={card} alt="card"></div>
      <div id="card-6" className="card" src={card} alt="card"></div>
      <div id="card-7" className="card" src={card} alt="card"></div>
      <div id="card-8" className="card" src={card} alt="card"></div>
      <div id="card-9" className="card" src={card} alt="card"></div>
      <h1 className='welcome'>CollegeMatch</h1>
      <img id="logo" src={logo} alt="logo" />
      <p className='collegematch-intro'>
        Analytics and tracking platform for<br/> making the match that <span className='maters'>maters</span>
      </p>
      <Link className='welcome-button' to="/login">
        <div>
          Please sign up or log in
        </div>
      </Link>
    </>
        )
}

export default WelcomeContainer;
