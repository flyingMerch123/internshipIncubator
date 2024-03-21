import React, { ChangeEvent } from 'react'

import { useRtkStateHook } from '@/app/hooks/useRtkState.hook'
import { changeDescription } from '@/app/services/posts/slider.slice'
import { useGetProfileQuery } from '@/app/services/profile/profile.api'
import { Avatar } from '@/components'
import { TextArea, Typography } from '@/ui'

import s from './post-description.module.scss'

export const PostDescription = () => {
  const { data } = useGetProfileQuery()

  const { _dispatch, _state } = useRtkStateHook()
  const { description: postDescription } = _state.slider

  const onChangeDescription = (e: ChangeEvent<HTMLTextAreaElement>) => {
    _dispatch(changeDescription({ text: e.target.value }))
  }

  return (
    <>
      <div className={s.wrapper}>
        <div className={s.description}>
          <div className={s.userInfo}>
            <div>
              <Avatar
                className={s.ava}
                height={36}
                iconScale={0.6}
                rounded
                src={data?.avatars[0]?.url || ''}
                width={36}
              />
            </div>

            <div className={s.userName}>
              <Typography color={'primary'} variant={'h3'}>
                {data?.userName}
              </Typography>
            </div>
          </div>

          <TextArea
            initialSize={postDescription?.length}
            label={'Add publication descriptions'}
            onChange={onChangeDescription}
            sizeLimit={500}
            value={postDescription ?? ''}
          />
        </div>
      </div>
    </>
  )
}
