import s from './post-card.module.scss'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import {
  AddComment,
  CardDescription,
  CardHeader,
  CardInformation,
  CardOptions,
  CommentsList,
  PostType,
} from '@/components'
import ImageSlider from '@/components/image-slider/image-slider'
import { Card } from '@/ui'

export const PostCard = (props: PostType) => {
  const [ind1, ind2] = [0, 0]
    .map(_ => Math.floor(Math.random() * IMAGE_SLIDER_DATA.length))
    .sort((a, b) => a - b)

  return (
    <Card className={s.container}>
      <CardHeader
        url={'/assets/avatar/resized/4.jpg'}
        userName={'Viki'}
        account={props.account}
        createdAt={'1 week ago'}
      />
      <ImageSlider
        images={IMAGE_SLIDER_DATA.slice(ind1, ind2)}
        aspectRatio={'1/1'}
        fitStyle={'cover'}
      />
      <CardOptions account={'public'} />

      <CardDescription
        userName={'Viki'}
        url={'/assets/avatar/resized/4.jpg'}
        description={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Iste, totam!'}
      />
      <CardInformation likes={315} cardType={'regular'} />

      <CommentsList
        userName={''}
        account={props.account}
        postdId={''}
        url={''}
        description={''}
        cardType={'regular'}
        comments={props.comments}
      />

      <AddComment />
    </Card>
  )
}
