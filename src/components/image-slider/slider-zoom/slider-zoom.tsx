import React from 'react'

import * as Slider from '@radix-ui/react-slider'

import s from './slider.module.scss'

type Props = {
  isZoom?: boolean
  setSliderValue: (sliderValue: number) => void
  sliderValue: number
}

export const SliderZoom = ({ isZoom, setSliderValue, sliderValue }: Props) => {
  const handleSliderChange = (value: number | number[]) => {
    setSliderValue(value as number)
  }

  return (
    <form>
      <Slider.Root
        className={isZoom ? s.SliderRootForZoom : s.SliderRoot}
        defaultValue={[sliderValue]}
        max={2}
        min={1}
        onValueChange={handleSliderChange}
        step={0.1}
        value={[sliderValue]}
      >
        <Slider.Track className={s.SliderTrack}>
          <Slider.Range className={s.SliderRange} />
        </Slider.Track>
        <Slider.Thumb aria-label={'Volume'} className={s.SliderThumb} />
      </Slider.Root>
    </form>
  )
}
