import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProjectTypeSelection } from 'screens/project-type-selection'
// import { SmallBuildQuoteCalculator } from 'screens/small-build-quote-calculator'
import { SmallBuildMaterials } from 'screens/small-build-materials'
import { SmallBuildWages } from 'screens/small-build-wages'
import { SmallBuildRentals } from 'screens/small-build-rentals'

const AuthenticatedApp: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProjectTypeSelection} />
      {/* <Route path="/small-build" exact component={SmallBuildQuoteCalculator} /> */}
      <Route path="/small-build/materials" component={SmallBuildMaterials} />
      <Route path="/small-build/wages" component={SmallBuildWages} />
      <Route path="/small-build/rentals" component={SmallBuildRentals} />
    </Switch>
  )
}
export { AuthenticatedApp }
