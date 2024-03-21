import { LanguageSelect } from '@/components'
import meta from '@/stories/link-expired/link-expired.stories'
import { Meta, StoryObj } from '@storybook/react'

export default {
  component: LanguageSelect,
  tags: ['autodocs'],
  title: 'Components/Select',
} satisfies Meta<typeof LanguageSelect>

type Story = StoryObj<typeof meta>
export const Default: Story = { args: { email: '' } }
