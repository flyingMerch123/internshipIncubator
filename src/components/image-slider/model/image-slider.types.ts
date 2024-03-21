import { CSSProperties, Dispatch, SetStateAction } from 'react'

import { UserModel } from '@/app/services/auth/auth.api.types'
import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'

export type ImageSliderType = {
  aspectRatio: '1/1' | '4/3' | '4/5' | '16/9'
  fitStyle: 'contain' | 'cover'
  height?: CSSProperties['height']
  images: PostImageViewModel[]
  isEditMode?: boolean
  isMyProfile?: boolean
  user?: UserModel | undefined
  width?: CSSProperties['width']
}

export type SliderControlsType = {
  imageIndex: number
  images: PostImageViewModel[]
  inlineStyle?: any
  isEditMode?: boolean
  isModified?: boolean
  setImageIndex: Dispatch<SetStateAction<number>>
}

export type IconType = 'cropper' | 'image' | 'zoom'
