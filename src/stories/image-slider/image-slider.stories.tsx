import { ImageSlider } from '@/components'
import { Meta, StoryObj } from '@storybook/react'

const meta = {
  argTypes: {
    aspectRatio: {
      control: { type: 'radio' },
      options: ['1 / 1', '16 / 9', '5 / 4'],
    },
    fitStyle: {
      control: { type: 'radio' },
      options: ['contain', 'cover'],
    },
  },
  args: { images: [] },
  component: ImageSlider,
  parameters: {
    controls: {
      exclude: /(?:\b|')(images)(?:\b|')/g,
    },
  },
  tags: ['autodocs'],
  title: 'Components/ImageSlider',
} satisfies Meta<typeof ImageSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { aspectRatio: '1/1', fitStyle: 'contain' },
}
