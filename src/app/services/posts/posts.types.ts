import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

export type PostStateType = {
  isEdited: boolean
  mode: 'edit' | 'view'
}

export type CreatePostResponse = {
  createdAt: string
  description: string
  id: string
  photoUrl: string
}
export type PostModel = {
  avatarOwner?: string
  createdAt?: string
  description?: string
  id?: number
  images: PostImageViewModel[]
  isMyProfile?: boolean
  location?: string
  owner?: PostModelOwner
  ownerId?: number
  updatedAt?: string
  userName?: string
}
export type PostImage = {
  fileSize: number
  filter?: string
  height: number
  uploadId: string
  url: string
  width: number
}
export type PostModelOwner = {
  firstName: string
  lastName: string
}
export type ImageSlideType = {
  currentImageIndex: number
  description: string
  images: PostImageViewModel[]
}
export type CreatePostRequest = {
  childrenMetadata: CreatePostRequestChildrenMetadata[]
  description: string
}
export type CreatePostRequestChildrenMetadata = {
  uploadId: string
}
export type PostImages = {
  images: PostImage[]
}

export type CommentsType = {
  avatarOwner?: string
  content?: string
  createdAt?: string
  description?: string
  from?: {
    avatars: [{}]
    id: number
    username: string
  }
  id?: number
  postId?: number
  userName?: string
}
