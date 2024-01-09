import Link from 'next/link'
import { useRouter } from 'next/router'

import { BackToPreviousIcon } from '@/app/assets/svg'
import s from '@/ui/back-to-previous/backtoprevious.module.scss'

type PropsType = {
  title: string
  href: string
}
export const BackToPrevious = ({ title, href }: PropsType) => {
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
