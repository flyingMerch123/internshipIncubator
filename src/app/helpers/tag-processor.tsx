import React, { ElementType, Fragment } from 'react'

const tagsRegex = /(<\d+>[^<>]*<\/\d+>)/
const openCloseTagRegex = /<(\d+)>([^<>]*)<\/(\d+)>/

type Props<T> = {
  as?: T
  tags?: Record<string, (str: string) => JSX.Element>
  text: string
}

export const TagProcessor = <T extends ElementType = 'div'>(props: Props<T>) => {
  const { as: Component = Fragment } = props

  return <Component>{interpolateTags(props)}</Component>
}

const interpolateTags = (data: Omit<Props<any>, 'as'>) => {
  const { tags, text } = data

  if (!tags) {
    return text
  }

  const tokens = text.split(tagsRegex)

  return tokens.map(token => {
    const matchResult = openCloseTagRegex.exec(token)

    if (!matchResult) {
      return token
    }

    const [, openTag, content, closeTag] = matchResult

    if (!openTag || !closeTag || openTag !== closeTag) {
      return token
    }

    return <Fragment key={content}>{tags[openTag]?.(content ?? '')}</Fragment>
  })
}
