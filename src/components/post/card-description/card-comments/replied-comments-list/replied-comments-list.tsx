import s from './replied-comments-list.module.scss'

import { RepliedCommentsItem, RepliedCommentsListType } from '@/components'
export const RepliedCommentsList = ({ replies }: RepliedCommentsListType) => {
  if (!replies.length) return null

  return (
    <div className={s.container}>
      {replies?.map(reply => <RepliedCommentsItem key={reply.id} {...reply} />)}
    </div>
  )
}
