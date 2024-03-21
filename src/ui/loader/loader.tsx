import { CSSProperties } from 'react'

import s from './loader.module.scss'

type LoaderProps = {
  height?: CSSProperties['height']
  isLoading?: boolean
  width?: CSSProperties['width']
}

export const Loader = ({ height, isLoading, width }: LoaderProps) => {
  return isLoading ? <span className={s.loader} style={{ height, width }}></span> : null
}
