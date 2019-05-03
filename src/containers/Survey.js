import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import SurveyModal from '../components/SurveyModal'
import '../scss/Survey.scss';
import Questions from '../Questions'
import leftSurvey from '../images/left-survey.svg'
import rightSurvey from '../images/right-survey.svg'

class Survey extends React.Component {

  constructor() {
    super();
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('survey-root');
  }

  determineQuestionNumber = () => {
    let questionNumber = this.props.match.params.number
    return questionNumber;
  }

  determineBody = () => {
    let questionNumber = 'Q'
    + this.determineQuestionNumber();
    let question = Questions[questionNumber];
    return question;
  }

  handleClick = e => {
    e.target.classList.toggle('pressed-down')
  }

  componentDidMount() {
    let leftButton = document.querySelector('.left-survey-button');
    if (this.determineQuestionNumber() === '1') {
      leftButton.style.visibility = 'hidden'
    }
  }

  render() {

    return(
      <>
        <NavBar />
        <div id="first-portion-survey">
          <h1 id="survey-title">IntelliMatch</h1>
        </div>
        <div id="survey-modal-portion">
          <img src={leftSurvey} onMouseDown={this.handleClick} onMouseUp={this.handleClick} className="left-survey-button" alt="left-button" />
          <SurveyModal />
          <img src={rightSurvey} onMouseDown={this.handleClick} onMouseUp={this.handleClick}  className="right-survey-button" alt="right-button" />
        </div>
      </>
      )
  }
}

const mapStateToProps = state => {
  return {
    questions: state
  };
}

const mapDispatchToProps = dispatch => {
  return {
    chooseAnswer: (action) => dispatch(action)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Survey);
