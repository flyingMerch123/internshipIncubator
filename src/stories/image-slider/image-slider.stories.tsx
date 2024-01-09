import { Meta, StoryObj } from '@storybook/react'

import { IMAGE_SLIDER_DATA } from '@/app/data/image-slider/image-slider-data'
import ImageSlider from '@/components/image-slider/image-slider'

const meta = {
  title: 'Components/ImageSlider',
  component: ImageSlider,
  tags: ['autodocs'],
  args: { images: IMAGE_SLIDER_DATA },
  parameters: {
    controls: {
      exclude: /(?:\b|')(images)(?:\b|')/g,
    },
  },
  argTypes: {
    aspectRatio: {
      options: ['1 / 1', '16 / 9', '5 / 4'],
      control: { type: 'radio' },
    },
    fitStyle: {
      options: ['contain', 'cover'],
      control: { type: 'radio' },
    },
    size: { control: 'text' },
    onClick: { action: 'clicked, id: ' },
  },
} satisfies Meta<typeof ImageSlider>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: { fitStyle: 'contain', aspectRatio: '1 / 1' },
}
