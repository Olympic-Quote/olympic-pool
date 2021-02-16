import * as React from 'react'
import { BackButton } from 'components/back-button'

const WagesEditor: React.FC = () => {
  return (
    <>
      <BackButton mainPage="wages" />
      <h1>Wages Editor!</h1>
    </>
  )
}

export { WagesEditor }
