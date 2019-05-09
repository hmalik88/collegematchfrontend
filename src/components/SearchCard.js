import React from 'react'

export default class SearchCard extends React.Component {

  constructor(props) {
    super(props);
    this.state = {campusPic: ''}
  }

  fetchPic = () => {
    let id = this.props.unitId
    fetch(`https://api.collegeai.com/v1/api/college/info?api_key=&college_unit_ids=${id}&info_ids=campus_image`)
    .then(res=> res.json())
    .then(json => {
      this.setState({campusPic: json.colleges[0].campusImage})
    })
  }

  componentDidMount() {
    this.fetchPic();
  }

  render() {
    let classCard = `search-card card-${this.props.idx}`;
    return(
        <div className={classCard} onMouseDown={(e) => this.props.handleCardClick(e, this.props.idx)} onMouseUp={(e) => this.props.handleCardClick(e, this.props.idx)}>
          <div className="pic-portion-card">
            <img className="search-card-pic" src={this.state.campusPic} alt='' />
          </div>
          <div className="text-portion-card">
            <h1 className="search-card-title">
              {this.props.name}
            </h1>
            <h2 className="search-card-city">
              {this.props.city}, {this.props.state}
            </h2>
          </div>
        </div>
      )
  }
}
