import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './sidebar-item.module.scss'

import { SVGIconType } from '@/app'
import { Typography } from '@/ui'

type MenuItemProps<T extends ElementType = typeof Link> = {
  as?: T
  label?: string
  icon?: SVGIconType
  className?: string
  disabled?: boolean
  isSelected?: boolean
  asListItem?: boolean
} & ComponentPropsWithoutRef<T>

export const SidebarItem = <T extends ElementType = typeof Link>({
  as,
  href,
  icon,
  label,
  disabled,
  isSelected,
  asListItem = true,
  children,
  ...props
}: MenuItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof MenuItemProps<T>>) => {
  const SVGMenuIcon = icon || Fragment
  const Component = as || Link
  const Container = asListItem ? SideBarMenu.Item : Fragment

  const styles = {
    link: clsx(s.link, disabled && s.disabled, isSelected && s.selected),
    label: clsx(s.label, disabled && s.disabled),
  }

  return (
    <Container>
      <Component
        href={href}
        className={styles.link}
        aria-disabled={disabled}
        aria-hidden={disabled}
        {...props}
      >
        {children}
        <SVGMenuIcon />
        <Typography className={styles.label}>{label}</Typography>
      </Component>
    </Container>
  )
}
