import React from 'react'
import collegedata from '../collegedata.json'
import '../scss/Home.scss'
import addButton from '../images/add-button.svg'
import leftButton from '../images/left_carousel_button.svg'
import rightButton from '../images/right_carousel_button.svg'
import CreateModal from '../components/CreateModal'
import { Link } from 'react-router-dom'

export default class HomeContainer extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('home-root');
    this.state = {colleges: [], majorInputModal: '', collegeInputModal: ''}
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
    e.target.classList.toggle('pressed-down')
  }

  handleModalOpen = () => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'flex';
  }

  handleChange = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
  }

  handleModalClose = e => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    this.setState({majorInputModal: '', collegeInputModal: ''})
  }

  componentDidMount() {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    this.fetchAllColleges();
    let root = document.querySelector('#root');
    if ([root.classList].includes('login-root')) {
      root.classList.toggle('login-root')
    }
  }

  render() {
    return(
      <>
        <div id="second-portion-home-left">
          <h1 id="home-current-tracks">Current Tracks:</h1>
        </div>
        <div id="second-portion-home-right">
          <h2 id="create-track-home">Create a track</h2>
          <img onClick={this.handleModalOpen} id="add-button" src={addButton} alt="" />
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
          <Link to="/intellimatch" className="im-link"><button id="intellimatch-button">IntelliMatch</button></Link>
        </div>
        <CreateModal handleChange={this.handleChange} majorInputModal={this.state.majorInputModal} collegeInputModal={this.state.collegeInputModal} handleModalClose={this.handleModalClose} />
      </>
      )
  }
}
