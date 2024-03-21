import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '@/app/styles/index.scss'

const preview: Preview = {
  parameters: {
    actions: {},
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    darkMode: {
      dark: { ...themes.dark, appBg: '#0D0D0D' },
      light: { ...themes.normal, appBg: '#fff' },
    },
    docs: {
      theme: themes.dark,
    },
    backgrounds: {
      default: 'dark',
      values: [
        {
          name: 'dark',
          value: '#0D0D0D',
        },
        {
          name: 'light',
          value: '#fff',
        },
      ],
    },
  },
}

export default preview
