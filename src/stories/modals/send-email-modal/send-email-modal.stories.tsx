import type { Meta, StoryObj } from '@storybook/react'

import { SendEmailModal } from '@/components'

const meta: Meta<typeof SendEmailModal> = {
  argTypes: {},
  component: SendEmailModal,
  tags: ['autodocs'],
  title: 'Components/SendEmailModal',
}

export default meta
type Story = StoryObj<typeof SendEmailModal>

export const Modal: Story = {
  args: {},
}
