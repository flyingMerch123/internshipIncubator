export const isOldEnough = (birthday: Date, limit: number): boolean => {
  const currentDate: Date = new Date()
  const year: number = currentDate.getFullYear() - limit
  const month: number = currentDate.getMonth() + 1
  const date: number = currentDate.getDate()

  return birthday <= new Date(year, month, date)
}
