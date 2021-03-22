import * as React from 'react'
import 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { Item } from 'components/item'
import { Items } from 'interfaces'
import { useItems } from 'hooks/useItems'

const Materials: React.FC = () => {
  const { items, setItems, collectionDocuments } = useItems(Items.Materials)

  function addItem() {
    setItems(prev => [
      ...prev,
      { id: uuidv4(), optionName: '', pricePerUnit: undefined, category: Items.Materials, quantity: 0, subtotal: 0 },
    ])
  }

  return (
    <>
      {items
        .filter(item => item.category === Items.Materials)
        .map(item => (
          <Item id={item.id} key={item.id} options={collectionDocuments} category={Items.Materials} />
        ))}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <IconButton onClick={addItem} size="lg" aria-label="Add Item">
          <AddIcon />
        </IconButton>
      </div>
    </>
  )
}

export { Materials }
