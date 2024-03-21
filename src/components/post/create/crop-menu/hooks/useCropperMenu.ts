import { useState } from 'react'

import { LandscapeCrop, OriginalCrop, PortraitCrop, SVGIconType, SquareCrop } from '@/app'

type CropperMenuType = {
  icon: SVGIconType
  id: string
  onClick: (id: string) => void
  title: string
}

export const useCropperMenu = (setAspectRatio: (aspectRatio: number) => void) => {
  const [cropMenuSelected, setCropMenuSelected] = useState('1')

  const cropperMenuVersion: CropperMenuType[] = [
    {
      icon: OriginalCrop,
      id: '1',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(4 / 3)
        }
        setCropMenuSelected(id)
      },
      title: 'Original',
    },
    {
      icon: SquareCrop,
      id: '2',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(1)
        }
        setCropMenuSelected(id)
      },
      title: '1:1',
    },
    {
      icon: PortraitCrop,
      id: '3',
      onClick: (id: string) => {
        if (setAspectRatio) {
          setAspectRatio(4 / 5)
        }
        setCropMenuSelected(id)
      },
      title: '4:5',
    },
    {
      icon: LandscapeCrop,
      id: '4',
      onClick: (id: string) => {
        setAspectRatio(16 / 9)

        setCropMenuSelected(id)
      },
      title: '16:9',
    },
  ]

  return { cropMenuSelected, cropperMenuVersion }
}
