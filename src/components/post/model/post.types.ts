import { SVGIconType } from '@/app'

type CommentCommonType = {
  comment?: string
  createdAt: string
  id: string
  likes?: number
  url: string
  userName: string
}

export type CommentSpecificType = CommentCommonType & {
  replies?: CommentCommonType[]
}

export type PostTypes = {
  account?: AccountType
  cardType?: 'regular' | 'xl'
  comments?: CommentSpecificType[]
  createdAt?: string
  description?: string
  postId?: number
  url?: string
  userName?: string
}

export type PostCardModalType = {
  askConfirmation?: boolean
  isLoading?: boolean
  isModified?: boolean
  isOpen: boolean
  loaderLabel?: string
  message?: string
  onChange: () => void
  title?: string
}

export type AccountType = 'friend' | 'personal' | 'public'

export type DropDownMenuType = {
  account: AccountType
  id?: number
  ownerId?: number
}

export type CardHeaderType = {
  account?: AccountType
  createdAt?: string
  url?: string
  userName?: string
}

export const ActionTypes = {
  copy: 'copy',
  delete: 'delete',
  edit: 'edit',
  follow: 'follow',
  report: 'report',
  unfollow: 'unfollow',
} as const

export type DropdownMenuItemType = {
  action: keyof typeof ActionTypes
  icon: SVGIconType
  isStyled: boolean
  label: string
}

export type DropdownMenuType = {
  [Account in AccountType]: Array<DropdownMenuItemType>
}

export type CommentType = {
  className?: string
  userName?: string
} & CommentSpecificType

export type CommentsListType = {
  comments: Array<CommentSpecificType>
}

export type RepliedCommentsListType = {
  replies: RepliedCommentType[]
}

export type RepliedCommentType = Omit<CommentType, 'replies'>

export type PostCardXLType = {
  account?: AccountType
  isLoading?: boolean
  isVisible?: boolean
} & PostTypes
