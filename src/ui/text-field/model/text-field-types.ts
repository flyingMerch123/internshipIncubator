import { ComponentPropsWithoutRef } from 'react'

import { INPUT_TYPES } from '../lib/constants/input-type-enum'

export type InputProps = {
  label?: string
  inputType: (typeof INPUT_TYPES)[keyof typeof INPUT_TYPES]
  error?: string
} & Omit<ComponentPropsWithoutRef<'input'>, 'type'>
