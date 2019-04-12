import React from 'react'
import { Link } from 'react-router-dom'
import '../scss/Welcome.scss'
import logo from '../images/cm-logo-welcome.svg'
import cardfront from '../images/cmcardfront.svg'
import redcard from '../images/red-card.svg'
import bluecard from '../images/blue-card.svg'

export default class WelcomeContainer extends React.Component {

  componentDidMount() {
    let card1 = document.querySelector('.flip-card1-inner');
    let card3 = document.querySelector('.flip-card3-inner');
    let card4 = document.querySelector('.flip-card4-inner');
    let card6 = document.querySelector('.flip-card6-inner');
    setTimeout(() => {
      card1.classList.toggle('flip')
    }, 1000)
    setTimeout(() => {
      card1.classList.toggle('flip')
    }, 1750)
    setTimeout(() => {
      card6.classList.toggle('flip')
    }, 2500)
    setTimeout(() => {
      card6.classList.toggle('flip')
    }, 3250)
    setTimeout(() => {
      card4.classList.toggle('flip')
    }, 4000)
    setTimeout(() => {
      card3.classList.toggle('flip')
    }, 4750)
  }


  render() {
  return(
    <>
      <div id="card-1" className="card flip-card1" alt="card">
        <div className="flip-card1-inner">
          <div className="flip-card1-front">
            <img className='card-image' src={cardfront} alt="" />
          </div>
          <div className="flip-card1-back">
            <img className='card-image' src={redcard} alt="" />
          </div>
        </div>
      </div>
      <div id="card-2" className="card" alt="card"></div>
      <div id="card-3" className="card flip-card3" alt="card">
        <div className="flip-card3-inner">
          <div className="flip-card3-front">
            <img className='card-image' src={cardfront} alt="" />
          </div>
          <div className="flip-card3-back">
          <img className='card-image' src={bluecard} alt="" />
          </div>
        </div>
      </div>
      <div id="card-4" className="card flip-card4" alt="card">
        <div className="flip-card4-inner">
          <div className="flip-card4-front">
            <img className='card-image' src={cardfront} alt="" />
          </div>
          <div className="flip-card4-back">
          <img className='card-image' src={bluecard} alt="" />
          </div>
        </div>
      </div>
      <div id="card-5" className="card" alt="card"></div>
      <div id="card-6" className="card flip-card6" alt="card">
        <div className="flip-card6-inner">
          <div className="flip-card6-front">
            <img className='card-image' src={cardfront} alt="" />
          </div>
          <div className="flip-card6-back">
          <img className='card-image' src={bluecard} alt="" />
          </div>
        </div>
      </div>
      <div id="card-7" className="card" alt="card"></div>
      <div id="card-8" className="card" alt="card"></div>
      <div id="card-9" className="card" alt="card"></div>
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
}

