import { RootState } from '@/app/store/rtk.types'

export const selectCreatePostModalIsOpen = (state: RootState) => state.modals.createPostModal.isOpen

export const selectPostCardModalIsOpen = (state: RootState) => state.modals.postCardModal.isOpen
export const selectPostCardModalPost = (state: RootState) => state.modals.postCardModal.post
export const selectPostCardModalMode = (state: RootState) => state.modals.postCardModal.mode
