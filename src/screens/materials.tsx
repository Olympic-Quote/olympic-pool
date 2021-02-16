import * as React from 'react'

import { NavDisplay } from 'components/nav-display'

const Materials: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <h1>Materials!</h1>
      <NavDisplay previous={'/'} next={'/wages'} />
    </div>
  )
}

export { Materials }
