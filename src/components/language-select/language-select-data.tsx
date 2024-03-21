import { LocalType } from '@/app/constants/enums'

import { FlagComponent } from './flag-component'
import { FlagSelectOption } from './language-select-types'

const flags = {
  en: <FlagComponent locale={LocalType.EN} />,
  ru: <FlagComponent locale={LocalType.RU} />,
}

export const languageSelectOptions: Array<FlagSelectOption> = [
  {
    label: flags[LocalType.EN],
    value: LocalType.EN,
  },
  {
    label: flags[LocalType.RU],
    value: LocalType.RU,
  },
]
