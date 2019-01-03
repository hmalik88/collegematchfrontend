import React from 'react'
import { Link } from 'react-router-dom'

export default class NavBar extends React.Component {
  render () {
    return(
      <React.Fragment>
        <ul>
          <Link to="/dashboard"><li>Home</li></Link>
          <Link to="/login" ><li onClick={this.props.logOut}>Log Out</li></Link>
        </ul>
      </React.Fragment>
      )
  }
}
