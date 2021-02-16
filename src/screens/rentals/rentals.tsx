import * as React from 'react'

import { NavDisplay } from 'components/nav-display'
import { EditCog } from 'components/edit-cog'

const Rentals: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <EditCog mainPage="rentals" />
      <h1>Rentals!</h1>
      <NavDisplay previous={'/wages'} isLastPage />
    </div>
  )
}

export { Rentals }
