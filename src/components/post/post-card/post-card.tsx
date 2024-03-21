import { PostModel } from '@/app/services/posts/posts.types'
import {
  AddComment,
  CardHeader,
  CardInformation,
  CardOptions,
  CommentsList,
  ImageSlider,
} from '@/components'
import { Card } from '@/ui'

import s from './post-card.module.scss'

export const PostCard = (props: PostModel) => {
  return (
    <Card className={s.container}>
      <CardHeader {...props} />
      <ImageSlider {...props} aspectRatio={'1/1'} fitStyle={'cover'} />
      <CardOptions />
      {/*<CardDescription {...props} />*/}
      <CardInformation cardType={'regular'} likes={315} />
      <CommentsList {...props} />
      <AddComment />
    </Card>
  )
}
