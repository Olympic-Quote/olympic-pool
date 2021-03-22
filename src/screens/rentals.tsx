import * as React from 'react'
import 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'

import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { Item } from 'components/item'
import { Items } from 'interfaces'
import { useItems } from 'hooks/useItems'

const Rentals: React.FC = () => {
  const { items, setItems, collectionDocuments } = useItems('rentals')

  function addItem() {
    setItems(prev => [
      ...prev,
      { id: uuidv4(), optionName: '', pricePerUnit: undefined, category: 'rentals', quantity: 0, subtotal: 0 },
    ])
  }

  return (
    <>
      {items
        .filter(item => item.category === 'rentals')
        .map(item => (
          <Item id={item.id} key={item.id} options={collectionDocuments} category={Items.Rentals} />
        ))}
      <div style={{ display: 'flex', justifyContent: 'flex-end', padding: '1rem' }}>
        <IconButton onClick={addItem} size="lg" aria-label="Add Item">
          <AddIcon />
        </IconButton>
      </div>
    </>
  )
}

export { Rentals }
