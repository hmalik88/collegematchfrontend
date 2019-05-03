import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import SurveyModal from '../components/SurveyModal'
import '../scss/Survey.scss';
import Questions from '../Questions'

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

  render() {

    return(
      <>
        <NavBar />
        <div id="first-portion-survey">
          <h1 id="survey-title">IntelliMatch</h1>
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
