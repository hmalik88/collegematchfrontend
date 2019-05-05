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
    this.state = {unitId: this.props.unitId, college: {}}
  }

  handleModalOpen = () => {
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'flex';
  }

  componentDidMount() {
    if (this.state.unitId !== undefined) {
      fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${this.state.unitId}&info_ids=city%2Cin_state_tuition%2Cwebsite`)
      .then(res => res.json())
      .then(collegeInfo => {
      this.setState({college: collegeInfo.colleges[0]})
      })
    } else {
      let collegeName = this.props.props.location.pathname
      let collegeId = collegeName.split('/')[1].split('_').join('-').toLowerCase()
      fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_ids=${collegeId}&info_ids=city%2Cin_state_tuition%2Cwebsite`)
      .then(res => res.json())
      .then(collegeInfo => {
        this.setState({college: collegeInfo.colleges[0]})
      })
    }
    let modal = document.querySelector('.create-track-modal');
    modal.style.display = 'none';
  }

  render() {
    return(
      <>
        <div id="college-first-portion-left">
          <h1 id="college-name">Harvard University</h1>
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
          </div>
        </div>
        <CreateModal />
      </>
      )
  }

}
