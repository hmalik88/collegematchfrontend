import React from 'react'
import '../scss/SurveyModal.scss'
import SurveyModalEscape from '../images/survey-modal-escape.svg'

export default class SurveyModal extends React.Component {

  headerText = () => {
    return <h1 className='survey-header-text'>Question {this.props.questionNumber} / 18</h1>
  }

  bodyText = () => {
    return <div className='survey-body-text'>{this.props.questionBody.question}</div>
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
          </div>
        </div>
      )
  }

}
