import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { ForgotPasswordForm } from '@/modules'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: ForgotPasswordForm,
  decorators: [
    Story => (
      <Provider store={store}>
        <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Auth/ForgotPasswordForm',
} satisfies Meta<typeof ForgotPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
