import React from 'react'
import collegedata from '../collegedata.json'
export default class DashboardContainer extends React.Component {

  state = {colleges: []}

  getUnitIDs = () => {
    let unitIDs = '';
    collegedata.forEach(college => {
      unitIDs += college['Unit Id'] + '%2C'
    });
    return unitIDs;
  }

  fetchAllColleges = () => {
    let unitIDs = this.getUnitIDs();
    fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${unitIDs}&info_ids=city%2Cin_state_tuition%2Cwebsite%2Cacceptance_rate%2Cavg_cost_of_attendance`)
    .then(res => res.json())
    .then(json => this.setState({colleges: json.colleges}));
  }

  componentDidMount() {
    this.fetchAllColleges();
  }

  render() {
    return(
      <div>
        <h1>Dashboard</h1>
      </div>
      )
  }
}
