import * as React from 'react'
import { BackButton } from 'components/back-button'

const RentalsEditor: React.FC = () => {
  return (
    <>
      <BackButton mainPage="rentals" />
      <h1>Rentals Editor!</h1>
    </>
  )
}

export { RentalsEditor }
