import { SyntheticEvent } from 'react'

import { SVGIconType } from '@/app'

type CommentCommonType = {
  userName: string
  url: string
  id: string
  comment?: string
  createdAt: string
  likes?: number
}

export type CommentSpecificType = CommentCommonType & {
  replies?: CommentCommonType[]
}

export type PostType = {
  cardType?: 'regular' | 'xl'
  userName: string
  account: AccountType
  postdId: string
  url: string
  description: string
  createdAt?: string
  comments: CommentSpecificType[]
}

export type PostCardModalType = {
  title?: string
  message?: string
  askConfirmation?: boolean
  isOpen: boolean
  onChange: () => void
  isLoading?: boolean
  loaderLabel?: string
  isModified?: boolean
}

export type AccountType = 'personal' | 'public' | 'friend'

export type CardHeaderType = {
  url: string
  userName: string
  account: AccountType
  createdAt?: string
}

export const ActionTypes = {
  report: 'report',
  follow: 'follow',
  unfollow: 'unfollow',
  copy: 'copy',
  edit: 'edit',
  delete: 'delete',
} as const

export type DropdownMenuItemType = {
  icon: SVGIconType
  label: string
  isStyled: boolean
  action: keyof typeof ActionTypes
}

export type DropdownMenuType = {
  [key in AccountType]: Array<DropdownMenuItemType>
}

export type CommentType = {
  userName?: string
  className?: string
} & CommentSpecificType

export type CommentsListType = {
  comments: Array<CommentSpecificType>
}

export type RepliedCommentsListType = {
  replies: RepliedCommentType[]
}

export type RepliedCommentType = Omit<CommentType, 'replies'>
