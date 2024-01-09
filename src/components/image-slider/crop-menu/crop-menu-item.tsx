import React, { ReactNode } from 'react'

import { clsx } from 'clsx'

import s from './crop-menu.module.scss'

import { Typography } from '@/ui'

const CropMenuItem = ({
  icon,
  onClick,
  title,
  selected,
}: {
  id: number
  icon: ReactNode
  title: string
  onClick: () => void
  selected: boolean
}) => {
  const className = clsx(s.menuItem, selected && s.selected)

  return (
    <div className={className} onClick={onClick}>
      <Typography variant={'h3'} as={'h3'} className={className}>
        {title}
      </Typography>
      {icon}
    </div>
  )
}

export default CropMenuItem
