import * as React from 'react'
import styled from '@emotion/styled'
import { IconButton } from '@chakra-ui/react'
import { EditIcon } from '@chakra-ui/icons'
import { useHistory, useLocation } from 'react-router-dom'

const EditIconButton = styled(IconButton)(() => ({}))

const EditCog: React.FC = () => {
  const history = useHistory()
  const location = useLocation()

  const handleSettings = () => {
    history.push(`${location.pathname}/editor`)
  }

  return <EditIconButton icon={<EditIcon />} aria-label={`${location} editor`} onClick={handleSettings} />
}

export { EditCog }
