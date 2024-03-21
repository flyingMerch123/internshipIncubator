import { LinkExpired } from '@/modules'
import { useRouter } from 'next/router'

const LinkExpiredPage = () => {
  const router = useRouter()

  return <LinkExpired email={router.query.email as string} />
}

export default LinkExpiredPage
