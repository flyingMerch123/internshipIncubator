import { Meta, StoryObj } from '@storybook/react'
import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { NewPasswordForm } from '@/modules/create-new-password-form'

const meta = {
  title: 'Auth/NewPasswordForm',
  component: NewPasswordForm,
  tags: ['autodocs'],
  args: {},
  decorators: [
    Story => (
      <Provider store={store}>
        <div style={{ margin: '3em', display: 'flex', justifyContent: 'center' }}>
          <Story />
        </div>
      </Provider>
    ),
  ],
  argTypes: {},
} satisfies Meta<typeof NewPasswordForm>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
