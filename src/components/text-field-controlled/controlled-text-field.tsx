import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { TextField } from '@/ui'
import { InputProps } from '@/ui/text-field/model/text-field-types'

type ControlledTextFieldProps<T extends FieldValues> = UseControllerProps<T> &
  Omit<InputProps, 'id' | 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <TextField {...field} error={error?.message} id={name} {...rest} />
}
