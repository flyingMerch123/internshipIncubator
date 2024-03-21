import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '@/ui'

const meta = {
  argTypes: {},
  args: {
    label: 'Message',
    placeholder: 'Leave a message...',
  },
  component: TextArea,
  decorators: [
    Story => (
      <div
        style={{
          height: '25rem',
          margin: '3em',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/TextArea',
} satisfies Meta<typeof TextArea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const WithSizeLimit = {
  args: {
    placeholder: 'Leave your message here...',
    sizeLimit: 50,
  },
}
export const WithError: Story = {
  args: {
    error: 'Please provide text of your message.',
  },
}

export const Disabled = {
  args: {
    disabled: true,
    placeholder: '',
  },
}
