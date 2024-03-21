import { COMMON_MODE_STATE } from '@/app/constants/enums'
import { PostViewModel } from '@/app/services/public-posts/public-posts.types'

export type ModalsStateModel = {
  createPostModal: CreatePostModal
  postCardModal: PostCardModal
}

export type CreatePostModal = {
  isOpen: boolean
}
export type PostCardModal = {
  isOpen?: boolean
  mode: PostCardViewModelMode
  post: PostViewModel
}

export type PostCardViewModelMode = (typeof COMMON_MODE_STATE)[keyof typeof COMMON_MODE_STATE]
