import { NotificationsBell } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: NotificationsBell,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/NotificationsBell',
} satisfies Meta<typeof NotificationsBell>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
