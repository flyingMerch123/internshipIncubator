import s from './loader-v2.module.scss'

import { Typography } from '@/ui'

type LoaderType = {
  label?: string
  isLoading: boolean
}

export const LoaderV2 = ({ label = 'Loading...', isLoading = false }: LoaderType) => {
  if (!isLoading) return null

  return (
    <div className={s.overlay}>
      <div className={s.wrapper}>
        <div className={s.loader}></div>
        <Typography as={'p'} variant={'regular-16'}>
          {label}
        </Typography>
      </div>
    </div>
  )
}
