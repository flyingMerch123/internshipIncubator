import type { Meta, StoryObj } from '@storybook/react'

import { RadioContainer, RadioItem } from '@/ui'

const meta = {
  title: 'Components/RadioGroup',
  component: RadioContainer,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof RadioContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'apple',
    children: (
      <>
        <RadioItem value={'apple'} label={'Apple'} />
        <RadioItem value={'banana'} label={'Banana'} />
        <RadioItem value={'blueberry'} label={'Blueberry'} />
      </>
    ),
  },
}

export const DisabledRadioGroup: Story = {
  args: {
    disabled: true,
    defaultValue: 'apple',
    children: (
      <>
        <RadioItem value={'apple'} label={'Apple'} />
        <RadioItem value={'banana'} label={'Banana'} />
        <RadioItem value={'blueberry'} label={'Blueberry'} />
      </>
    ),
  },
}

export const RadioGroupWithDisabledItem: Story = {
  args: {
    defaultValue: 'banana',
    children: (
      <>
        <RadioItem value={'apple'} label={'Apple'} disabled />
        <RadioItem value={'banana'} label={'Banana'} />
        <RadioItem value={'blueberry'} label={'Blueberry'} />
      </>
    ),
  },
}
