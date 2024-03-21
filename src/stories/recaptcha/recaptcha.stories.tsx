import { useState } from 'react'

import { RECAPTCHA, RecaptchaProps } from '@/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {
    hl: 'en',
    sitekey: process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY as string,
    theme: 'dark',
  },
  component: RECAPTCHA,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Recaptcha',
} satisfies Meta<typeof RECAPTCHA>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}

const RecaptchaWithHookAndError = ({
  error = 'Please verify that you are not a robot',
  onChange,
  ...rest
}: RecaptchaProps) => {
  const [isChecked, setIsChecked] = useState<boolean>(false)

  return (
    <div style={{ border: isChecked ? '1px solid transparent' : '1px solid red', padding: '5px' }}>
      <RECAPTCHA onChange={() => setIsChecked(prev => !prev)} theme={'dark'} {...rest} />
      <p style={{ color: 'red', marginTop: 7, opacity: isChecked ? 0 : 1 }}>{error}</p>
    </div>
  )
}

export const WithError: Story = {
  render: () => (
    <RecaptchaWithHookAndError hl={'en'} sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_PUBLIC_KEY!} />
  ),
}
