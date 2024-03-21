import { Provider } from 'react-redux'

import { store } from '@/app/store/store'
import { Header } from '@/modules'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {},
  args: {},
  component: Header,
  decorators: [
    Story => (
      <Provider store={store}>
        <Story />
      </Provider>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Header',
} satisfies Meta<typeof Header>

export default meta
type Story = StoryObj<typeof meta>

export const Authenticated: Story = {
  args: {
    isAuthed: true,
  },
}

export const NonAuthenticated: Story = {
  args: {
    isAuthed: false,
  },
}
