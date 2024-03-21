import { InitialApplicationState } from '@/app/services/application/application.slice.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const initialState: InitialApplicationState = {
  loadingSpinner: {
    isLoading: false,
    loadingMessage: '',
  },
}

const slice = createSlice({
  initialState,
  name: 'application',
  reducers: {
    clearLoadingSpinner: state => {
      state.loadingSpinner = initialState.loadingSpinner
    },
    setLoadingSpinnerIsLoading: (state, action: PayloadAction<{ isLoading: boolean }>) => {
      state.loadingSpinner.isLoading = action.payload.isLoading
    },
    setLoadingSpinnerMessage: (state, action: PayloadAction<{ message: string }>) => {
      state.loadingSpinner.loadingMessage = action.payload.message
    },
  },
})

export const { clearLoadingSpinner, setLoadingSpinnerIsLoading, setLoadingSpinnerMessage } =
  slice.actions
export const applicationReducer = slice.reducer
