import React from 'react'

import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { CustomSelect } from '@/ui'
import { CustomSelectProps } from '@/ui/custom-select/custom-select.types'

type ControlledCustomSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CustomSelectProps, 'value' | 'onChange' | 'id'>

export const ControlledSelect = <T extends FieldValues>({
  name,
  control,
  rules,
  shouldUnregister,
  defaultValue,
  ...props
}: ControlledCustomSelectProps<T>) => {
  const { field } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return <CustomSelect {...field} {...props} />
}
