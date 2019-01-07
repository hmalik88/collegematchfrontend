import React from 'react'

export default class CollegeList extends React.Component {

  render() {
    let createColleges = this.props.colleges.map(college => (<li key={college.name}>{college.name}</li>))
    return(
      <div>
        <ol className="college-search-list">
        {createColleges}
        </ol>
      </div>
      )
  }

}
