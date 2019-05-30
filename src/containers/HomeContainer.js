import React from 'react'
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
    root.addEventListener('click', () => {
      let searchBox = document.querySelector('.search-drop-down');
      if (searchBox && searchBox.style.display === 'flex') {
        searchBox.style.display='none'
      }
    })
    this.state = {
      colleges: [],
      majorInputModal: '',
      collegeInputModal: '',
      unitId: '',
      logoPics: [],
      tracks: []
    }
  }

  handleClick = e => {
    e.target.classList.toggle('pressed-down');
  }

  handleModalOpen = () => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'flex'
  }

  handleChange = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
    let modal = document.querySelector('.collegeInputModal');
    let resultField = document.querySelector('.search-drop-down');
    if (modal === e.target && this.state.collegeInputModal.length > 1) {
      resultField.style.display = 'flex';
      [...resultField.children].forEach(child => child.style.display = 'flex')
      this.fetchColleges(this.state.collegeInputModal)
    } else if (this.state.collegeInputModal === '') {
      resultField.style.display = 'none';
      [...resultField.children].forEach(child => child.style.display = 'none')
    }
  }

  fetchColleges = searchTerm => {
    return fetch(`https://api.collegeai.com/api/autocomplete/colleges?api_key=9FMs2Rj3ARpA&query=${searchTerm}`)
    .then(res => res.json())
    .then( async colleges => {
      this.setState({colleges: colleges.collegeList})
      this.handleSearchResize();
    })
  }

  handleResults = () => {
    if (!this.state.colleges) {
      return null;
    } else {

      let result = this.state.colleges.map((college, idx) => {
        if (idx > 3) {
          return null;
        }
        let name = `college-li ${college.unitId}`
        return (<div className={name} onClick={this.handleSelection}><div className="search-term-result">{college.name}</div></div>);
      })
      return result;
    }
  }

  handleSelection = e => {
    let name;
    let collegeList = [...e.target.classList];
    if (collegeList.includes('college-li')) {
      let child = e.target.children[0];
      name = child.innerText;
      this.setState({unitId: collegeList[1]})
    } else if (e.target.className === 'search-term-result') {
      name = e.target.innerText;
      let elList = [...e.target.parentElement.classList];
      this.setState({unitId: elList[1]})
    }
    this.setState({collegeInputModal: name, colleges: []})
    let resultField = document.querySelector('.search-drop-down');
    resultField.style.display = 'none';
  }

  handleSearchResize = () => {
    let collegeCount = this.state.colleges.length > 4 ? (4) : (this.state.colleges.length);
    let resultField = document.querySelector('.search-drop-down');
    let amount = collegeCount * 0.25 * 250;
    resultField.style.height = amount + 'px'
  }

  handleModalClose = e => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    this.setState({majorInputModal: '', collegeInputModal: '', unitId: ''})
  }

  handleCreateTrack = () => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    let trackObj = {
      "college_track": {
        "major": this.state.majorInputModal,
        "user_id": this.props.user.id,
        "college_id": this.state.unitId
      }
    }
    let token = localStorage.getItem("token")
    fetch('http://localhost:3000/api/v1/tracks', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        Action: "application/json",
        Authorization: `Bearer ${token}`
      },
      body: JSON.stringify(trackObj)
    })
    .then(res => res.json())
    .then(json => {
      console.log(json)
      this.getTracks();
    })
  }

  getTracks = () => {
    let token = localStorage.getItem("token")
    if (token !== null ) {
      fetch('http://localhost:3000/api/v1/tracks', {
      method: 'GET',
      headers: {
        "Content-Type": "application/json",
        Action: "application/json",
        Authorization: `Bearer ${token}`
      }
    })
    .then(res => res.json())
    .then(res => {
      this.setState({tracks: res})
      console.log(this.state.tracks.tracks)
      this.pullLogos()
    })
  } else {
    this.props.history.push("/login");
  }
  }

  pullLogos = () => {
    if (this.state.tracks && this.state.tracks.tracks) {
      let list = this.state.tracks.tracks.map(track => track.college_id).join('%2C');
      console.log(list)
      fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${list}&info_ids=logo_image`)
      .then(res => res.json())
      .then(collegeInfo => {
        this.setState({logoPics: collegeInfo.colleges})
      })
    }
  }

  generateCircles = () => {
    if (this.state.logoPics.length > 0) {
      console.log(this.state.logoPics)
      return this.state.logoPics.map(logo => {
        return (<div className="college-circle"><Link className="home-circle-link" to={`/${logo.collegeUnitId}/tracks`}><img className="home-circle-logo" src={logo.logoImage} alt="" /></Link></div>)
      })
    } else {
      return null;
    }
  }



  componentDidMount() {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    let resultBox = document.querySelector('.search-drop-down');
    resultBox.style.height = '0px'
    this.getTracks();
  }

  render() {
    let results = this.handleResults();
    let circles = this.generateCircles();
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
            {circles}
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
        <CreateModal handleChange={this.handleChange} majorInputModal={this.state.majorInputModal} collegeInputModal={this.state.collegeInputModal} handleModalClose={this.handleModalClose} handleCreateTrack={this.handleCreateTrack} />
        <div className="search-drop-down">{results}</div>
      </>
      )
  }
}
