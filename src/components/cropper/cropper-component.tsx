import React, { useState } from 'react'

import Cropper from 'react-easy-crop'

import { GALLERY_DATA } from '@/app'

const CropperComponent = () => {
  const [crop, setCrop] = useState({ x: 0, y: 0 })
  const [zoom, setZoom] = useState(1)

  const onCropChange = (crop: any) => {
    setCrop(crop)
  }

  const onZoomChange = (zoom: any) => {
    setZoom(zoom)
  }

  return (
    <div>
      <Cropper
        image={GALLERY_DATA[0].src}
        cropShape="rect"
        aspect={4 / 3}
        crop={crop}
        zoom={zoom}
        onCropChange={onCropChange}
        onZoomChange={onZoomChange}
      />
    </div>
  )
}

export default CropperComponent
