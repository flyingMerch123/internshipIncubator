import { FieldValues, UseControllerProps, useController } from 'react-hook-form'

import { Calendar, CalendarProps } from '@/components'

type ControlledCalendarType<T extends FieldValues> = UseControllerProps<T> &
  Omit<CalendarProps, 'id' | 'onChange' | 'value'>
export const ControlledCalendar = <T extends FieldValues>({
  control,
  defaultValue,
  name,
  rules,
  shouldUnregister,
  ...calendarProps
}: ControlledCalendarType<T>) => {
  const {
    field: { onChange, value },
  } = useController({
    control,
    defaultValue,
    name,
    rules,
    shouldUnregister,
  })

  return <Calendar {...{ id: name, onChange, value, ...calendarProps }} />
}
