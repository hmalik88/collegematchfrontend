import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <NavBar />
        <LoginContainer />
        <CreateUserContainer />
        <DashboardContainer />
        <CareerTrackContainer />
        <CTCollegeContainer />
        <CollegeSearchContainer />
        <CollegeContainer />
        <RecCollegesFormContainer />
        <RecCollegeContainer />
      </div>
    );
  }
}

export default App;
