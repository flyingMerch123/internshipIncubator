import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { NewPasswordForm } from '@/modules/create-new-password-form'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: NewPasswordForm,
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
  title: 'Auth/NewPasswordForm',
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
