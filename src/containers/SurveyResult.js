import React from 'react'
import '../scss/SurveyResults.scss'

export default class SurveyResult extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('result-root');
  }

  render() {
    return(
      <div>
      </div>
      )
  }
}
