import { ComponentPropsWithoutRef, FC, PropsWithChildren, ReactNode } from 'react'

import * as LabelRDX from '@radix-ui/react-label'

import { Typography } from '../typography/typography'

type LabelProps = {
  id?: string
  labelTitle?: ReactNode
} & ComponentPropsWithoutRef<'label'>

export const Label: FC<PropsWithChildren<LabelProps>> = ({ id, labelTitle, children }) => (
  <>
    <LabelRDX.Root htmlFor={id}>
      <Typography variant="regular-14">{labelTitle}</Typography>

      {children}
    </LabelRDX.Root>
  </>
)
