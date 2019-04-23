import React from 'react';
import NavBar from './NavBar'
import '../scss/Survey.scss'

export default class Survey extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('survey-root');
  }

  render() {
    return(
      <>
        <NavBar />
        <div>
        </div>
      </>
      )
  }
}
