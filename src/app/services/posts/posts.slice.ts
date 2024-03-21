import { PostStateType } from '@/app/services/posts/posts.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const defaultState: PostStateType = {
  isEdited: false,
  mode: 'view',
}

const post = createSlice({
  initialState: defaultState,
  name: 'post',
  reducers: {
    compareDescriptionVersions(state, action: PayloadAction<{ final: string; initial?: string }>) {
      const { final, initial } = action.payload

      state.isEdited = initial !== final
    },
    resetDescriptionState(state) {
      state.isEdited = false
    },
    setEditMode(state) {
      state.mode = 'edit'
    },
    setViewMode(state) {
      state.mode = 'view'
    },
  },
})

export const { compareDescriptionVersions, resetDescriptionState, setEditMode, setViewMode } =
  post.actions
export const postsSlice = post.reducer
