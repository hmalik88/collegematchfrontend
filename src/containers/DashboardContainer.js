import React from 'react'
import { Redirect } from 'react-router-dom'

export default class DashboardContainer extends React.Component {
  render() {
    return(
      <div>
        {this.props.user ? (<h1>Dashboard</h1>):(<Redirect to="/login" />)}
      </div>
      )
  }
}
