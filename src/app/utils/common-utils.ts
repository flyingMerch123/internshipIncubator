import { toast } from 'react-toastify'

import { ErrorWithData } from '@/app'
import { IMAGE_SIZE } from '@/app/constants/enums'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

export const showError = (error: ErrorWithData) => {
  if (typeof error === 'string') {
    return toast.error(error)
  }

  if (typeof error?.data === 'string') {
    return toast.error(error.data)
  }

  if (Array.isArray(error.data?.message)) {
    return toast.error(error.data.message[0].message)
  }

  if (typeof error.data?.message === 'string') {
    return toast.error(error.data.message)
  }

  if (Array.isArray(error.data?.errorsMessages)) {
    return toast.error(error.data.errorsMessages[0].message)
  }

  if (typeof error.status === 'string') {
    return toast.error(error.status)
  }
}

export function getFromLocalStorage<T>(key: string, initialData: T) {
  const data = localStorage.getItem(key)

  if (!data) {
    return initialData
  }

  return JSON.parse(data)
}

export function getFromSessionStorage<T>(key: string, initialData: T) {
  const data = sessionStorage.getItem(key)

  if (!data) {
    return initialData
  }

  return JSON.parse(data)
}

export const setToLocalStorage = <T>(key: string, value: T) => {
  localStorage.setItem(key, JSON.stringify(value))
}

export const setToSessionStorage = <T>(key: string, value: T) => {
  sessionStorage.setItem(key, JSON.stringify(value))
}

export const transformImagesData = (data: any) => {
  if (typeof data !== 'object' || data === null) {
    return data
  }

  for (const key in data) {
    if (key === 'images' && Array.isArray(data[key])) {
      data[key] = data[key].map((image: PostImageViewModel) => ({
        ...image,
        imageSize: image.width > 1000 ? IMAGE_SIZE.MEDIUM : IMAGE_SIZE.THUMBNAIL,
      }))
    } else {
      data[key] = transformImagesData(data[key])
    }
  }

  return data
}
