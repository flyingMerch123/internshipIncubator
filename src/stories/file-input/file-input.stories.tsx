import type { Meta, StoryObj } from '@storybook/react'

import { FileInput } from '@/ui'

const meta = {
  argTypes: {},
  args: {},
  component: FileInput,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/FileInput',
} satisfies Meta<typeof FileInput>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const Disabled: Story = {
  args: {
    disabled: true,
  },
}
