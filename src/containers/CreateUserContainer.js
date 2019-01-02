import React from 'react'
import CreateUserForm from '../components/CreateUserForm'

export default class CreateUserContainer extends React.Component {

  handleSubmit = e => {

  }

  render() {
    return(<CreateUserForm handleSubmit={this.handleSubmit} />)
  }

}
