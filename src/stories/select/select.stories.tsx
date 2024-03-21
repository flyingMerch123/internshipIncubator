import type { Meta } from '@storybook/react'

import { Select } from '@/ui/select/select'
import { SelectModel } from '@/ui/select/select-types'

export default {
  component: Select,
  decorators: [
    Story => (
      <div
        style={{ display: 'flex', justifyContent: 'center', listStyleType: 'none', margin: '3em' }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof Select>

const optionsPrimary = [
  {
    label: 'Apple',
    value: 'Apple',
  },
  {
    label: 'Banana',
    value: 'Banana',
  },
  {
    label: 'Blueberry',
    value: 'Blueberry',
  },
  {
    label: 'Grapes',
    value: 'Grapes',
  },
]
const optionsPagination = [
  {
    label: '1',
    value: '1',
  },
  {
    label: '2',
    value: '2',
  },
  {
    label: '3',
    value: '3',
  },
  {
    label: '4',
    value: '4',
  },
  {
    label: '100',
    value: '100',
  },
]

export const Simple = {
  args: {
    options: optionsPrimary,
  },

  render: (args: SelectModel) => {
    return (
      <div style={{ columnGap: '20px', display: 'flex' }}>
        <Select {...args} />
      </div>
    )
  },
}

export const SimpleWithLabel = {
  args: {
    label: 'Select',
    options: optionsPrimary,
    placeholder: 'select...',
  },

  render: (args: SelectModel) => {
    return (
      <div>
        <Select {...args} />
      </div>
    )
  },
}

export const Pagination = {
  args: {
    label: 'pagination',
    options: optionsPagination,
    placeholder: '1',
    variant: 'pagination',
  },

  render: (args: SelectModel) => {
    return <Select {...args} />
  },
}

export const FullWidth = {
  args: {
    options: optionsPrimary,
    variant: 'primary',
    width: '100%',
  },

  render: (args: SelectModel) => {
    return <Select {...args} />
  },
}
