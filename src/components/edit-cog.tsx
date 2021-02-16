import * as React from 'react'
import styled from '@emotion/styled'
import { IconButton } from '@chakra-ui/react'
import { SettingsIcon } from '@chakra-ui/icons'
import { useHistory } from 'react-router-dom'

const EditIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: 0,
  right: 0,
  margin: '.5rem',
}))

type EditCogProps = {
  mainPage: string
}

const EditCog: React.FC<EditCogProps> = ({ mainPage }) => {
  const history = useHistory()

  const handleSettings = () => {
    history.push(`/${mainPage}/editor`)
  }

  return <EditIconButton icon={<SettingsIcon />} aria-label={`${mainPage} editor`} onClick={handleSettings} />
}

export { EditCog }
