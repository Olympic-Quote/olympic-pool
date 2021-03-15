import * as React from 'react'
import { EditCog } from 'components/edit-cog'
import { NavDisplay } from 'components/nav-display'
import { useLocation } from 'react-router'

const Layout: React.FC = ({ children }) => {
  const { pathname } = useLocation()

  return (
    <div style={{ height: '100vh' }}>
      {pathname === '/materials' || pathname === '/wages' || pathname === '/rentals' ? <EditCog /> : null}
      {children}
      <NavDisplay />
    </div>
  )
}

export { Layout }
