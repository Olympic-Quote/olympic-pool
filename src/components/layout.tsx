import * as React from 'react'
import { EditCog } from 'components/edit-cog'
import { NavDisplay } from 'components/nav-display'

const Layout: React.FC = ({ children }) => {
  return (
    <div style={{ height: '100vh' }}>
      <EditCog />
      {children}
      <NavDisplay previous={'/'} next={'/wages'} />
    </div>
  )
}

export { Layout }
