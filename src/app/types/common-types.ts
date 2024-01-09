import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'

export type MessageArrayModel = {
  message: string
  field: string
}[]
export type ErrorWithData = FetchBaseQueryError & {
  data: {
    message?: MessageArrayModel | string
    errorsMessages?: MessageArrayModel
  }
}
export type Nullable<T> = T | null
