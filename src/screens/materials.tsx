import * as React from 'react'
import 'firebase/firestore'
import { v4 as uuidv4 } from 'uuid'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'

import { IconButton } from '@chakra-ui/react'
import { AddIcon } from '@chakra-ui/icons'

import { Item } from 'components/item'
import { ItemContext } from 'components/context'
import { Items } from 'interfaces'

const Materials: React.FC = () => {
  const { items, setItems } = React.useContext(ItemContext)
  const materialsRef = useFirestore().collection('materials')
  const materials = useFirestoreCollectionData<{ name: string; costPerUnit: number }>(materialsRef, { idField: 'name' })
    .data

  function addItem() {
    setItems(prev => [
      ...prev,
      { id: uuidv4(), optionName: '', pricePerUnit: undefined, category: 'materials', quantity: 0, subtotal: 0 },
    ])
  }

  return (
    <>
      {items
        .filter(item => item.category === 'materials')
        .map(item => (
          <Item id={item.id} key={item.id} options={materials} category={Items.Materials} />
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
