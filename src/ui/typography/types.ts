import { ComponentPropsWithoutRef, ElementType, JSXElementConstructor } from 'react'

import { Tags } from './enum'

export type Tag = 'div' | 'h1' | 'h2' | 'h3' | 'p' | 'span'

export type ReactTag = JSXElementConstructor<any> | keyof JSX.IntrinsicElements

export type TypographyProps<T extends ElementType> = {
  as?: Extract<ReactTag, Tag> | T
  variant?: keyof typeof Tags
} & ComponentPropsWithoutRef<T>
