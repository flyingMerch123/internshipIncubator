import React from 'react'

import { AddImage, CropMenu, CropMenuItem, SliderZoom, useCropperMenu } from '@/components'
import { Button } from '@/ui'

import s from './crop-menu.module.scss'

type CropperMenuProps = {
  onCrop: () => Promise<void>
  setAspectRatio: (aspectRatio: number) => void
  setZoom: (zoom: number) => void
  zoom: number
}
export const CropperMenu = ({ onCrop, setAspectRatio, setZoom, zoom }: CropperMenuProps) => {
  const { cropMenuSelected, cropperMenuVersion } = useCropperMenu(setAspectRatio)

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.cropMenu}>
          <CropMenu icon={'cropper'}>
            {cropperMenuVersion.map(item => {
              const MenuIcon = item.icon

              return (
                <CropMenuItem
                  {...item}
                  icon={<MenuIcon />}
                  key={item.id}
                  onClick={() => item.onClick(item.id)}
                  selected={item.id === cropMenuSelected}
                />
              )
            })}
          </CropMenu>

          <CropMenu icon={'zoom'}>
            <SliderZoom isZoom setSliderValue={setZoom} sliderValue={zoom} />
          </CropMenu>
        </div>

        <Button className={s.btn} onClick={onCrop}>
          Crop
        </Button>

        <CropMenu icon={'image'} isImage>
          <AddImage />
        </CropMenu>
      </div>
    </>
  )
}
