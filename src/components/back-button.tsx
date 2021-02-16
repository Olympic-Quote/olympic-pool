import * as React from 'react'
import { IconButton } from '@chakra-ui/react'
import { ArrowBackIcon } from '@chakra-ui/icons'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

const BackIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '.5rem',
}))

type BackButtonProps = {
  mainPage: string
}

const BackButton: React.FC<BackButtonProps> = ({ mainPage }) => {
  const history = useHistory()

  const handleBack = () => {
    history.push(`/${mainPage}`)
  }

  return <BackIconButton icon={<ArrowBackIcon />} aria-label="back" onClick={handleBack} />
}

export { BackButton }
