import React, { useEffect, useState } from 'react'

import { clsx } from 'clsx'
import { getMonth, getYear } from 'date-fns'
import en from 'date-fns/locale/en-US'
import ru from 'date-fns/locale/ru'
import Link from 'next/link'
import DatePicker, { ReactDatePickerProps, registerLocale } from 'react-datepicker'
registerLocale('ru', ru)
registerLocale('en', en)
import './react-datepicker.scss'

import { CalendarIcon, TagProcessor, useDisclose, useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { CalendarNavigationButton } from '@/components/calendar/calendar-navigation-button/calendar-navigation-button'
import { Typography } from '@/ui'

type DateValueType = Date | [Date | null, Date | null] | null

export type CalendarProps = {
  label?: string
  error?: string
  isRange?: boolean
  value?: string
  id?: string
  onChange?: (date: DateValueType) => void
} & ReactDatePickerProps

export const Calendar = ({
  isRange = false,
  value = '',
  onChange,
  label,
  error,
  id,
  ...props
}: CalendarProps): React.JSX.Element => {
  const { isOpen, onOpen, onClose, onToggle } = useDisclose()

  const [startDate, setStartDate] = useState(new Date())
  const [isMonthPiker, setIsMonthPiker] = useState(false)
  const [isYearPiker, setIsYearPiker] = useState(false)
  const [dateRange, setDateRange] = useState([null, null])
  const [startDateInRange, endDateInRange] = dateRange

  const { t } = useTranslation()
  const { month, locale } = t.calendar
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
    wrapper: clsx('react-datepicker-wrapper', error && 'error'),
    input: clsx('react-datepicker__input-container', error && 'error'),
  }

  const calendarIcon = (
    <button className="icon" type={'button'} onClick={onToggle}>
      <CalendarIcon color={error ? '#CC1439' : 'currentColor'} />
    </button>
  )

  const errorMessage = error && (
    <TagProcessor
      text={error}
      tags={{
        1: () => <Link href={authNavigationUrls.privacyPolicy()}>{linkLabel}</Link>,
      }}
    />
  )

  return (
    <div className="react__datepicker">
      {label && (
        <Typography as={'label'} variant={'regular-14'} htmlFor={id} className="label">
          {label}
        </Typography>
      )}

      <DatePicker
        id={id}
        onInputClick={onOpen}
        onBlur={onClose}
        value={value}
        calendarStartDay={1}
        isClearable
        className={styles.calendar}
        showIcon
        icon={calendarIcon}
        open={isOpen}
        selected={startDate}
        shouldCloseOnSelect={!isMonthPiker && !isYearPiker}
        showYearPicker={isYearPiker}
        locale={locale}
        showMonthYearPicker={isMonthPiker}
        startDate={isRange ? startDateInRange : null}
        endDate={isRange ? endDateInRange : null}
        selectsRange={isRange}
        dayClassName={date => (date.getDay() === 0 || date.getDay() === 6 ? 'weekend' : null)}
        onChange={onDateChange}
        {...props}
        renderCustomHeader={({
          date,
          decreaseMonth,
          increaseMonth,
          prevMonthButtonDisabled,
          nextMonthButtonDisabled,
          prevYearButtonDisabled,
          nextYearButtonDisabled,
          increaseYear,
          decreaseYear,
        }) => (
          <div className="react-datepicker__navigation--wrapper">
            <div>
              <button onClick={handleMonthPiker} type={'button'}>
                <Typography className="react-datepicker__navigation--month" variant="bold-16">
                  {month[getMonth(date)]}
                </Typography>
              </button>
              <button onClick={handleYearPicker} type={'button'}>
                <Typography className="react-datepicker__navigation--year" variant="bold-16">
                  {getYear(date)}
                </Typography>
              </button>
            </div>
            <div>
              <CalendarNavigationButton
                className="react-datepicker__navigation--previous"
                onClick={isYearPiker ? decreaseYear : decreaseMonth}
                disabled={isYearPiker ? prevYearButtonDisabled : prevMonthButtonDisabled}
                direction="left"
              />
              <CalendarNavigationButton
                className="react-datepicker__navigation--next"
                onClick={isYearPiker ? increaseYear : increaseMonth}
                disabled={isYearPiker ? nextYearButtonDisabled : nextMonthButtonDisabled}
                direction="right"
              />
            </div>
          </div>
        )}
      />

      {error && (
        <Typography as={'p'} variant={'small'} className="error">
          {errorMessage}
        </Typography>
      )}
    </div>
  )
}
