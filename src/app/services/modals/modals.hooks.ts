import {
  selectCreatePostModalIsOpen,
  selectPostCardModalIsOpen,
  selectPostCardModalMode,
  selectPostCardModalPost,
} from '@/app/services/modals/modals.selectors'
import {
  clearPostCardModalState,
  setCreatePostModal,
  setPostCardModalDescription,
  setPostCardModalIsOpen,
  setPostCardModalMode,
  setPostCardModalPost,
  setPostImages,
} from '@/app/services/modals/modals.slice'
import { PostCardViewModelMode } from '@/app/services/modals/modals.types'
import { PostImageViewModel, PostViewModel } from '@/app/services/public-posts/public-posts.types'
import { useAppDispatch, useAppSelector } from '@/app/store/rtk.types'

export const useCreatePostModal = () => {
  const dispatch = useAppDispatch()
  const isOpen = useAppSelector(selectCreatePostModalIsOpen)
  const openCreatePostModal = () => {
    dispatch(setCreatePostModal({ isOpen: true }))
  }
  const closeCreatePostModal = () => {
    dispatch(setCreatePostModal({ isOpen: false }))
  }

  return { closeCreatePostModal, isOpen, openCreatePostModal }
}

export const usePostCardModal = () => {
  const dispatch = useAppDispatch()
  const isOpenPostCardModal = useAppSelector(selectPostCardModalIsOpen)
  const selectedPost = useAppSelector(selectPostCardModalPost)
  const mode = useAppSelector(selectPostCardModalMode)

  const openPostCardModal = () => {
    dispatch(setPostCardModalIsOpen({ isOpen: true }))
  }
  const closePostCardModal = () => {
    dispatch(setPostCardModalIsOpen({ isOpen: false }))
  }
  const changePostCardModalMode = (mode: PostCardViewModelMode) => {
    dispatch(setPostCardModalMode({ mode }))
  }

  const setPostCardModalSelectedPost = (post: PostViewModel) => {
    dispatch(setPostCardModalPost({ post }))
  }
  const clearPostCardModal = () => {
    dispatch(clearPostCardModalState())
  }

  const updatePostDescription = (description: string) => {
    dispatch(setPostCardModalDescription({ description }))
  }

  const updatePostImages = (images: PostImageViewModel[]) => {
    dispatch(setPostImages({ images }))
  }

  return {
    changePostCardModalMode,
    clearPostCardModal,
    closePostCardModal,
    isOpenPostCardModal,
    mode,
    openPostCardModal,
    selectedPost,
    setPostCardModalSelectedPost,
    updatePostDescription,
    updatePostImages,
  }
}
