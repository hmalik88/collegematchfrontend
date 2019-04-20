import React from 'react'
import '../scss/CollegeTrack.scss'
import NavBar from './NavBar'
import addButton from '../images/add-button.svg'

export default class CollegeTrackContainer extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('track-root');
  }

  render() {
    return(
      <>
        <NavBar />
        <div id="second-portion-left-tracks">
          <h1 id="track-college-name">Harvard University</h1>
          <div id="track-logo"></div>
        </div>
        <div id="second-portion-right-tracks">
          <h2 id="create-track-tracks">Create a track</h2>
          <img onClick={this.handleModalOpen} id="add-button-tracks" src={addButton} alt="add-button" />
        </div>
        <div id="track-tab-container">
          <div id="test-tab1">
            <h1 id="tab-label1">Finance</h1>
          </div>
          <div id="test-tab2">
            <h1 id="tab-label2">Computer Science</h1>
          </div>
        </div>
        <div id="track-folder">
        </div>
      </>
      )
  }

}
