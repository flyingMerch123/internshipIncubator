import type { Meta, StoryObj } from '@storybook/react'

import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { AccountImagePicker } from '@/modules'

const meta = {
  argTypes: {},
  args: {},
  component: AccountImagePicker,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Provider store={store}>
          <Story />
        </Provider>
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Modules/AccountImagePicker',
} satisfies Meta<typeof AccountImagePicker>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}
