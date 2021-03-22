import * as React from 'react'
import { ItemContext } from 'components/context'
import { useFirestore, useFirestoreCollectionData } from 'reactfire'
import { IItem } from 'interfaces'

interface IUseItemsReturn {
  collectionDocuments: { name: string; costPerUnit: number }[]
  items: IItem[]
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>
}

export const useItems: (collectionName: string) => IUseItemsReturn = collectionName => {
  const { items, setItems } = React.useContext(ItemContext)
  const collectionRef = useFirestore().collection(collectionName)
  const collectionDocuments = useFirestoreCollectionData<{ name: string; costPerUnit: number }>(collectionRef, {
    idField: 'name',
  }).data
  return { collectionDocuments, items, setItems }
}
