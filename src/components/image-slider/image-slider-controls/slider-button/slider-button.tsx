import { ChevronLeft, ChevronRight } from '@/app'
import { SliderControlsType } from '@/components'
import { clsx } from 'clsx'

import s from './slider-controls-button.module.scss'

type ControlsButtonType = {
  position: 'left' | 'right'
} & Omit<SliderControlsType, 'imageIndex'>
export const SliderButton = ({
  images,
  inlineStyle,
  isEditMode,
  position,
  setImageIndex,
}: ControlsButtonType) => {
  const showNextImage = () => {
    setImageIndex(index => {
      if (index === images.length - 1) {
        return 0
      }

      return index + 1
    })
  }

  const showPrevImage = () => {
    setImageIndex(index => {
      if (index === 0) {
        return images.length - 1
      }

      return index - 1
    })
  }

  const buttonVariant = {
    icon: position === 'left' ? <ChevronLeft /> : <ChevronRight />,
    onClickAction: position === 'left' ? showPrevImage : showNextImage,
    style: clsx(isEditMode ? s.editModeSlider : s.buttonSlider, s[position]),
  }

  return (
    <button
      className={buttonVariant.style}
      onClick={buttonVariant.onClickAction}
      style={inlineStyle}
    >
      <div className={s.icon}>{buttonVariant.icon}</div>
    </button>
  )
}
