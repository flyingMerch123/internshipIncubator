import { PostImageViewModel } from '@/app/services/public-posts/public-posts.types'
import { ImageSliderWithFilters } from '@/components'

type FilterInterfaceProps = {
  images: PostImageViewModel[]
}
export const FilterInterface = ({ images }: FilterInterfaceProps) => {
  return <ImageSliderWithFilters aspectRatio={'4/3'} fitStyle={'contain'} images={images} />
}
