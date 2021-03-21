import * as React from 'react'
import { useForm } from 'react-hook-form'
import styled from '@emotion/styled'

import { Select, Input, Flex, Badge, IconButton } from '@chakra-ui/react'
import { DeleteIcon } from '@chakra-ui/icons'

import { useSubtotal } from 'hooks/useSubtotal'
import { ItemContext } from './context'
import { IOption } from 'interfaces'

type FormInput = {
  item: string
  quantity: number
}

type ItemProps = {
  options: IOption[]
  id: string
  category: string
}

const StyledForm = styled('form')({
  padding: '1rem 1rem .3rem 1rem',
  select: {
    borderTopRightRadius: 0,
    borderBottomRightRadius: 0,
  },

  input: {
    borderRadius: 0,
  },

  button: {
    borderTopLeftRadius: 0,
    borderBottomLeftRadius: 0,
  },
})

const SubTotal = styled('div')({
  padding: '0 1rem',
  fontSize: '1.6rem',
  color: 'green',
  textAlign: 'end',

  div: {
    lineHeight: '.9',
  },
})

const Item: React.FC<ItemProps> = ({ options, id, category }) => {
  const [pricePerUnit, setPricePerUnit] = React.useState<number>()
  const { register, watch } = useForm<FormInput>()
  const { setItems } = React.useContext(ItemContext)

  const optionName = watch('optionName') as string
  const quantity = watch('quantity')

  const subtotal = useSubtotal(quantity, optionName, options, setPricePerUnit, pricePerUnit, setItems, id, category)

  function deleteItem() {
    setItems(prevItems => prevItems.filter(item => item.id !== id))
  }

  return (
    <>
      <StyledForm>
        <Flex>
          <Select size="lg" placeholder="Select" ref={register} name="optionName">
            {options?.map(option => (
              <option key={option.name}>{option.name}</option>
            ))}
          </Select>
          <Input size="lg" autoComplete="off" type="search" ref={register} name="quantity" inputMode="numeric" />
          <IconButton onClick={deleteItem} aria-label="Delete Item" size="lg">
            <DeleteIcon />
          </IconButton>
        </Flex>
      </StyledForm>
      {subtotal && (
        <SubTotal>
          <Badge>{optionName} subtotal:</Badge>
          <div>${subtotal}.00</div>
        </SubTotal>
      )}
    </>
  )
}

export { Item }
