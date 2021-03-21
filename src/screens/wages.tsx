import * as React from 'react'
import 'firebase/firestore'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'
import { Button } from '@chakra-ui/react'
import { v4 as uuidv4 } from 'uuid'

import { Item } from 'components/item'
import { Items } from 'interfaces'

const Wages: React.FC = () => {
  const [itemIDs, setItemIDs] = React.useState<string[]>([uuidv4()])

  const collectionRef = useFirestore().collection('wages')
  const collectionDocuments = useFirestoreCollectionData<{ name: string; costPerUnit: number }>(collectionRef, {
    idField: 'name',
  }).data

  return (
    <>
      {itemIDs.map(itemID => (
        <Item key={itemID} options={collectionDocuments} id={itemID} category={Items.Wages} />
      ))}
      <Button
        onClick={() => {
          setItemIDs([...itemIDs, uuidv4()])
        }}
      >
        Add Item
      </Button>
    </>
  )
}

export { Wages }
