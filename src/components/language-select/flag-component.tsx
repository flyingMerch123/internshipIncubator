import { useMatchMedia, useTranslation } from '@/app'
import { LocalType, flagIcons } from '@/app/constants/enums'
import { Typography } from '@/ui'

import s from './language-select.module.scss'

import { FlagComponentProps } from './language-select-types'

export const FlagComponent = ({ locale = LocalType.EN }: FlagComponentProps) => {
  const { isMobile } = useMatchMedia()
  const { t } = useTranslation()

  const { [locale]: language } = t.navigation.header

  return (
    <div className={s.container}>
      <div className={s.languageSelect}>{flagIcons[locale]}</div>
      {!isMobile && (
        <Typography className={s.text} variant={'regular-16'}>
          {language}
        </Typography>
      )}
    </div>
  )
}
