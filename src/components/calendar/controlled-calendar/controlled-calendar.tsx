import { useController, UseControllerProps, FieldValues } from 'react-hook-form'

import { Calendar, CalendarProps } from '@/components'

type ControlledCalendarType<T extends FieldValues> = UseControllerProps<T> &
  Omit<CalendarProps, 'value' | 'onChange' | 'id'>
export const ControlledCalendar = <T extends FieldValues>({
  name,
  rules,
  shouldUnregister,
  control,
  defaultValue,
  ...calendarProps
}: ControlledCalendarType<T>) => {
  const {
    field: { value, onChange },
  } = useController({
    name,
    rules,
    shouldUnregister,
    control,
    defaultValue,
  })

  return <Calendar {...{ id: name, value, onChange, ...calendarProps }} />
}
