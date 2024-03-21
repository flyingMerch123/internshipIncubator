import { useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { TextContainer } from '@/components'
import { BackToPrevious } from '@/ui'

export default function PolicyPage() {
  const { t } = useTranslation()

  return (
    <TextContainer>
      <BackToPrevious href={authNavigationUrls.signUp()} title={'Back to sign up'} />
      <p>{t.termsDescription.title}</p>
      <span>{t.termsDescription.description}</span>
    </TextContainer>
  )
}
