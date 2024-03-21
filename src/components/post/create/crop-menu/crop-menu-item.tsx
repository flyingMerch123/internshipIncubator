import { ReactNode } from 'react'

import { Typography } from '@/ui'
import { clsx } from 'clsx'

import s from './crop-menu.module.scss'

type CropMenuItemType = {
  icon: ReactNode
  onClick: () => void
  selected: boolean
  title: string
}

export const CropMenuItem = ({ icon, onClick, selected, title }: CropMenuItemType) => {
  const className = clsx(s.menuItem, selected && s.selected)

  return (
    <div className={className} onClick={onClick}>
      <Typography as={'h3'} className={className} variant={'h3'}>
        {title}
      </Typography>
      <div className={className}>{icon}</div>
    </div>
  )
}
