import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProjectTypeSelection } from 'screens/project-type-selection'
// import { SmallBuildQuoteCalculator } from 'screens/small-build-quote-calculator'
import { Materials } from 'screens/materials'
import { Wages } from 'screens/wages'
import { Rentals } from 'screens/rentals'
import { MaterialsEditor } from 'screens/materials-editor'
import { WagesEditor } from 'screens/wages-editor'
import { RentalsEditor } from 'screens/rentals-editor'

const AuthenticatedApp: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProjectTypeSelection} />
      {/* <Route path="/small-build" exact component={SmallBuildQuoteCalculator} /> */}
      <Route path="/materials" exact component={Materials} />
      <Route path="/wages" exact component={Wages} />
      <Route path="/rentals" exact component={Rentals} />
      <Route path="/materials/editor" component={MaterialsEditor} />
      <Route path="/wages/editor" component={WagesEditor} />
      <Route path="/rentals/editor" component={RentalsEditor} />
    </Switch>
  )
}
export { AuthenticatedApp }
