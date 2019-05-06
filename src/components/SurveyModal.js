import React from 'react'
import { withRouter } from 'react-router-dom'
import '../scss/SurveyModal.scss'
import SurveyModalEscape from '../images/survey-modal-escape.svg'

class SurveyModal extends React.Component {

  headerText = () => {
    if (this.props.questionNumber) {
      return <h1 className='survey-header-text'>Question {this.props.questionNumber} / 16</h1>
    }
  }

  bodyText = () => {
    if (this.props.questionBody) {
      return <div className='survey-body-text'>{this.props.questionBody.question}</div>
    }
  }

  selectionType = () => {
    let type = this.props.questionBody.type;
    switch (type) {
      case 'major':
        return this.majorSelection();
      case 'rank':
        return this.rankSelection();
      case 'binary':
        return this.binarySelection();
      case 'location':
        return this.locationSelection();
      default:
        return;
    }
  }

  majorSelection = () => {
    return (
        <select className="survey-select">
          <option value="0">Select major:</option>
          <option value="1">Art</option>
          <option value="2">Biology</option>
          <option value="3">Business</option>
          <option value="4">Chemistry</option>
          <option value="5">Communications</option>
          <option value="6">Computer Science</option>
          <option value="7">Design</option>
          <option value="8">Economics</option>
          <option value="9">Engineering</option>
          <option value="10">History</option>
          <option value="11">Nursing</option>
          <option value="12">Physics</option>
          <option value="13">Other / Undecided</option>
        </select>
    )
  }

  handleCircleChoice = e => {
    let list = document.querySelectorAll('.rank-circle');
    list.forEach(el => {
      let classList = [...el.classList]
      if (classList.includes('picked-circle')) {
        el.classList.toggle('picked-circle')
      }
    })
    e.target.classList.toggle('picked-circle');
  }

  rankSelection = () => {
    return(
      <div className="rank-selection">
        <hr className="rank-line" />
        <div className="not-desired-text">Not desired</div>
        <div className="not-desired-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="not-important-text">Not important</div>
        <div className="not-important-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="neutral-text">Neutral</div>
        <div className="neutral-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="little-importance-text">A little important</div>
        <div className="little-importance-circle rank-circle" onClick={this.handleCircleChoice}></div>
        <div className="very-important-text">Very Important</div>
        <div className="very-important-circle rank-circle" onClick={this.handleCircleChoice}></div>
      </div>
    )
  }

  handleEscape = () => {
    let message = "Please be aware that exiting out of this survey will discard any question choices you have made"
    if (window.confirm(message)) {
      this.props.history.push("/intellimatch")
    } else {
      return
    }
  }

  render() {
    return(
        <div className="survey-modal">
          <div className="survey-modal-header">
            <div className="survey-modal-header-pt1">
              {this.headerText()}
            </div>
            <div className="survey-modal-header-pt2">
              <img className="survey-escape-btn" src={SurveyModalEscape} alt="close" onClick={this.handleEscape} />
            </div>
          </div>
          <div className="survey-modal-body">
            {this.bodyText()}
            {this.selectionType()}
          </div>
        </div>
      )
  }

}

export default withRouter(SurveyModal)
