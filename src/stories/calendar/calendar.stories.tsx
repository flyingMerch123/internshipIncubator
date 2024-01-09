import { PropsWithChildren } from 'react'

import type { Meta, StoryObj } from '@storybook/react'

import { CalendarProps, Calendar } from '../../components'

const meta: Meta<PropsWithChildren<CalendarProps>> = {
  title: 'Components/Calendar',
  component: Calendar,
  tags: ['autodocs'],
  args: {
    isRange: false,
  },
  decorators: [
    Story => (
      <div style={{ height: '50em' }}>
        <Story />
      </div>
    ),
  ],
  argTypes: {},
} as Meta

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    isRange: false,
  },
}

export const Range: Story = {
  args: {
    isRange: true,
  },
}
