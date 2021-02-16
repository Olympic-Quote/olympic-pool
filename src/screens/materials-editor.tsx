import * as React from 'react'
import { BackButton } from 'components/back-button'

const MaterialsEditor: React.FC = () => {
  return (
    <>
      <BackButton mainPage="materials" />
      <h1>Materials Editor!</h1>
    </>
  )
}

export { MaterialsEditor }
