import { IMAGE_SIZE } from '@/app/constants/enums'

export type PublicPostsGetAll = InfinityPaginatedRes & {
  items: PostViewModel[]
}

export type PublicPostsGetAllArg = {
  endCursorPostId?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
}
export type PublicPostsGetPostsByUser = InfinityPaginatedRes & {
  items: PostViewModel[]
}
export type PublicPostsGetPostsByUserArg = {
  endCursorPostId?: number
  pageSize?: number
  sortBy?: string
  sortDirection?: 'asc' | 'desc'
  userId: number
}
export type PublicPostsGetPost = PostViewModel
export type PublicPostsGetPostArg = {
  postId?: number
}
export type InfinityPaginatedRes = {
  pageSize: number
  totalCount: number
  totalUsers: number
}

export type PostViewModel = {
  avatarOwner?: string
  createdAt: string
  description: string
  id: number
  images: PostImageViewModel[]
  location: string
  owner: Owner
  ownerId: number
  updatedAt: string
  userName: string
}
export type PostImageViewModel = {
  alt?: string
  fileSize: number
  filter?: string
  height: number
  imageSize: keyof typeof IMAGE_SIZE
  uploadId: string
  url: string
  width: number
}

export type Owner = {
  firstName: string
  lastName: string
}
