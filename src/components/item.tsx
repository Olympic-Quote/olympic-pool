import * as React from 'react'
import { useForm } from 'react-hook-form'

import { Select, Input, Flex } from '@chakra-ui/react'

import { useSubtotal } from 'hooks/useSubtotal'

export interface IOption {
  name: string
  costPerUnit: number
}

interface IFormInput {
  item: string
  quantity: number
}

type ItemProps = {
  options: IOption[]
}

const Item: React.FC<ItemProps> = ({ options }) => {
  const { register, watch } = useForm<IFormInput>()
  const optionName = watch('optionName') as string
  const quantity = watch('quantity')

  const subtotal = useSubtotal(quantity, optionName, options)

  return (
    <>
      <form>
        <Flex>
          <Select placeholder="Select option" ref={register} name="optionName">
            {options?.map(option => (
              <option key={option.name}>{option.name}</option>
            ))}
          </Select>
          <Input ref={register} name="quantity" inputMode="numeric" />
        </Flex>
      </form>
      <div>{subtotal}</div>
    </>
  )
}

export { Item }
