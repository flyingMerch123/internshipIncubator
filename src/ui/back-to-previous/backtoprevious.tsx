import { BackToPreviousIcon } from '@/app/assets/svg'
import Link from 'next/link'
import { useRouter } from 'next/router'

import s from '@/ui/back-to-previous/backtoprevious.module.scss'

type PropsType = {
  href: string
  title: string
}
export const BackToPrevious = ({ href, title }: PropsType) => {
  const router = useRouter()

  return (
    <div className={s.wrapper}>
      <Link
        href={href}
        onClick={e => {
          e.preventDefault()
          router.back()
        }}
      >
        <BackToPreviousIcon />
        <span>{title}</span>
      </Link>
    </div>
  )
}
