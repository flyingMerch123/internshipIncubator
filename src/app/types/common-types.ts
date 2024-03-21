import { FetchBaseQueryError } from '@reduxjs/toolkit/dist/query/react'

export type MessageArrayModel = {
  field: string
  message: string
}[]
export type ErrorWithData =
  | (FetchBaseQueryError & {
      data: {
        errorsMessages?: MessageArrayModel
        message?: MessageArrayModel | string
      }
    })
  | string
export type Nullable<T> = T | null
export type ErrorModel = {
  data: { error: string; messages: ErrorModelMessages[]; statusCode: number }
  status: string
}
export type ErrorModelMessages = {
  field: string
  message: string
}
