import { CSSProperties, ComponentPropsWithoutRef, ReactElement } from 'react'

export enum SelectVariant {
  Language = 'language',
  LanguageMobile = 'language-mobile',
  Pagination = 'pagination',
  Primary = 'primary',
}

type ObjectOption = { label: ReactElement | string; value: string }

type CommonProps = {
  label?: string
  onChange: (value: string) => void
  open?: boolean
  options: Array<ObjectOption | string>
  placeholder?: ReactElement | string
  rootClassName?: string
  value: ReactElement | number | string
  variant?: SelectVariant
  width?: CSSProperties['width']
}
export type SelectModel = Omit<ComponentPropsWithoutRef<'select'>, keyof CommonProps> & CommonProps
