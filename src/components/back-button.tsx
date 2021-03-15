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

const BackButton: React.FC = () => {
  const history = useHistory()

  return <BackIconButton icon={<ArrowBackIcon />} aria-label="back" onClick={() => history.goBack()} />
}

export { BackButton }
