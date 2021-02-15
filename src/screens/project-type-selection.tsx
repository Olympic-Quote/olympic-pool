import * as React from 'react'

import { Select, Center } from '@chakra-ui/react'
import { NavDisplay } from 'components/nav-display'

const ProjectTypeSelection: React.FC = () => {
  const [projectType, setProjectType] = React.useState('')

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setProjectType(event.target.value)
  }

  return (
    <div style={{ height: '100vh' }}>
      <Center width="100vw" height="85%">
        <Select onChange={handleChange} width="75%" placeholder="Select project type...">
          <option value="small-build">Small Build</option>
        </Select>
      </Center>
      <NavDisplay previous={''} next={`/${projectType}/materials`} isDisabled={projectType === ''} isFirstPage />
    </div>
  )
}

export { ProjectTypeSelection }
