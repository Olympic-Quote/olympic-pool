import * as React from 'react'

import { NavDisplay } from 'components/nav-display'
import { EditCog } from 'components/edit-cog'

const Materials: React.FC = () => {
  return (
    <div style={{ height: '100vh' }}>
      <EditCog mainPage="materials" />
      <h1>Materials!</h1>
      <NavDisplay previous={'/'} next={'/wages'} />
    </div>
  )
}

export { Materials }
