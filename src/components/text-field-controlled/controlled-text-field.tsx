import { FieldValues, useController, UseControllerProps } from 'react-hook-form'

import { TextField } from '@/ui'
import { InputProps } from '@/ui/text-field/model/text-field-types'

type ControlledTextFieldProps<T extends FieldValues> = Omit<
  UseControllerProps<T>,
  'rules' | 'defaultValues'
> &
  Omit<InputProps, 'onChange' | 'value'>

export const ControlledTextField = <T extends FieldValues>({
  control,
  name,
  ...rest
}: ControlledTextFieldProps<T>) => {
  const {
    field,
    fieldState: { error },
  } = useController({
    name,
    control,
  })

  return <TextField {...field} error={error?.message} {...rest} />
}
