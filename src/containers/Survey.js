import React from 'react';
import NavBar from './NavBar';
import { connect } from 'react-redux';
import '../scss/Survey.scss';

class Survey extends React.Component {

  constructor(props) {
    super(props);
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
