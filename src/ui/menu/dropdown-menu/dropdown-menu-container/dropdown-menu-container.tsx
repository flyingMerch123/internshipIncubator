import { PropsWithChildren, useEffect } from 'react'

import { clsx } from 'clsx'
import { useRouter } from 'next/router'

import s from './dropdown-menu-container.module.scss'

import { useDisclose } from '@/app'

export type MenuProps = {
  menuStyle?: string
  isControlled?: boolean
}

export const DropdownMenuContainer = ({
  menuStyle,
  isControlled = true,
  children,
}: PropsWithChildren<MenuProps>) => {
  const { isOpen: isMenuOpen, onClose: closeMenu, onToggle: toggleMenu } = useDisclose()
  const { pathname } = useRouter()

  useEffect(() => {
    return () => closeMenu()
  }, [pathname, isControlled])

  const clickHandler = () => {
    toggleMenu()
  }

  const styles = {
    dot: clsx(s.dot, isMenuOpen && s.active),
    menu: clsx(s.list, isMenuOpen && s.fade),
    list: clsx(isMenuOpen && s.active, menuStyle),
  }

  return (
    <nav className={s.navigation}>
      <div className={s.dots} onClick={clickHandler}>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
        <p className={styles.dot}></p>
      </div>

      <div className={styles.menu}>
        <ul className={styles.list}>{children}</ul>
      </div>
    </nav>
  )
}
