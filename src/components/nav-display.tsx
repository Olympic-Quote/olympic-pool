import * as React from 'react'

import { useHistory } from 'react-router-dom'
import { Button } from '@chakra-ui/react'
import styled from '@emotion/styled'

const NextButton = styled(Button)(props => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: '2rem',
}))

const PreviousButton = styled(Button)(props => ({
  position: 'absolute',
  bottom: 0,
  left: 0,
  margin: '2rem',
}))

type NavDisplayProps = {
  previous: string
  next: string
  isLastPage?: boolean
  isFirstPage?: boolean
  isDisabled?: boolean
}

const NavDisplay: React.FC<NavDisplayProps> = ({ previous, next, isLastPage, isFirstPage, isDisabled }) => {
  const history = useHistory()

  const handlePrevious = () => {
    history.push(previous)
  }

  const handleNext = () => {
    history.push(next)
  }

  const handleSubmit = () => {
    console.log('submit')
  }

  return (
    <>
      {isFirstPage ? null : <PreviousButton onClick={handlePrevious}>Previous</PreviousButton>}
      {isLastPage ? (
        <NextButton onClick={handleSubmit}>Submit</NextButton>
      ) : (
        <NextButton onClick={handleNext} isDisabled={isDisabled}>
          Next
        </NextButton>
      )}
    </>
  )
}

export { NavDisplay }