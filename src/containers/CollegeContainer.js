import React from 'react'
import CollegeInfo from '../components/CollegeInfo'

export default class CollegeContainer extends React.Component {
  constructor(props) {
    super(props)
    this.state = {unitId: this.props.unitId, college: {}}
  }

  componentDidMount() {
    if (this.state.unitId !== undefined) {
      fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_unit_ids=${this.state.unitId}&info_ids=city%2Cin_state_tuition%2Cwebsite`)
      .then(res => res.json())
      .then(collegeInfo => {
      this.setState({college: collegeInfo.colleges[0]})
      })
    } else {
      let collegeName = this.props.props.location.pathname
      let collegeId = collegeName.split('/')[1].split('_').join('-').toLowerCase()
      fetch(`https://api.collegeai.com/api/college/info?api_key=9FMs2Rj3ARpA&college_ids=${collegeId}&info_ids=city%2Cin_state_tuition%2Cwebsite`)
      .then(res => res.json())
      .then(collegeInfo => {
        this.setState({college: collegeInfo.colleges[0]})
      })
    }

  }

  render() {

    return(
      <div>
        <CollegeInfo college={this.state.college} />
      </div>
      )
  }

}
