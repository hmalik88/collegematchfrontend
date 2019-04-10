import React from 'react'

export default class CreateUserForm extends React.Component {
  state = {
    email: "",
    password: "",
    lastName: "",
    firstName: "",
    addressLine1: "",
    addressLine2: "",
    unit: "",
    city: "",
    state: "",
    zipCode: ""
  }

  handleChange = e => {
    let id = e.target.id
    let value = e.target.value
    switch (id) {
      case 'first_name':
        this.setState({firstName: value})
        break;
      case 'last_name':
        this.setState({lastName: value})
        break;
      case 'e-mail':
        this.setState({email: value})
        break;
      case 'password':
        this.setState({password: value})
        break;
      case 'add1':
        this.setState({addressLine1: value})
        break;
      case 'add2':
        this.setState({addressLine2: value})
        break;
      case 'unit':
        this.setState({unit: value})
        break;
      case 'city':
        this.setState({city: value})
        break;
      case 'state':
        this.setState({state: value})
        break;
      case 'zip_code':
        this.setState({zipCode: value})
        break;
      default:
        break;
    }
  }

  render() {
    return(
      <div>
        <form onSubmit={this.props.handleSubmit}>
        First Name: <input id="first_name" onChange={this.handleChange} type="text" value={this.state.firstName} /><br/>
        Last Name: <input id="last_name" onChange={this.handleChange} type="text" value={this.state.lastName} /><br/>
        E-mail: <input id="e-mail" onChange={this.handleChange} type="text" value={this.state.email} /><br/>
        Password: <input id="password" onChange={this.handleChange} type="password" value={this.state.password} /><br/>
        Address Line 1: <input id="add1" onChange={this.handleChange} type="text" value={this.state.addressLine1} /><br/>
        Address Line 2: <input id="add2" onChange={this.handleChange} type="text" value={this.state.addressLine2} /><br/>
        Unit: <input id="unit" onChange={this.handleChange} type="text" value={this.state.unit} /><br/>
        City: <input id="city" onChange={this.handleChange} type="text" value={this.state.city} /><br/>
        State: <input id="state" onChange={this.handleChange} type="text" value={this.state.state} /><br/>
        Zip Code: <input id="zip_code" onChange={this.handleChange} type="text" value={this.state.zipCode} /><br/><br/>
        <button type="submit">Create Account</button>
        </form>
      </div>
      )
  }

}
