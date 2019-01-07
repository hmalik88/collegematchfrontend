import React from 'react'
import SearchBar from '../components/SearchBar'
import CollegeList from './CollegeList'

export default class CollegeSearchContainer extends React.Component {

  state = {searchTerm: '', colleges: []}

  handleChange = e => {
    this.setState({searchTerm: e.target.value})
    this.fetchColleges(this.state.searchTerm)
  }

  fetchColleges = searchTerm => {
    fetch(`https://api.collegeai.com/api/autocomplete/colleges?api_key=9FMs2Rj3ARpA&query=${searchTerm}`)
    .then(res => res.json())
    .then(colleges => {
      this.setState({colleges: colleges.collegeList})
    })
  }


  render() {
    return(
      <div>
      <SearchBar handleChange={this.handleChange} />
      <CollegeList colleges={this.state.colleges} />
      </div>
      )
  }
}
