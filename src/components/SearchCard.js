import React from 'react'
import { withRouter } from 'react-router-dom'

class SearchCard extends React.Component {

  handleClick = () => {
    let linkName = `/${this.props.unitId}/info`
    this.props.history.push(linkName);
  }

  render() {
    let classCard = `search-card card-${this.props.unitId}`;
    return(
        <div className={classCard} onClick={this.handleClick}>
          <div className="pic-portion-card">
            <img className="search-card-pic" src={this.props.pic} alt='' />
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

export default withRouter(SearchCard);
