import * as React from 'react'

import { NavDisplay } from 'components/nav-display'

const SmallBuildRentals: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Rentals!</h1>
      <NavDisplay previous={'/small-build/wages'} next={''} isLastPage />
    </div>
  )
}

export { SmallBuildRentals }
