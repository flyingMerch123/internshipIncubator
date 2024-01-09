import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { PostStateType } from '@/app/services/post/post.types'

const defaultState: PostStateType = {
  mode: 'view',
  isEdited: false,
}

const post = createSlice({
  name: 'post',
  initialState: defaultState,
  reducers: {
    setViewMode(state) {
      state.mode = 'view'
    },
    setEditMode(state) {
      state.mode = 'edit'
    },
    compareDescriptionVersions(state, action: PayloadAction<{ initial: string; final: string }>) {
      const { initial, final } = action.payload

      state.isEdited = initial !== final
    },
    resetDescriptionState(state) {
      state.isEdited = false
    },
  },
})

export const { setViewMode, setEditMode, compareDescriptionVersions, resetDescriptionState } =
  post.actions
export const postSlice = post.reducer
