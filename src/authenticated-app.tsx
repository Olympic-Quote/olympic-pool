import * as React from 'react'
import { Switch, Route } from 'react-router-dom'

import { ProjectTypeSelection } from 'screens/project-type-selection'
import { SmallBuildQuoteCalculator } from 'screens/small-build-quote-calculator'

const AuthenticatedApp: React.FC = () => {
  return (
    <Switch>
      <Route exact path="/" component={ProjectTypeSelection} />
      <Route path="/small-build" component={SmallBuildQuoteCalculator} />
    </Switch>
  )
}
export { AuthenticatedApp }
