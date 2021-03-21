import * as React from 'react'
import { IOption } from 'components/item'
import { IItem } from 'components/context/index'

function useSubtotal(
  quantity: number,
  optionName: string,
  options: IOption[],
  setPricePerUnit: React.Dispatch<React.SetStateAction<number | undefined>>,
  pricePerUnit: number | undefined,
  setItems: React.Dispatch<React.SetStateAction<IItem[]>>,
  id: string,
): number | undefined {
  const [costPerUnit, setCostPerUnit] = React.useState<number>()
  const [subtotal, setSubtotal] = React.useState<number>()

  React.useEffect(() => {
    costPerUnit && quantity && setSubtotal(quantity * costPerUnit)
  }, [quantity, costPerUnit])

  React.useEffect(() => {
    const option = options?.find(option => optionName === option.name)
    setCostPerUnit(option?.costPerUnit)
  }, [optionName, options])

  React.useEffect(() => {
    setPricePerUnit(options?.find(option => option.name === optionName)?.costPerUnit)

    let newItems: IItem[]

    setItems(prevItems => {
      const itemToReplace = prevItems.find(item => item.id === id)

      if (itemToReplace) {
        newItems = prevItems.map(item =>
          item.id === id
            ? {
                id,
                optionName,
                pricePerUnit,
                quantity,
                subtotal,
                category: 'materials',
              }
            : item,
        )
      } else {
        newItems = [
          ...prevItems,
          {
            id,
            optionName,
            pricePerUnit,
            quantity,
            subtotal,
            category: 'materials',
          },
        ]
      }

      return newItems
    })
  }, [subtotal, setItems, id, optionName, pricePerUnit, quantity, options, setPricePerUnit])

  return subtotal
}

export { useSubtotal }
