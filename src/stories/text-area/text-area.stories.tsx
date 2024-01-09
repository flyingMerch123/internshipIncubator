import type { Meta, StoryObj } from '@storybook/react'

import { TextArea } from '@/ui'

const meta = {
  title: 'Components/TextArea',
  component: TextArea,
  decorators: [
    Story => (
      <div
        style={{
          margin: '3em',
          height: '25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  args: {
    placeholder: 'Leave a message...',
    label: 'Message',
  },
  tags: ['autodocs'],
  argTypes: {},
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
    placeholder: '',
    disabled: true,
  },
}
