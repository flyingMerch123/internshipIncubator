import type { Meta, StoryObj } from '@storybook/react'

import { FileInput } from '@/ui'

const meta = {
  title: 'Components/FileInput',
  component: FileInput,
  args: {},
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
