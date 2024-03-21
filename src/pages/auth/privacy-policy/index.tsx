import { useTranslation } from '@/app'
import { authNavigationUrls } from '@/app/constants'
import { TextContainer } from '@/components'
import { BackToPrevious } from '@/ui'

export default function TermsOfServicePage() {
  const { t } = useTranslation()

  return (
    <TextContainer>
      <BackToPrevious href={authNavigationUrls.signUp()} title={'Back to previous page'} />
      <p>{t.privacyDescription.title}</p>
      <span>{t.privacyDescription.description}</span>
    </TextContainer>
  )
}
