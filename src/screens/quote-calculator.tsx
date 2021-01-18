import * as React from 'react'
import { useFirestore, useFirestoreCollectionData, useUser } from 'reactfire'
import 'firebase/firestore'

type SizeData = {
  docId: string
  squareFeet: string
}
const QuoteCalculator: React.FC = () => {
  const { data: user } = useUser()
  const sizeCollectionRef = useFirestore().collection('size')
  const sizeCollectionData = useFirestoreCollectionData<SizeData>(sizeCollectionRef, { idField: 'docId' })
  console.log(user)
  console.log(sizeCollectionRef)
  console.log(sizeCollectionData)
  return (
    <div>
      {sizeCollectionData.data?.map(doc => {
        return <div key={doc.docId}>{doc.squareFeet}</div>
      })}
    </div>
  )
}

export { QuoteCalculator }
