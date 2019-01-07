import React from 'react'
import { Link } from 'react-router-dom'

export default class CollegeList extends React.Component {

  render() {
    let createColleges = this.props.colleges.map(college => {
      let linkName = college.name.split(' ').join('_')
      let newTo = { pathname: `/${linkName}/info`, unitId: college.unitId }
     return  <Link key={college.unitId} to={newTo}><li key={college.unitId}>{college.name}</li></Link>
    })
    return(
      <div>
        <ol className="college-search-list">
        {createColleges}
        </ol>
      </div>
      )
  }

}
