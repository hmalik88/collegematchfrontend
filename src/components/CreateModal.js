import React from 'react'
import { withRouter } from 'react-router-dom'
import closeModal from '../images/exit-button-create-modal.svg'
import '../scss/Modal.scss'

class CreateModal extends React.Component {

  componentDidMount() {
    let locationArr = this.props.match.url.split('/')
    if (locationArr.includes('info') || locationArr.includes('tracks')) {
      let collegeInput = document.querySelector('.collegeInputModal');
      collegeInput.removeEventListener('onChange', this.props.handleChange)
      collegeInput.classList.toggle('grayed-input');
    }
  }

  render() {
    return(
      <div className="create-track-modal">
        <div className="header-create-track-modal">
          <div className="left-header">
            <h2 className="create-modal-title">New Track</h2>
          </div>
          <div className="right-header">
            <img onClick={this.props.handleModalClose} className="close-button-modal" src={closeModal} alt="close-modal" />
          </div>
        </div>
        <div className="inner-create-track-modal">
          <p className="home-modal-text">Create a quick template to work on later!</p>
          <div className="modal-sec1"><label className="major-modal-label">Major</label><input type="text" onChange={this.props.handleChange} className="majorInputModal" value={this.props.majorInputModal} /></div>
          <div className="modal-sec2"><label className="college-modal-label">College</label><input type="text" onChange={this.props.handleChange} className="collegeInputModal" value={this.props.collegeInputModal} /></div>
          <button onClick={this.props.handleCreateTrack} className="modal-create-track">Create track</button>
          <div className="spacer"></div>
        </div>
      </div>
      )
  }
}


export default withRouter(CreateModal)
