import { PropsWithChildren, useRef } from 'react'

import { useDisclose, useOnClickOutside } from '@/app'
import { clsx } from 'clsx'

import s from './dropdown-menu-container.module.scss'

export type MenuProps = PropsWithChildren<{
  menuStyle?: string
}>

export const DropdownMenuContainer = ({ children, menuStyle }: MenuProps) => {
  const { isOpen: isMenuOpen, onClose: closeMenu, onOpen: openMenu } = useDisclose()
  const menuRef = useRef<HTMLDivElement>(null)

  useOnClickOutside(menuRef, closeMenu)

  const clickHandler = () => openMenu()

  const styles = {
    dot: clsx(s.dot, isMenuOpen && s.active),
    list: clsx(isMenuOpen && s.active, menuStyle),
    menu: clsx(s.list, isMenuOpen && s.fade),
  }

  return (
    <nav className={s.navigation}>
      <div className={s.dots} onClick={clickHandler}>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
      </div>

      <div className={styles.menu} ref={menuRef}>
        <ul className={styles.list}>{children}</ul>
      </div>
    </nav>
  )
}
