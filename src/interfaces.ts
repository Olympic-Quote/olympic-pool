export interface IItem {
  id: string
  optionName: string
  pricePerUnit: number | undefined
  quantity: number
  category: string
  subtotal: number | undefined
}

export interface IOption {
  name: string
  costPerUnit: number
}

export enum Items {
  Materials = 'materials',
  Rentals = 'rentals',
  Wages = 'wages',
}
