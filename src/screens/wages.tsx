import * as React from 'react'

import { NavDisplay } from 'components/nav-display'

const Wages: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Wages!</h1>
      <NavDisplay previous={'/materials'} next={'/rentals'} />
    </div>
  )
}

export { Wages }
