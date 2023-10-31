import { ReactElement } from 'react'

import { LocalType } from '@/app/constants/enums'

export type FlagComponentProps = {
  locale?: LocalType
}

export type FlagSelectOption = { label: string | ReactElement; value: string }
