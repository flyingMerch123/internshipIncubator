const setDateTemplate = ({ day, month, year }: { day: string; month: string; year: string }) => {
  return `${month.padStart(2, '0')}/${day.padStart(2, '0')}/${year}`
}

export const setDateFormat = (date: Date | string | undefined): string => {
  if (date == undefined) {
    return ''
  }

  const newDate = new Date(date)

  return setDateTemplate({
    day: newDate.getDate().toLocaleString(),
    month: (newDate.getMonth() + 1).toLocaleString(),
    year: newDate.getFullYear().toString(),
  })
}
