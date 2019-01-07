import React from 'react'

export default class SearchBar extends React.Component {

  render() {
    return(
      <div>
      Search: <input onChange={this.props.handleChange} type="text"  />
      </div>
      )
  }
}
