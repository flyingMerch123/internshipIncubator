import type { StoryObj } from '@storybook/react'

import { Typography } from '@/ui/typography/typography'

const meta = {
  component: Typography,
  tags: ['autodocs'],
  title: 'Components/Typography',
}

export default meta
type Story = StoryObj<typeof meta>

export const Large: Story = {
  args: {
    as: 'span',
    children:
      'Large Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate.',
    variant: 'large',
  },
}
export const H1: Story = {
  args: {
    as: 'h1',
    children:
      'H1 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'h1',
  },
}

export const H2: Story = {
  args: {
    as: 'h2',
    children:
      'H2 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'h2',
  },
}
export const H3: Story = {
  args: {
    as: 'h3',
    children:
      'H3 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'h3',
  },
}

export const Regular_text_16: Story = {
  args: {
    as: 'p',
    children:
      'Regular text 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'regular-16',
  },
}
export const Bold_text_16: Story = {
  args: {
    as: 'p',
    children:
      'Bold text 16 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'bold-16',
  },
}
export const Regular_text_14: Story = {
  args: {
    as: 'p',
    children:
      'Regular text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'regular-14',
  },
}

export const Medium_text_14: Story = {
  args: {
    as: 'p',
    children:
      'Medium text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'medium-14',
  },
}
export const Bold_text_14: Story = {
  args: {
    as: 'p',
    children:
      'Bold text 14 Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'bold-14',
  },
}

export const Small_text: Story = {
  args: {
    as: 'p',
    children:
      'Small text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'small',
  },
}

export const Semi_bold_small: Story = {
  args: {
    as: 'p',
    children:
      'Semi bold small text Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aspernatur consectetur corporis\n' +
      '      ipsum iste necessitatibus nemo odio quam recusandae totam, ut veniam vitae. Dicta dolore\n' +
      '      impedit libero modi quia, sunt voluptate. ',
    variant: 'semi-bold-small',
  },
}

export const Regular_link: Story = {
  args: {
    as: 'span',
    children: 'regular-link',
    variant: 'regular-link',
  },
}

export const Small_link: Story = {
  args: {
    as: 'span',
    children: 'small-link',
    variant: 'small-link',
  },
}
