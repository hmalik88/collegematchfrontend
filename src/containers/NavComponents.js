import React from 'react'
import { Route, Switch } from 'react-router-dom'
import CollegeTrackContainer from './CollegeTrackContainer'
import CollegeInfoContainer from './CollegeInfoContainer'
import Survey from './Survey'
import IntelliMatch from './IntelliMatch'
import HomeContainer from './HomeContainer'
import CollegeSearchContainer from './CollegeSearchContainer'
import SurveyResult from './SurveyResult'
import NavBar from './NavBar'

class NavComponents extends React.Component {

  render() {
    return(
      <>
        <NavBar {...this.props} />
        <Switch>
          <Route exact path="/:college/tracks" render={ () => <CollegeTrackContainer />} />
          <Route exact path="/:linkName/info" render={(props) => <CollegeInfoContainer {...props} />} />
          <Route exact path="/intellimatch/results" render={(props) => <SurveyResult {...props} />} />
          <Route exact path="/intellimatch/:number" render={(props) => <Survey {...props} />} />
          <Route exact path="/intellimatch" render={() => <IntelliMatch />} />
          <Route exact path="/home" render={() => <HomeContainer user={this.props.user} />} />
          <Route exact path="/search" component={CollegeSearchContainer} />
        </Switch>
      </>
      )
  }
}

export default NavComponents;
