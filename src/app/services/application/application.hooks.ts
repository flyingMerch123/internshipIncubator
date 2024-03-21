import { useEffect } from 'react'

import {
  selectLoadingSpinnerIsLoading,
  selectLoadingSpinnerMessage,
} from '@/app/services/application/application.selectors'
import {
  clearLoadingSpinner,
  setLoadingSpinnerIsLoading,
  setLoadingSpinnerMessage,
} from '@/app/services/application/application.slice'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

export const useLoadingSpinner = (params?: { active?: boolean; title?: string }) => {
  const isLoading = useAppSelector(selectLoadingSpinnerIsLoading)
  const message = useAppSelector(selectLoadingSpinnerMessage)
  const dispatch = useAppDispatch()
  const setIsLoading = ({ isLoading }: { isLoading: boolean }) => {
    dispatch(setLoadingSpinnerIsLoading({ isLoading }))
  }
  const setMessage = ({ message }: { message: string }) => {
    dispatch(setLoadingSpinnerMessage({ message }))
  }
  const startLoadingSpinner = ({ isLoading, message }: { isLoading: boolean; message: string }) => {
    setIsLoading({ isLoading })
    setMessage({ message })
  }

  const stopLoadingSpinner = () => {
    dispatch(clearLoadingSpinner())
  }

  useEffect(() => {
    setMessage({ message: params?.title || '' })
    setIsLoading({ isLoading: params?.active || false })
  }, [params?.active, params?.title])

  return { isLoading, message, setIsLoading, setMessage, startLoadingSpinner, stopLoadingSpinner }
}
