import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProjectTypeSelection } from 'screens/project-type-selection'
// import { SmallBuildQuoteCalculator } from 'screens/small-build-quote-calculator'
import { Materials } from 'screens/materials'
import { Wages } from 'screens/wages'
import { Rentals } from 'screens/rentals'

const AuthenticatedApp: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProjectTypeSelection} />
      {/* <Route path="/small-build" exact component={SmallBuildQuoteCalculator} /> */}
      <Route path="/materials" component={Materials} />
      <Route path="/wages" component={Wages} />
      <Route path="/rentals" component={Rentals} />
    </Switch>
  )
}
export { AuthenticatedApp }
