import React from 'react'
import collegedata from '../collegedata.json'
import '../scss/Home.scss'
import navlogo from '../images/cm-nav-logo.png'
import addButton from '../images/add-button.svg'
import leftButton from '../images/left_carousel_button.svg'
import rightButton from '../images/right_carousel_button.svg'

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

  componentDidMount() {
    this.fetchAllColleges();
    let root = document.querySelector('#root');
    if ([root.classList].includes('login-root')) {
      root.classList.toggle('login-root')
    }
  }

  render() {
    return(
      <>
        <div id="home-nav">
          <h2 id="logout-option" className="nav-options">Log Out</h2>
          <h2 id="search-option" className="nav-options">Search</h2>
          <h2 id="home-option" className="nav-options">Home</h2>
        </div>
        <div id="second-portion-home-left">
          <h1 id="home-current-tracks">Current Tracks:</h1>
        </div>
        <div id="second-portion-home-right">
          <h2 id="create-track-home">Create a track</h2>
          <img id="add-button" src={addButton} alt="add-button" />
        </div>
        <div id="carousel-container">
          <div id="left-button-container">
            <img id="left-carousel-button" src={leftButton} alt="left-button" />
          </div>
          <div id="college-carousel"></div>
          <div id="right-button-container">
            <img id="right-carousel-button" src={rightButton} alt="right-button" />
          </div>
        </div>
        <div id="third-portion-home-left">
          <button id="analytics-button">Run Analytics</button>
        </div>
        <div id="third-portion-home-right">
          <button id="intellimatch-button">IntelliMatch</button>
        </div>
        <img id="nav-logo" src={navlogo} alt="nav-logo" />
      </>
      )
  }
}
