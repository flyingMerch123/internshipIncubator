import type { Meta, StoryObj } from '@storybook/react'

import { Card } from '@/ui'

const meta = {
  argTypes: {},
  component: Card,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: /(?:\b|')(children|onClick)(?:\b|')/g,
    },
  },
  tags: ['autodocs'],
  title: 'Components/Card',
} satisfies Meta<typeof Card>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <h1 style={{ color: 'var(--text-color-primary)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
    ),
  },
}
export const With_Padding: Story = {
  args: {
    children: (
      <h1 style={{ color: 'var(--text-color-primary)' }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </h1>
    ),
    style: { padding: '25px' },
  },
}
