import { toast } from 'react-toastify'

import { ErrorWithData } from '@/app'

export const showError = (error: ErrorWithData) => {
  if (typeof error.status === 'string') {
    return toast.error(error.status)
  }
  if (Array.isArray(error.data?.message)) {
    return toast.error(error.data.message[0].message)
  }
  if (Array.isArray(error.data?.errorsMessages)) {
    return toast.error(error.data.errorsMessages[0].message)
  }
  if (typeof error.data?.message === 'string') {
    return toast.error(error.data.message)
  }
}

export function getFromLocalStorage<T>(key: string, initialData: T) {
  const data = localStorage.getItem(key)

  if (!data) return initialData

  return JSON.parse(data)
}

export function getFromSessionStorage<T>(key: string, initialData: T) {
  const data = sessionStorage.getItem(key)

  if (!data) return initialData

  return JSON.parse(data)
}

export const setToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const setToSessionStorage = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}
