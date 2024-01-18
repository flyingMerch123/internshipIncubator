import React, { MutableRefObject, PropsWithChildren, useEffect, useRef } from 'react'

import s from './crop-menu.module.scss'

import { useDisclose } from '@/app'
import { IconType, CropMenuIcon } from '@/components'

type CropMenuProps = PropsWithChildren<{
  icon: IconType
  isImage?: boolean
}>

export const CropMenu = ({ children, icon, isImage }: CropMenuProps) => {
  const { isOpen, onToggle, onClose } = useDisclose()
  const ref = useRef() as MutableRefObject<HTMLDivElement>

  const color = isOpen ? 'var(--color-accent-500)' : undefined

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (ref.current && !e.composedPath().includes(ref.current)) {
        onClose()
      }
    }

    document.body.addEventListener('click', handleClickOutside)

    return () => document.body.removeEventListener('click', handleClickOutside)
  }, [])

  return (
    <div className={s.container} tabIndex={0} ref={ref}>
      <button onClick={onToggle} className={s.trigger}>
        <CropMenuIcon type={icon} color={color} />
      </button>

      {isOpen && <div className={isImage ? s.image : s.menu}>{children}</div>}
    </div>
  )
}