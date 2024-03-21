import type { Meta, StoryObj } from '@storybook/react'

import { HomeMenuIcon, LogOutMenuIcon } from '@/app'
import { MenuItem } from '@/ui'

const meta = {
  argTypes: {},
  component: MenuItem,
  decorators: [
    Story => (
      <div
        style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', margin: '3em' }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Navigation/MenuItem',
} satisfies Meta<typeof MenuItem>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    href: '#',
    icon: HomeMenuIcon,
    label: 'Home',
  },
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '60vh',
          justifyContent: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemSelected: Story = {
  args: {
    href: '#',
    icon: HomeMenuIcon,
    isSelected: true,
    label: 'Home',
  },
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '60vh',
          justifyContent: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemDisabled: Story = {
  args: {
    disabled: true,
    href: '#',
    icon: HomeMenuIcon,
    label: 'Home',
  },
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '60vh',
          justifyContent: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemOnlyLabel: Story = {
  args: {
    href: 'https://www.google.com',
    label: 'Google',
    target: '_blank',
  },
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '60vh',
          justifyContent: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}

export const SidebarItemAsButton: Story = {
  args: {
    as: 'button',
    icon: LogOutMenuIcon,
    label: 'Log Out',
    onClick: () => {},
  },
  decorators: [
    Story => (
      <div
        style={{
          alignItems: 'center',
          display: 'flex',
          height: '60vh',
          justifyContent: 'center',
          listStyleType: 'none',
        }}
      >
        <Story />
      </div>
    ),
  ],
}
