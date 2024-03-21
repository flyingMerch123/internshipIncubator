import type { Meta, StoryObj } from '@storybook/react'

import { Label } from '@/ui'

const meta = {
  argTypes: {},
  component: Label,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Label',
} satisfies Meta<typeof Label>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Label Title',
  },
}
