export type ImageModel = { id: string | number; url: any; alt: string }
export type ImageSliderProps = {
  images: ImageModel[]
  aspectRatio: string
  fitStyle: 'cover' | 'contain'
  size?: number
  onClick?: (id: string | number) => void
}
