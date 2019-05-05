import React from 'react'
import { connect } from 'react-redux'
import '../scss/SurveyResults.scss'

class SurveyResult extends React.Component {

  constructor() {
    super()
    let root = document.querySelector('#root');
    root.className = '';
    root.classList.toggle('result-root');
  }

  componentDidMount() {
    Object.values(this.props.questions).forEach(answer => {
      if (answer === '') {
        this.props.history.push("/intellimatch")
      }
    })
  }

  render() {
    return(
      <div>
      </div>
      )
  }
}

const mapStateToProps = state => {
  return {
    questions: state
  };
}

export default connect(mapStateToProps, null)(SurveyResult)
