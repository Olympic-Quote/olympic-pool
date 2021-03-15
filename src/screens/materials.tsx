import * as React from 'react'
import 'firebase/firestore'
import { useFirestoreCollectionData, useFirestore } from 'reactfire'

import { Item } from 'components/item'

const Materials: React.FC = () => {
  const materialsRef = useFirestore().collection('materials')
  const materials = useFirestoreCollectionData<{ name: string; costPerUnit: number }>(materialsRef, { idField: 'name' })
    .data

  return <Item options={materials} />
}

export { Materials }
