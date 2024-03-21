import type { Meta, StoryObj } from '@storybook/react'

import { NotificationModal } from '@/components'

const meta: Meta<typeof NotificationModal> = {
  argTypes: {},
  component: NotificationModal,
  tags: ['autodocs'],
  title: 'Components/NotificationModal',
}

export default meta
type Story = StoryObj<typeof NotificationModal>

export const Modal: Story = {
  args: {},
}
