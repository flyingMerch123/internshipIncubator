import { PropsWithChildren, useRef } from 'react'

import { useDisclose, useOnClickOutside } from '@/app'
import { CropMenuIcon, IconType } from '@/components'

import s from './crop-menu.module.scss'

type CropMenuProps = PropsWithChildren<{
  icon: IconType
  isImage?: boolean
}>

export const CropMenu = ({ children, icon, isImage }: CropMenuProps) => {
  const { isOpen, onClose, onToggle } = useDisclose()
  const menuRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(menuRef, onClose)

  const color = isOpen ? 'var(--color-accent-500)' : 'currentColor'

  return (
    <div className={s.container} ref={menuRef}>
      <button className={s.trigger} onClick={onToggle} tabIndex={0}>
        <CropMenuIcon color={color} type={icon} />
      </button>

      {isOpen && <div className={isImage ? s.image : s.menu}>{children}</div>}
    </div>
  )
}
