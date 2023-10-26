import { toast } from 'react-toastify'

import { ErrorWithData } from '../types/common-types'

export const showError = (error: ErrorWithData): void => {
  if (typeof error.status === 'string') {
    toast.error(error.status)
  }
  if (Array.isArray(error.data?.message)) {
    toast.error(error.data.message[0].message)
  }
  if (typeof error.data?.message === 'string') {
    toast.error(error.data.message)
  }
}
