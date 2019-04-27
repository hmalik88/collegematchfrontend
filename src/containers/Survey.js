import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import '../scss/Survey.scss';

class Survey extends React.Component {

  constructor() {
    super();
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('survey-root');
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
