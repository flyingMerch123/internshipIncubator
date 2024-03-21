import type { Meta, StoryObj } from '@storybook/react'

import { DropdownMenuWithItems } from '@/modules'

const meta = {
  argTypes: {},
  component: DropdownMenuWithItems,
  decorators: [
    Story => (
      <div style={{ display: 'flex', height: '25rem', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Navigation/DropdownMenuWithItems',
} satisfies Meta<typeof DropdownMenuWithItems>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
