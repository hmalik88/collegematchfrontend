import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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

  determineLeftLink = () => {
    let questionNumber = this.determineQuestionNumber();
    let questionSet = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16", "17"];
    if (questionNumber === '1') {
      return '/';
    } else if (questionSet.includes(questionNumber)) {
      let linkResult = parseInt(questionNumber) - 1;
      let route = `/intellimatch/${linkResult}`;
      return route;
    } else {
      return '/';
    }
  }

  determineRightLink = () => {
    let questionNumber = this.determineQuestionNumber();
    let questionSet = ["1","2", "3", "4", "5", "6", "7", "8", "9", "10", "11", "12", "13", "14", "15", "16"];
    if (questionNumber === '17') {
      return '/intellimatch/results'
    } else if (questionSet.includes(questionNumber)) {
      let linkResult = parseInt(questionNumber) + 1;
      let route = `/intellimatch/${linkResult}`;
      return route;
    } else {
      return '/';
    }
  }

  handleClick = e => {
    e.target.classList.toggle('pressed-down')
  }

  checkIfRemainingAnswers = () => {
    let result;
    Object.values(this.props.questions).forEach(answer => {
      if (answer === '') {
        result = true;
      } else {
        result = false;
      }
    })
    return result;
  }

  checkSubmission = (e) => {
    if (this.determineQuestionNumber() === '17' && this.checkIfRemainingAnswers()) {
      e.preventDefault()
      let message = "You cannot view your results without answering all the questions!"
      window.alert(message)
    }
  }

  componentDidMount() {
    let leftButton = document.querySelector('.left-survey-button');
    if (this.determineQuestionNumber() === '1') {
      leftButton.style.visibility = 'hidden'
    } else {
      leftButton.style.visibility = 'visible'
    }
  }

  componentDidUpdate(prevProps) {
    if (this.props.match.params.number !== prevProps.match.params.number) {
      let leftButton = document.querySelector('.left-survey-button');
        if (this.props.match.params.number === '1') {
          leftButton.style.visibility = 'hidden'
      } else {
          leftButton.style.visibility = 'visible'
      }
    }
  }

  render() {

    return(
      <>
        <div id="first-portion-survey">
          <h1 id="survey-title">IntelliMatch</h1>
        </div>
        <div id="survey-modal-portion">
          <Link to={this.determineLeftLink()} className="left-survey-button">
            <img src={leftSurvey} onMouseDown={this.handleClick} onMouseUp={this.handleClick} alt="left-button" />
          </Link>
          <SurveyModal questionNumber={this.determineQuestionNumber()} questionBody={this.determineBody()} />
          <Link to={this.determineRightLink()} onClick={this.checkSubmission} className="right-survey-button" >
            <img src={rightSurvey} onMouseDown={this.handleClick} onMouseUp={this.handleClick} alt="right-button" />
          </Link>
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
