import * as React from 'react'

import { NavDisplay } from 'components/nav-display'

const SmallBuildWages: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Wages!</h1>
      <NavDisplay previous={'/small-build/materials'} next={'/small-build/rentals'} />
    </div>
  )
}

export { SmallBuildWages }
