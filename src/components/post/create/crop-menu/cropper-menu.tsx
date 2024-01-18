import s from './crop-menu.module.scss'

import { addCroppedImage } from '@/app/services/post/slider.slice'
import { useAppDispatch } from '@/app/store/rtk.types'
import {
  AddImage,
  CropMenu,
  CropMenuItem,
  ImageModel,
  useCropperMenu,
  useImageCrop,
  Zoom,
} from '@/components'
import { Button } from '@/ui'

type CropperMenuProps = {
  images: ImageModel[]
  imageIndex: number
  croppedAreaPixels: null
  zoom: number
  setZoom: (zoom: number) => void
  aspectRatio?: number
  setAspectRatio?: (aspectRatio: number) => void
  crop?: { x: number; y: number }
}
export const CropperMenu = ({
  images,
  imageIndex,
  croppedAreaPixels,
  zoom,
  setZoom,
  setAspectRatio,
}: CropperMenuProps) => {
  const { getCroppedImg } = useImageCrop()
  const { cropperMenuVersion, cropMenuSelected } = useCropperMenu(setAspectRatio)

  const dispatch = useAppDispatch()

  const setCroppedImageFor = (id: string, croppedImage: string) => {
    const imageIndex = images.findIndex(x => x.id === id)

    dispatch(addCroppedImage({ index: imageIndex, croppedImage }))
  }
  const onCrop = async () => {
    if (croppedAreaPixels) {
      const croppedImage = await getCroppedImg(images[imageIndex].url, croppedAreaPixels)

      setCroppedImageFor(images[imageIndex].id, croppedImage)
    }
  }

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
                  onClick={() => item.onClick(item.id)}
                  selected={item.id === cropMenuSelected}
                  key={item.id}
                />
              )
            })}
          </CropMenu>

          <CropMenu icon={'zoom'}>
            <Zoom zoom={zoom} setZoom={setZoom} />
          </CropMenu>
        </div>

        <Button onClick={onCrop}>Crop</Button>

        <CropMenu icon={'image'} isImage>
          <AddImage />
        </CropMenu>
      </div>
    </>
  )
}