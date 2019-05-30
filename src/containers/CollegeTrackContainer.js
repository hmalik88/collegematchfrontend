import React from 'react'
import '../scss/CollegeTrack.scss'
import addButton from '../images/add-button.svg'
import CreateModal from '../components/CreateModal'
import taskClose from '../images/task-delete.svg'
import { withRouter } from 'react-router-dom'
import cSchool from '../images/cschool.svg'

class CollegeTrackContainer extends React.Component {

  constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('track-root');
    this.state = {majorInputModal: '', collegeInputModal: '', college: {}, logoPic: '', campusImage: ''}
  }

  handleModalOpen = () => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'flex';
  }

  handleModalClose = e => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    this.setState({majorInputModal: '', collegeInputModal: ''})
  }

  handleChange = e => {
    this.setState({
      [e.target.className]: e.target.value
    });
  }

  handleTabClick = e => {
    let tabContainer = document.querySelector('#track-tab-container');
    let children = [...tabContainer.children];
    children.forEach(child => {
      child.style.opacity = 0.75
    })
    e.target.style.opacity = 1.0;
  }

  fetchCollegeInfo = () => {
    let id = this.props.match.params.college;
    fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${id}&info_ids=city%2Clogo_image%2Clong_description%2Cshort_description%2Ccampus_image`)
    .then(res => res.json())
    .then(collegeInfo => {
      this.setState({
        college: collegeInfo.colleges[0],
        collegeInputModal: collegeInfo.colleges[0].name,
        logoPic: collegeInfo.colleges[0].logoImage ? (collegeInfo.colleges[0].logoImage) : (cSchool),
        campusImage: collegeInfo.colleges[0].campusImage,
        shortDescription: collegeInfo.colleges[0].shortDescription
      })
    })
  }

  componentDidMount() {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    let tabContainer = document.querySelector('#track-tab-container');
    tabContainer.children[0].style.opacity = 1.0;
    this.fetchCollegeInfo();
  }

  render() {
    return(
      <>
        <div id="second-portion-left-tracks">
          <h1 id="track-college-name">{this.state.college.name}</h1>
          <div id="track-logo"><img className="logoPic" src={this.state.logoPic} alt='' /></div>
        </div>
        <div id="second-portion-right-tracks">
          <h2 id="create-track-tracks">Create a track</h2>
          <img onClick={this.handleModalOpen} id="add-button-tracks" src={addButton} alt="add-button" />
        </div>
        <div id="track-tab-container">
          <div className="track-tab" onClick={this.handleTabClick}>
            <h1 id="tab-label1">Finance</h1>
          </div>
          <div className='track-tab' onClick={this.handleTabClick}>
            <h1 id="tab-label2">Computer Science</h1>
          </div>
        </div>
        <div id="top-folder">
          <div id="track-folder-left">
            <div id="left-folder-container">
              <div id="track-pic-container">
                <img src={this.state.campusImage} alt="" className="campus-image-tracks" />
              </div>
              <div id="track-description-container">
                <div className="track-description-text">
                  {this.state.shortDescription}
                </div>
              </div>
              <div id="track-info-container">
                <div>
                  <label className="info-label">Application Fee:</label>
                  <span className="college-info">$60</span>
                </div>
                <div>
                  <label className="info-label">Application Deadline:</label>
                  <span className="college-info">12/15/19</span>
                </div>
                <div>
                  <label className="info-label">Early Action Deadline:</label>
                  <span className="college-info">9/1/19</span>
                </div>
                <div>
                  <label className="info-label">SAT Requirement:</label>
                  <span className="college-info">1400</span>
                </div>
                <div>
                  <label className="info-label">SAT Average:</label>
                  <span className="college-info">1500</span>
                </div>
                <div>
                  <label className="info-label">Undergraduate Size:</label>
                  <span className="college-info">3,500</span>
                </div>
                <div>
                  <label className="info-label">GPA Requirement:</label>
                  <span className="college-info">4.0</span>
                </div>
                <div>
                  <label className="info-label">Acceptance Rate:</label>
                  <span className="college-info">5%</span>
                </div>
                <div>
                  <label className="info-label">Avg. Federal Grant Aid:</label>
                  <span className="college-info">$10,000</span>
                </div>
                <div>
                  <label className="info-label">Avg. Financial Aid:</label>
                  <span className="college-info">$3,000</span>
                </div>
                <div>
                  <label className="info-label">Avg. Housing Cost:</label>
                  <span className="college-info">$60</span>
                </div>
                <div>
                  <label className="info-label">Avg. Cost of Attendance:</label>
                  <span className="college-info">$60</span>
                </div>
              </div>
            </div>
          </div>
          <div id="track-folder-right">
            <div id="right-folder-first">
              <h1 id="task-list-title">TASK LIST</h1>
            </div>
            <div id="right-folder-second">
              <hr className="task-divider" />
            </div>
            <div id="right-folder-third">
              <div id="tasks-container">
                <div className="task">
                  <p className="task-text">Set up networking meeting w/ Kevin</p>
                  <img className="task-close" src={taskClose} alt="x" />
                </div>
                <div className="task">
                  <p className="task-text">Read Hedge Fund Wizards</p>
                  <img className="task-close" src={taskClose} alt="x" />
                </div>
                <div className="task">
                  <p className="task-text">Finish IB Bootcamp</p>
                  <img className="task-close" src={taskClose} alt="x" />
                </div>
                <div className="task">
                  <p className="task-text">Work on financial modeling skills</p>
                  <img className="task-close" src={taskClose} alt="x" />
                </div>
                <div className="task">
                  <p className="task-text">Watch youtube videos on stock market</p>
                  <img className="task-close" src={taskClose} alt="x" />
                </div>
              </div>
            </div>
            <div id="right-folder-fourth">
              <input id="task-input" type="text" placeholder="Enter Task..." />
            </div>
          </div>
        </div>
        <CreateModal handleChange={this.handleChange} majorInputModal={this.state.majorInputModal} collegeInputModal={this.state.collegeInputModal} handleModalClose={this.handleModalClose} />
      </>
      )
  }

}

export default withRouter(CollegeTrackContainer)
