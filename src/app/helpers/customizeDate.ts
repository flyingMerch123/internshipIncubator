export const date = (createdAt: string) => {
  return new Date(createdAt ? createdAt : '').toLocaleDateString('en-US', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

export const subscriptionDate = (date?: string) => {
  const formattedDate = date ? new Date(date) : new Date()
  const year = formattedDate.getFullYear()
  const month = (formattedDate.getMonth() + 1).toString().padStart(2, '0')
  const day = formattedDate.getDate().toString().padStart(2, '0')

  return `${day}.${month}.${year}`
}

const units = [
  { label: 'year', seconds: 31536000 },
  { label: 'month', seconds: 2592000 },
  { label: 'week', seconds: 604800 },
  { label: 'day', seconds: 86400 },
  { label: 'hour', seconds: 3600 },
  { label: 'minute', seconds: 60 },
  { label: 'second', seconds: 1 },
]

export const timeAgo = (date: Date | number | string) => {
  const time = Math.floor((new Date().valueOf() - new Date(date).valueOf()) / 1000)
  const { interval, unit } = calculateTimeDifference(time)
  const suffix = interval === 1 ? '' : 's'

  return `${interval} ${unit}${suffix} ago`
}
const calculateTimeDifference = (time: number) => {
  for (const { label, seconds } of units) {
    const interval = Math.floor(time / seconds)

    if (interval >= 1) {
      return {
        interval: interval,
        unit: label,
      }
    }
  }

  return {
    interval: 0,
    unit: '',
  }
}
