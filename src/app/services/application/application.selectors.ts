import { RootState } from '@/app/store/rtk.types'

export const selectLoadingSpinnerIsLoading = (state: RootState) =>
  state.application.loadingSpinner.isLoading
export const selectLoadingSpinnerMessage = (state: RootState) =>
  state.application.loadingSpinner.loadingMessage
