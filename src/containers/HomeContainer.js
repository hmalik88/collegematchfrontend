import React from 'react'
import collegedata from '../collegedata.json'
import '../scss/Home.scss'
import NavBar from './NavBar'
import addButton from '../images/add-button.svg'
import leftButton from '../images/left_carousel_button.svg'
import rightButton from '../images/right_carousel_button.svg'
import closeModal from '../images/exit-button-create-modal.svg'

export default class HomeContainer extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.classList.remove('login-root');
    root.classList.toggle('home-root');
    this.state = {colleges: []}
  }

  getUnitIDs = () => {
    let unitIDs = '';
    collegedata.forEach(college => {
      unitIDs += college['Unit Id'] + '%2C'
    });
    return unitIDs;
  }

  fetchAllColleges = () => {
    let unitIDs = this.getUnitIDs();
    fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${unitIDs}&info_ids=city%2Cin_state_tuition%2Cwebsite%2Cacceptance_rate%2Cavg_cost_of_attendance`)
    .then(res => res.json())
    .then(json => this.setState({colleges: json.colleges}));
  }

  handleClick = e => {
    e.target.classList.toggle('left-pressed-down')
  }

  handleModalOpen = () => {
    let modal = document.querySelector('#create-track-modal');
    modal.style.display = 'flex';
  }

  handleModalClose = e => {
    let modal = document.querySelector('#create-track-modal');
    modal.style.display = 'none';
  }

  componentDidMount() {
    this.fetchAllColleges();
    let root = document.querySelector('#root');
    if ([root.classList].includes('login-root')) {
      root.classList.toggle('login-root')
    }
    let modal = document.querySelector('#create-track-modal');
    modal.style.display = 'none';
  }

  render() {
    return(
      <>
        <NavBar />
        <div id="second-portion-home-left">
          <h1 id="home-current-tracks">Current Tracks:</h1>
        </div>
        <div id="second-portion-home-right">
          <h2 id="create-track-home">Create a track</h2>
          <img onClick={this.handleModalOpen} id="add-button" src={addButton} alt="add-button" />
        </div>
        <div id="carousel-container">
          <div id="left-button-container">
            <img onMouseDown={this.handleClick} onMouseUp={this.handleClick} id="left-carousel-button" src={leftButton} alt="left-button" />
          </div>
          <div id="college-carousel">
            <div id="college-1"></div>
          </div>
          <div id="right-button-container">
            <img onMouseDown={this.handleClick} onMouseUp={this.handleClick} id="right-carousel-button" src={rightButton} alt="right-button" />
          </div>
        </div>
        <div id="third-portion-home-left">
          <button id="analytics-button">Run Analytics</button>
        </div>
        <div id="third-portion-home-right">
          <button id="intellimatch-button">IntelliMatch</button>
        </div>
        <div id="create-track-modal">
          <div id="header-create-track-modal">
            <div id="left-header">
              <h2 id="create-modal-title">New Track</h2>
            </div>
            <div id="right-header">
              <img onClick={this.handleModalClose} id="close-button-modal" src={closeModal} alt="close-modal" />
            </div>
          </div>
          <div id="inner-create-track-modal">
            <p id="home-modal-text">Create a quick template to work on later!</p>
            <div id="modal-sec1"><label id="major-modal-label">Major</label><input type="text" id="major-input-modal" /></div>
            <div id="modal-sec2"><label id="college-modal-label">College</label><input type="text" id="college-input-modal" /></div>
            <button id="modal-create-track">Create track</button>
          </div>
        </div>

      </>
      )
  }
}
