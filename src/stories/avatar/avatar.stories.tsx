import type { Meta, StoryObj } from '@storybook/react'

import { Avatar } from '@/components'

const meta = {
  argTypes: {},
  args: {
    src: 'https://static.vidnoz.com/system/tool/talking_head/v5/02.png',
  },
  component: Avatar,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Avatar',
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AsRectangleShape: Story = {
  args: {
    rounded: false,
  },
}

export const FallbackAvatarImage: Story = {
  args: {
    src: 'https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_640.png',
  },
}

export const MobileVersion: Story = {
  args: {
    height: 72,
    width: 72,
  },
}
