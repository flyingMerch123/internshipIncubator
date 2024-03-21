import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { LinkConfirmed } from '@/modules'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: LinkConfirmed,
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
  title: 'Auth/LinkConfirmed',
} satisfies Meta<typeof LinkConfirmed>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
}
