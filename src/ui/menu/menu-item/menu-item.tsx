import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './menu-item.module.scss'

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
  isStyled?: boolean
} & ComponentPropsWithoutRef<T>

export const MenuItem = <T extends ElementType = typeof Link>({
  as,
  href,
  icon,
  label,
  disabled,
  isSelected,
  asListItem = true,
  isStyled = true,
  children,
  ...props
}: MenuItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof MenuItemProps<T>>) => {
  const SVGMenuIcon = icon || Fragment
  const Component = as || Link
  const Container = asListItem ? SideBarMenu.Item : Fragment

  const styles = {
    link: clsx(s.link, isStyled && s.active, disabled && s.disabled, isSelected && s.selected),
    label: clsx(isStyled && s.label, disabled && s.disabled),
  }

  return (
    <Container>
      <Component
        href={href}
        className={styles.link}
        tabIndex={disabled ? -1 : 0}
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
