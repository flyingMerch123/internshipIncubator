export type SelectValue = { value: string; label: string }
export type CustomSelectProps = {
  value?: string
  label?: string
  options?: SelectValue[]
  setClear?: () => void
  isClearable?: boolean
  placeholder?: string
  onChange?: (value: string | undefined) => void
}
