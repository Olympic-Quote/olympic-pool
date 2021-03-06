import * as React from 'react'
import { AuthCheck } from 'reactfire'
import { Login } from 'components/login'
import 'firebase/auth'
import { AuthenticatedApp } from 'authenticated-app'

const App: React.FC = () => {
  return <AuthCheck fallback={<Login />}>{<AuthenticatedApp />}</AuthCheck>
}

export default App
