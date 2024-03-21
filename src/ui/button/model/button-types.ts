import { ComponentPropsWithoutRef, ElementType } from 'react'

export type ButtonProps<T extends ElementType = 'button'> = {
  as?: T
  fullWidth?: boolean
  variant?: 'link' | 'outlined' | 'primary' | 'secondary'
} & ComponentPropsWithoutRef<'button'>
