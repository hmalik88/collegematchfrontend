import React from 'react'
import { Route } from 'react-router-dom'
import CollegeTrackContainer from './CollegeTrackContainer'
import CollegeInfoContainer from './CollegeInfoContainer'
import Survey from './Survey'
import IntelliMatch from './IntelliMatch'
import HomeContainer from './HomeContainer'
import CollegeSearchContainer from './CollegeSearchContainer'
import NavBar from './NavBar'

export default class NavComponents extends React.Component {

  render() {
    return(
      <>
        <NavBar {...this.props} />
        <Route exact path="/:college/tracks" render={ () => <CollegeTrackContainer />} />
        <Route exact path="/:linkName/info" render={() => <CollegeInfoContainer props={this.props} unitId={this.props.location.unitId} />} />
        <Route exact path="/intellimatch/:number" render={(props) => <Survey {...props} />} />
        <Route exact path="/intellimatch" render={() => <IntelliMatch />} />
        <Route exact path="/home" render={() => <HomeContainer user={this.props.user} />} />
        <Route exact path="/search" component={CollegeSearchContainer} />
      </>
      )
  }
}
