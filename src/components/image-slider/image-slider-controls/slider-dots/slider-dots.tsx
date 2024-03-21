import { SliderControlsType } from '@/components'
import { clsx } from 'clsx'

import s from './slider-controls-dots.module.scss'

export const SliderDots = ({
  imageIndex,
  images,
  inlineStyle,
  setImageIndex,
}: SliderControlsType) => {
  return (
    <div className={s.dotButtons} style={inlineStyle}>
      {images.map((_, index) => {
        return (
          <button className={s.dotButton} key={index} onClick={() => setImageIndex(index)}>
            <div className={clsx(s.dot, index === imageIndex && s.isActive)}></div>
          </button>
        )
      })}
    </div>
  )
}
