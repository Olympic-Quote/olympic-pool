import * as React from 'react'
import styled from '@emotion/styled'
import { useHistory } from 'react-router-dom'

const NextButton = styled(Button)(props => ({
  position: 'absolute',
  bottom: 0,
  right: 0,
  margin: '2rem',
}))

import { Select, Center, Button } from '@chakra-ui/react'
import { NavDisplay } from 'components/nav-display'

const ProjectTypeSelection: React.FC = () => {
  const [projectType, setProjectType] = React.useState('')
  const history = useHistory()

  function handleChange(event: React.ChangeEvent<HTMLSelectElement>) {
    setProjectType(event.target.value)
  }
  // function handleNext() {/
  //   history.push(`/${projectType}/materials`)
  // }
  return (
    <div style={{ height: '100vh' }}>
      <Center width="100vw" height="85%">
        <Select onChange={handleChange} width="75%" placeholder="Select project type...">
          <option value="small-build">Small Build</option>
        </Select>
      </Center>
      <NavDisplay
        previous={''}
        next={`/${projectType}/materials`}
        isFirstPage
        isDisabled={projectType === '' ? true : false}
      />
      {/* <NextButton onClick={handleNext}>Next</NextButton> */}
    </div>
  )
}

export { ProjectTypeSelection }
