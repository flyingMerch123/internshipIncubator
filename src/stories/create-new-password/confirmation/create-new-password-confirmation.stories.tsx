import { NewPasswordConfirmationRedirection } from '@/modules/create-new-password-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: NewPasswordConfirmationRedirection,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Auth/NewPasswordConfirmation',
} satisfies Meta<typeof NewPasswordConfirmationRedirection>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
