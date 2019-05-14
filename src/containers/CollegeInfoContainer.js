import React from 'react'
import '../scss/College.scss'
import addButton from '../images/add-button.svg'
import CreateModal from '../components/CreateModal.js'


export default class CollegeContainer extends React.Component {

  constructor(props) {
    super(props)
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('college-root');
    this.state = {
      college: {},
      majorInputModal: '',
      collegeInputModal: ''
    }
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

  fetchCollegeInfo = () => {
    let id = this.props.match.params.linkName;
    fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${id}&info_ids=city%2Ccampus_image%2Clong_description%2Cshort_description`)
    .then(res => res.json())
    .then(collegeInfo => {
      this.setState({college: collegeInfo.colleges[0]})
    })
  }

  componentDidMount() {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
    this.fetchCollegeInfo()
  }

  render() {
    return(
      <>
        <div id="college-first-portion-left">
          <h1 id="college-name">{this.state.college.name}</h1>
        </div>
        <div id="college-first-portion-right">
          <h2 id="create-track-college">Create a track</h2>
          <img onClick={this.handleModalOpen} id="add-button-college" src={addButton} alt="add-button" />
        </div>
        <div id="second-section-college">
          <hr className="college-divider" />
        </div>
        <div id="last-college-section-left">
          <div id="college-pic-container">
          </div>
        </div>
        <div id="last-college-section-right">
          <div id="college-info-container">
            {this.state.college.longDescription}
          </div>
        </div>
        <CreateModal handleChange={this.handleChange} majorInputModal={this.state.majorInputModal} collegeInputModal={this.state.collegeInputModal} handleModalClose={this.handleModalClose} />
      </>
      )
  }

}
