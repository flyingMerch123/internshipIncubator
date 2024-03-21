import type { Meta, StoryObj } from '@storybook/react'

import { TextField } from '@/ui'

const meta = {
  argTypes: {},
  component: TextField,
  tags: ['autodocs'],
  title: 'Components/TextField',
} satisfies Meta<typeof TextField>

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    disabled: false,
    inputType: 'text',
    label: 'Title',
    placeholder: 'Placeholder',
    value: 'Input value',
  },
}

export const Text: Story = {
  args: { disabled: false, inputType: 'text', label: 'Text', placeholder: 'type some text' },
}

export const Password: Story = {
  args: {
    disabled: false,
    inputType: 'password',
    label: 'Password',
    placeholder: 'password',
    value: 'asdasdasd',
  },
}

export const Search: Story = {
  args: { disabled: false, inputType: 'search', label: 'Search', placeholder: 'search...' },
}
