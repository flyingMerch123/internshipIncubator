import { ComponentPropsWithoutRef } from 'react'

import { INPUT_TYPES } from '../lib/constants/input-type-enum'

export type InputProps = {
  error?: string
  inputType?: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES]
  label?: string
  required?: boolean
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>
