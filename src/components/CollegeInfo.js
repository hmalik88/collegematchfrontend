import React from 'react'

export default class CollegeInfo extends React.Component {
  render() {
    return(
      <div>
        <h1>Name: {this.props.college.name}</h1>
        City: {this.props.college.city}<br/>
        Tuition: {this.props.college.inStateTuition}
      </div>
      )
  }
}
