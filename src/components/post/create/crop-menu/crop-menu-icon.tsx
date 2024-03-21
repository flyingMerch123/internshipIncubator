import { ReactNode, useMemo } from 'react'

import { Cropping, ImageCropper, ZoomCropper } from '@/app'
import { IconType } from '@/components'

export const CropMenuIcon = ({ color, type }: { color?: string; type: IconType }) => {
  const icons: Record<IconType, ReactNode> = useMemo(() => {
    return {
      cropper: <Cropping color={color} />,
      image: <ImageCropper color={color} />,
      zoom: <ZoomCropper color={color} />,
    }
  }, [color])

  return icons[type]
}
