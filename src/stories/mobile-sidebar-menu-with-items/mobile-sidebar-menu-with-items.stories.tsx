import type { Meta, StoryObj } from '@storybook/react'

import { MobileSidebarMenuWithItems } from '@/modules'

import s from './styles.module.scss'

const meta = {
  argTypes: {},
  args: {
    className: s.story,
  },
  component: MobileSidebarMenuWithItems,
  decorators: [
    Story => (
      <div style={{ height: '20rem', width: '40rem' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Navigation/MobileSidebarMenuWithItems',
} satisfies Meta<typeof MobileSidebarMenuWithItems>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    className: s.story,
  },
}
