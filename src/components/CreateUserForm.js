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
      <>
        <form className='create-form' onSubmit={this.props.handleSubmit}>
        <label id="first" className="create-label">Name:</label> <input id="first_name" onChange={this.handleChange} type="text" value={this.state.firstName} className='create-input' /><br/><br/>
        <label id="second" className="create-label">Last Name:</label> <input id="last_name" onChange={this.handleChange} type="text" value={this.state.lastName} className='create-input' /><br/><br/>
        <label id="e-mail" className="create-label">E-mail:</label> <input id="e-mail" onChange={this.handleChange} type="text" value={this.state.email} className='create-input' /><br/><br/>
        <label id="password" className="create-label">Password:</label><input id="password" onChange={this.handleChange} type="password" value={this.state.password} className='create-input' /><br/><br/>
        <label id="line-1" className="create-label">Address Line 1:</label><input id="add1" onChange={this.handleChange} type="text" value={this.state.addressLine1} className='create-input' /><br/><br/>
        <label id="line-2" className="create-label">Address Line 2:</label><input id="add2" onChange={this.handleChange} type="text" value={this.state.addressLine2} className='create-input' /><br/><br/>
        <label id="unit" className="create-label">Unit:</label><input id="unit" onChange={this.handleChange} type="text" value={this.state.unit} className='create-input' /><br/><br/>
        <label id="city" className="create-label">City:</label><input id="city" onChange={this.handleChange} type="text" value={this.state.city} className='create-input' /><br/><br/>
        <label id="state" className="create-label">State:</label><input id="state" onChange={this.handleChange} type="text" value={this.state.state} className='create-input' /><br/><br/>
        <label id="zip-code" className="create-label">Zip Code:</label><input id="zip_code" onChange={this.handleChange} type="text" value={this.state.zipCode} className='create-input' /><br/><br/>
        <button type="submit">Create Account</button>
        </form>
      </>
      )
  }

}
