import React from 'react'
import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { CustomSelect } from '@/ui'
import { CustomSelectProps } from '@/ui/custom-select/custom-select.types'

type ControlledCustomSelectProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<CustomSelectProps, 'id' | 'onChange' | 'value'>

export const ControlledSelect = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  options,
  rules,
  shouldUnregister,
  ...props
}: ControlledCustomSelectProps<T>) => {
  const { field } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <CustomSelect options={options} {...field} {...props} />
}
