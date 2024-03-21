import React, { useEffect, useState } from 'react'
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker'

import { CalendarIcon, TagProcessor, useDisclose, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { CalendarNavigationButton } from '@/components/calendar/calendar-navigation-button/calendar-navigation-button'
import { Typography } from '@/ui'
import { clsx } from 'clsx'
import { getMonth, getYear } from 'date-fns'
import en from 'date-fns/locale/en-US'
import ru from 'date-fns/locale/ru'
import Link from 'next/link'

import './react-datepicker.scss'

registerLocale('ru', ru)
registerLocale('en', en)

type DateValueType = [Date | null, Date | null] | Date | null

export type CalendarProps = {
  error?: string
  id?: string
  isRange?: boolean
  label?: string
  onChange?: (date: DateValueType) => void
  value?: string
} & ReactDatePickerProps

export const Calendar = ({
  error,
  id,
  isRange = false,
  label,
  onChange,
  value = '',
  ...props
}: CalendarProps): React.JSX.Element => {
  const { isOpen, onClose, onOpen, onToggle } = useDisclose()

  const [startDate, setStartDate] = useState(new Date())
  const [isMonthPiker, setIsMonthPiker] = useState(false)
  const [isYearPiker, setIsYearPiker] = useState(false)
  const [dateRange, setDateRange] = useState([null, null])
  const [startDateInRange, endDateInRange] = dateRange

  const { t } = useTranslation()
  const { locale, month } = t.calendar
  const { linkLabel } = t.profileSettings.generalSettings.birthday.validation

  useEffect(() => {
    setIsMonthPiker(false)
    setIsYearPiker(false)
  }, [startDate])
  const handleMonthPiker = (): void => {
    setIsYearPiker(false)
    setIsMonthPiker(prev => !prev)
  }
  const handleYearPicker = (): void => {
    setIsMonthPiker(false)
    setIsYearPiker(prev => !prev)
  }

  const updateDate = (date: DateValueType) => {
    isRange ? setDateRange(date as null[]) : setStartDate(date as Date)
  }

  const onDateChange = (date: DateValueType) => {
    onChange && onChange(date)

    updateDate(date)
    onClose()
  }

  const styles = {
    calendar: clsx('calendar', error && 'error'),
    input: clsx('react-datepicker__input-container', error && 'error'),
    wrapper: clsx('react-datepicker-wrapper', error && 'error'),
  }

  const calendarIcon = (
    <button className={'icon'} onClick={onToggle} type={'button'}>
      <CalendarIcon color={error ? '#CC1439' : 'currentColor'} />
    </button>
  )

  const errorMessage = error && (
    <TagProcessor
      tags={{
        1: () => <Link href={authNavigationUrls.privacyPolicy()}>{linkLabel}</Link>,
      }}
      text={error}
    />
  )

  return (
    <div className={'react__datepicker'}>
      {label && (
        <Typography as={'label'} className={'label'} htmlFor={id} variant={'regular-14'}>
          {label}
        </Typography>
      )}

      <DatePicker
        calendarStartDay={1}
        className={styles.calendar}
        dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : null)}
        endDate={isRange ? endDateInRange : null}
        icon={calendarIcon}
        id={id}
        isClearable
        locale={locale}
        onBlur={onClose}
        onChange={onDateChange}
        onInputClick={onOpen}
        open={isOpen}
        selected={startDate}
        selectsRange={isRange}
        shouldCloseOnSelect={!isMonthPiker && !isYearPiker}
        showIcon
        showMonthYearPicker={isMonthPiker}
        showYearPicker={isYearPiker}
        startDate={isRange ? startDateInRange : null}
        value={value}
        {...props}
        renderCustomHeader={({
          date,
          decreaseMonth,
          decreaseYear,
          increaseMonth,
          increaseYear,
          nextMonthButtonDisabled,
          nextYearButtonDisabled,
          prevMonthButtonDisabled,
          prevYearButtonDisabled,
        }) => (
          <div className={'react-datepicker__navigation--wrapper'}>
            <div>
              <button onClick={handleMonthPiker} type={'button'}>
                <Typography className={'react-datepicker__navigation--month'} variant={'bold-16'}>
                  {month[getMonth(date)]}
                </Typography>
              </button>
              <button onClick={handleYearPicker} type={'button'}>
                <Typography className={'react-datepicker__navigation--year'} variant={'bold-16'}>
                  {getYear(date)}
                </Typography>
              </button>
            </div>
            <div>
              <CalendarNavigationButton
                className={'react-datepicker__navigation--previous'}
                direction={'left'}
                disabled={isYearPiker ? prevYearButtonDisabled : prevMonthButtonDisabled}
                onClick={isYearPiker ? decreaseYear : decreaseMonth}
              />
              <CalendarNavigationButton
                className={'react-datepicker__navigation--next'}
                direction={'right'}
                disabled={isYearPiker ? nextYearButtonDisabled : nextMonthButtonDisabled}
                onClick={isYearPiker ? increaseYear : increaseMonth}
              />
            </div>
          </div>
        )}
      />

      {error && (
        <Typography as={'p'} className={'error'} variant={'small'}>
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
