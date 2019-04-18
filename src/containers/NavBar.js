import React from 'react'
import { Link } from 'react-router-dom'
import navlogo from '../images/cm-nav-logo.png'
import '../scss/NavBar.scss'

export default class NavBar extends React.Component {

  logOut = () => {
    localStorage.removeItem("token");
    this.setState({user: null});
    let root = document.querySelector('#root');
    root.className = '';
  }

  render () {
    return(
      <div id="nav-bar">
        <div id="nav-portion1">
          <img id="nav-logo" src={navlogo} alt="nav-logo" />
        </div>
        <div id="nav-portion2">
          <Link className="nav-options" to="/home">
            <h2 id="home-option" className="nav-options">Home</h2>
          </Link>
          <Link className="nav-options" to="/search">
            <h2 id="search-option" className="nav-options">Search</h2>
          </Link>
          <Link className="nav-options" to="/" onClick={this.logOut}>
            <h2 id="logout-option" className="nav-options">Log Out</h2>
          </Link>
        </div>
      </div>
      )
  }
}
