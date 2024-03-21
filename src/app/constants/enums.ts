import { EnFlag, RuFlag } from '@/app'

export enum LocalType {
  EN = 'en',
  RU = 'ru',
}

export const flagIcons = {
  [LocalType.EN]: EnFlag,
  [LocalType.RU]: RuFlag,
} as const

export const IMAGE_SIZE = {
  MEDIUM: 'MEDIUM',
  THUMBNAIL: 'THUMBNAIL',
} as const

export const COMMON_MODE_STATE = {
  EDIT: 'edit',
  VIEW: 'view',
} as const
