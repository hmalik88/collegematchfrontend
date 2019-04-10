import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {

  logOut = () => {
  localStorage.removeItem("token")
  this.setState({user: null})
  }

  render () {
    return(
      <div id="navbar">
        <ul>
          <Link to="/dashboard"><li>Home</li></Link>
          <Link to="/login" ><li onClick={this.logOut}>Log Out</li></Link>
          <Link to="/search" ><li>Search</li></Link>
        </ul>
      </div>
      )
  }
}
