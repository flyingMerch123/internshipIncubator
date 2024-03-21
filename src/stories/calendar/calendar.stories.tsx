import type { Meta, StoryObj } from '@storybook/react'

import { PropsWithChildren } from 'react'

import { Calendar, CalendarProps } from '../../components'

const meta: Meta<PropsWithChildren<CalendarProps>> = {
  argTypes: {},
  args: {
    isRange: false,
  },
  component: Calendar,
  decorators: [
    Story => (
      <div style={{ height: '50em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Calendar',
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
