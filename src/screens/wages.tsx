import * as React from 'react'

import { NavDisplay } from 'components/nav-display'
import { EditCog } from 'components/edit-cog'

const Wages: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <EditCog mainPage="wages" />
      <h1>Wages!</h1>
      <NavDisplay previous={'/materials'} next={'/rentals'} />
    </div>
  )
}

export { Wages }
