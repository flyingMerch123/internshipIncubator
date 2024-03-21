import { Checkbox } from '@/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {
    disabled: false,
    labelTitle: 'Label Text',
  },
  component: Checkbox,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Checkbox',
} satisfies Meta<typeof Checkbox>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    labelTitle: '',
  },
}

export const WithLabel: Story = {
  args: {
    labelTitle: 'I consent',
  },
}

export const Disabled: Story = {
  args: {
    disabled: true,
    labelTitle: 'Disabled checkbox',
  },
}
