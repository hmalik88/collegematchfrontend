import React from 'react'

export default class SearchCard extends React.Component {


  render() {
    let classCard = `search-card card-${this.props.unitId}`;
    return(
        <div className={classCard} onMouseDown={(e) => this.props.handleCardClick(e, this.props.unitId)} onMouseUp={(e) => this.props.handleCardClick(e, this.props.unitId)}>
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
