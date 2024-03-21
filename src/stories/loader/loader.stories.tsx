import { Loader } from '@/ui'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: Loader,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Loader',
} satisfies Meta<typeof Loader>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
