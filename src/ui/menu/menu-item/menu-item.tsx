import { ComponentPropsWithoutRef, ElementType, Fragment } from 'react'

import { SVGIconType } from '@/app'
import { Typography } from '@/ui'
import * as SideBarMenu from '@radix-ui/react-navigation-menu'
import { clsx } from 'clsx'
import Link from 'next/link'

import s from './menu-item.module.scss'

type MenuItemProps<T extends ElementType = typeof Link> = {
  as?: T
  asListItem?: boolean
  className?: string
  disabled?: boolean
  icon?: SVGIconType
  isSelected?: boolean
  isStyled?: boolean
  label?: string
} & ComponentPropsWithoutRef<T>

export const MenuItem = <T extends ElementType = typeof Link>({
  as,
  asListItem = true,
  children,
  disabled,
  href,
  icon,
  isSelected,
  isStyled = true,
  label,
  ...props
}: MenuItemProps<T> & Omit<ComponentPropsWithoutRef<T>, keyof MenuItemProps<T>>) => {
  const SVGMenuIcon = icon || Fragment
  const Component = as || Link
  const Container = asListItem ? SideBarMenu.Item : Fragment

  const styles = {
    label: clsx(isStyled && s.label, disabled && s.disabled),
    link: clsx(s.link, isStyled && s.active, disabled && s.disabled, isSelected && s.selected),
  }

  return (
    <Container>
      <Component
        aria-disabled={disabled}
        aria-hidden={disabled}
        className={styles.link}
        href={href || null}
        tabIndex={disabled ? -1 : 0}
        {...props}
      >
        {children}

        <SVGMenuIcon />
        <Typography className={styles.label}>{label}</Typography>
      </Component>
    </Container>
  )
}
