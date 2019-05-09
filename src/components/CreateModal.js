import React from 'react'
import closeModal from '../images/exit-button-create-modal.svg'
import '../scss/Modal.scss'

export default class CreateModal extends React.Component {



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
          <button className="modal-create-track">Create track</button>
        </div>
      </div>
      )
  }
}
