import type { Meta, StoryObj } from '@storybook/react'

import { Button } from '@/ui'

const meta: Meta<typeof Button> = {
  argTypes: {},
  component: Button,
  tags: ['autodocs'],
  title: 'Components/Button',
}

export default meta
type Story = StoryObj<typeof Button>

export const Default: Story = {
  args: {
    children: 'Default',
    disabled: false,
    fullWidth: false,
    variant: 'primary',
  },
}

export const Primary: Story = {
  args: {
    children: 'Primary',
    disabled: false,
    variant: 'primary',
  },
}
export const Secondary: Story = {
  args: {
    children: 'Secondary',
    disabled: false,
    variant: 'secondary',
  },
}
export const Outlined: Story = {
  args: {
    children: 'Outlined',
    disabled: false,
    variant: 'outlined',
  },
}
export const Link: Story = {
  args: {
    children: 'Link',
    disabled: false,
    variant: 'link',
  },
}
