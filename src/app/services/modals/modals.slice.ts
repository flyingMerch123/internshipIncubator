import { COMMON_MODE_STATE } from '@/app/constants/enums'
import {
  CreatePostModal,
  ModalsStateModel,
  PostCardViewModelMode,
} from '@/app/services/modals/modals.types'
import { PostImageViewModel, PostViewModel } from '@/app/services/public-posts/public-posts.types'
import { PayloadAction, createSlice } from '@reduxjs/toolkit'

const defaultState: ModalsStateModel = {
  createPostModal: {
    isOpen: false,
  },
  postCardModal: {
    isOpen: false,
    mode: COMMON_MODE_STATE.VIEW,
    post: { description: '', images: [] as PostImageViewModel[] } as PostViewModel,
  },
}

const post = createSlice({
  initialState: defaultState,
  name: 'modals',
  reducers: {
    clearPostCardModalState: state => {
      state.postCardModal = defaultState.postCardModal
    },
    setCreatePostModal: (state, action: PayloadAction<CreatePostModal>) => {
      state.createPostModal = action.payload
    },
    setPostCardModalDescription: (state, action: PayloadAction<{ description: string }>) => {
      state.postCardModal.post.description = action.payload.description
    },
    setPostCardModalIsOpen: (state, action: PayloadAction<{ isOpen: boolean }>) => {
      state.postCardModal.isOpen = action.payload.isOpen
    },
    setPostCardModalMode: (state, action: PayloadAction<{ mode: PostCardViewModelMode }>) => {
      state.postCardModal.mode = action.payload.mode
    },
    setPostCardModalPost: (state, action: PayloadAction<{ post: PostViewModel }>) => {
      state.postCardModal.post = action.payload.post
    },
    setPostImages: (state, action: PayloadAction<{ images: PostImageViewModel[] }>) => {
      state.postCardModal.post.images = action.payload.images
    },
  },
})

export const {
  clearPostCardModalState,
  setCreatePostModal,
  setPostCardModalDescription,
  setPostCardModalIsOpen,
  setPostCardModalMode,
  setPostCardModalPost,
  setPostImages,
} = post.actions
export const modalsReducer = post.reducer
