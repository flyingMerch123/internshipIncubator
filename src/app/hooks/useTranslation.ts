import { en } from '@/app/locales/en'
import { ru } from '@/app/locales/ru'
import { useRouter } from 'next/router'

export const useTranslation = () => {
  const router = useRouter()

  const t = router.locale === 'en' ? en : ru

  return { t }
}
