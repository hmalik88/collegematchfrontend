import React from 'react'
import collegedata from '../collegedata.json'
import '../scss/Home.scss'
import navlogo from '../images/cm-nav-logo.png'

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
          <h2 id="home-option">Home</h2>
          <h2 id="search-option">Search</h2>
          <h2 id="logout-option">Log Out</h2>
        </div>
        <h1 id="home-current-tracks">Current Tracks:</h1>
        <div id="carousel-container"></div>
        <img id="nav-logo" src={navlogo} alt="nav-logo" />
      </>
      )
  }
}
