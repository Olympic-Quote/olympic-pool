import * as React from 'react'
import { IOption } from 'components/item'

function useSubtotal(quantity: number, optionName: string, options: IOption[]): number | undefined {
  const [costPerUnit, setCostPerUnit] = React.useState<number>()
  const [subtotal, setSubtotal] = React.useState<number>()

  React.useEffect(() => {
    console.log(quantity)
    costPerUnit && quantity && setSubtotal(quantity * costPerUnit)
  }, [quantity, costPerUnit])

  React.useEffect(() => {
    console.log(optionName)
    const option = options?.find(option => optionName === option.name)
    setCostPerUnit(option?.costPerUnit)
  }, [optionName, options])

  return subtotal
}

export { useSubtotal }
