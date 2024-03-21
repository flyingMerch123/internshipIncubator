import type { Meta, StoryObj } from '@storybook/react'

import { RadioContainer, RadioItem } from '@/ui'

const meta = {
  argTypes: {},
  component: RadioContainer,
  decorators: [
    Story => (
      <div style={{ margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/RadioGroup',
} satisfies Meta<typeof RadioContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <>
        <RadioItem label={'Apple'} value={'apple'} />
        <RadioItem label={'Banana'} value={'banana'} />
        <RadioItem label={'Blueberry'} value={'blueberry'} />
      </>
    ),
    defaultValue: 'apple',
  },
}

export const DisabledRadioGroup: Story = {
  args: {
    children: (
      <>
        <RadioItem label={'Apple'} value={'apple'} />
        <RadioItem label={'Banana'} value={'banana'} />
        <RadioItem label={'Blueberry'} value={'blueberry'} />
      </>
    ),
    defaultValue: 'apple',
    disabled: true,
  },
}

export const RadioGroupWithDisabledItem: Story = {
  args: {
    children: (
      <>
        <RadioItem disabled label={'Apple'} value={'apple'} />
        <RadioItem label={'Banana'} value={'banana'} />
        <RadioItem label={'Blueberry'} value={'blueberry'} />
      </>
    ),
    defaultValue: 'banana',
  },
}
