import { Dispatch, SetStateAction } from 'react'

export type SelectValue = { label: string; value: string }
export type CustomSelectProps = {
  disabled?: boolean
  isClearable?: boolean
  isLoading?: boolean
  label?: string
  onChange?: (value: string | undefined) => void
  options?: SelectValue[]
  placeholder?: string
  setClear?: () => void
  value?: string
}
export type OptionsProps = {
  indexCurrent: number
  isOpen: boolean
  items: SelectValue[]
  onSelectValueHandler: (value: string | undefined) => void
  resetFilter: () => void
  setIndexCurrent: Dispatch<SetStateAction<number>>
}
