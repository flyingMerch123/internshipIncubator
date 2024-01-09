import { CSSProperties } from 'react'

import s from './loader.module.scss'

type LoaderProps = {
  isLoading?: boolean
  width?: CSSProperties['width']
  height?: CSSProperties['height']
}

export const Loader = ({ isLoading, width, height }: LoaderProps) => {
  return isLoading ? <span className={s.loader} style={{ width, height }}></span> : null
}
