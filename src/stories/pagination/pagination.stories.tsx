import type { Meta, StoryObj } from '@storybook/react'

import { FC, useState } from 'react'

import { Pagination, PaginationPropsType } from '@/ui/pagination'

const meta = {
  argTypes: {},
  component: Pagination,
  decorators: [
    Story => (
      <div style={{ display: 'flex', justifyContent: 'center', margin: '3em' }}>
        <Story />
      </div>
    ),
  ],
  parameters: {
    controls: {
      exclude: /(?:\b|')(currentPage|pageSize|onPageChange)(?:\b|')/g,
    },
  },
  tags: ['autodocs'],
  title: 'Components/Pagination',
} satisfies Meta<typeof Pagination>

const ControlledPagination: FC<PaginationPropsType> = ({
  currentPage,
  onPageChange,
  onPageSizeChange,
  pageSize,
  ...args
}) => {
  const [page, setPage] = useState(1)
  const [pSize, setPSize] = useState('20')

  return (
    <Pagination
      currentPage={page}
      onPageChange={setPage}
      onPageSizeChange={setPSize}
      pageSize={+pSize}
      {...args}
    />
  )
}

export default meta
type Story = StoryObj<typeof meta>
export const Default: Story = {
  args: {
    currentPage: 1,
    onPageChange: () => {},
    onPageSizeChange: () => {},
    pageSize: 20,
    siblingCount: 2,
    totalCount: 30,
  },
  render: args => <ControlledPagination {...args} />,
}
