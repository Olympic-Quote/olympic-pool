import * as React from 'react'

import { useHistory, useLocation } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

const PreviousButton = styled(Button)(() => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  margin: '2rem',
}))

const NextButton = styled(Button)(() => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: '2rem',
}))

const NavDisplay: React.FC = () => {
  const history = useHistory()

  const { pathname } = useLocation()

  const handlePrevious = () => {
    switch (pathname) {
      case '/materials':
        history.push('/')
        break
      case '/wages':
        history.push('/materials')
        break
      case '/rentals':
        history.push('/wages')
        break
      default:
        return
    }
  }

  const handleNext = () => {
    switch (pathname) {
      case '/':
        history.push('/materials')
        break
      case '/materials':
        history.push('/wages')
        break
      case '/wages':
        history.push('/rentals')
        break
      default:
        return
    }
  }

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <>
      {pathname === '/' ? null : <PreviousButton onClick={handlePrevious}>Previous</PreviousButton>}
      {pathname === '/rentals' ? (
        <NextButton onClick={handleSubmit}>Submit</NextButton>
      ) : (
        <NextButton onClick={handleNext}>Next</NextButton>
      )}
    </>
  )
}

export { NavDisplay }
