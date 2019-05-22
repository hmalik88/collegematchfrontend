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
    this.state = {colleges: [], majorInputModal: '', collegeInputModal: '',
    }
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
    let modal = document.querySelector('.collegeInputModal');
    let resultField = document.querySelector('.search-drop-down');
    if (modal === e.target && this.state.collegeInputModal.length > 1) {
      resultField.style.display = 'flex'
      this.fetchColleges(this.state.collegeInputModal)
    } else if (this.state.collegeInputModal === '') {
      resultField.style.height = '0px';
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
      return null
    } else {
      return this.state.colleges.map((college, idx) => {
        if (idx > 3) {
          return null;
        }
        return <div className="college-li" onClick={this.handleSelection}><div className="search-term-result" >{college.name}</div></div>
      })
    }
  }

  handleSelection = e => {
    let name;
    if (e.target.className === 'college-li') {
      let child = e.target.children[0];
      name = child.innerText;
    } else if (e.target.className === 'search-term-result') {
      name = e.target.innerText;
    }
    this.setState({collegeInputModal: name, colleges: []})
    let resultField = document.querySelector('.search-drop-down');
    resultField.style.display = 'none'
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
    this.setState({majorInputModal: '', collegeInputModal: ''})
  }

  componentDidMount() {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    let resultBox = document.querySelector('.search-drop-down');
    resultBox.style.height = '0px'
  }

  render() {
    let results = this.handleResults();
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
        <div className="search-drop-down">{results}</div>
      </>
      )
  }
}
