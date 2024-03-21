import type { Meta, StoryObj } from '@storybook/react'

import { TabsContainer, TabsContent, TabsItem, TabsList } from '@/ui'

const meta = {
  argTypes: {},
  component: TabsContainer,
  decorators: [
    Story => (
      <div
        style={{
          height: '25rem',
          margin: '3em',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  title: 'Navigation/Tabs',
} satisfies Meta<typeof TabsContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: (
      <div style={{ display: 'inline-block' }}>
        <TabsList>
          <TabsItem value={'tab1'}>Tab1</TabsItem>
          <TabsItem value={'tab2'}>Tab2</TabsItem>
          <TabsItem value={'tab3'}>Tab3</TabsItem>
        </TabsList>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: '2.5rem',
            fontWeight: 600,
            height: '15rem',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <TabsContent value={'tab1'}>Content 1</TabsContent>
          <TabsContent value={'tab2'}>Content 2</TabsContent>
          <TabsContent value={'tab3'}>Content 3</TabsContent>
        </div>
      </div>
    ),
    defaultValue: 'tab1',
  },
}

export const TabsWithDisabledOption: Story = {
  args: {
    children: (
      <div style={{ display: 'inline-block' }}>
        <TabsList>
          <TabsItem value={'tab1'}>Tab1</TabsItem>
          <TabsItem value={'tab2'}>Tab2</TabsItem>
          <TabsItem disabled value={'tab3'}>
            Tab3
          </TabsItem>
        </TabsList>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: '2.5rem',
            fontWeight: 600,
            height: '15rem',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <TabsContent value={'tab1'}>Content 1</TabsContent>
          <TabsContent value={'tab2'}>Content 2</TabsContent>
          <TabsContent value={'tab3'}>Content 3</TabsContent>
        </div>
      </div>
    ),
    defaultValue: 'tab1',
  },
}

export const FullWidthTabs: Story = {
  args: {
    children: (
      <div style={{ flexGrow: 1 }}>
        <TabsList fullWidth>
          <TabsItem value={'tab1'}>Tab1</TabsItem>
          <TabsItem value={'tab2'}>Tab2</TabsItem>
          <TabsItem value={'tab3'}>Tab3</TabsItem>
        </TabsList>
        <div
          style={{
            alignItems: 'center',
            display: 'flex',
            fontSize: '2.5rem',
            fontWeight: 600,
            height: '15rem',
            justifyContent: 'center',
            marginTop: '2rem',
          }}
        >
          <TabsContent value={'tab1'}>Content 1</TabsContent>
          <TabsContent value={'tab2'}>Content 2</TabsContent>
          <TabsContent value={'tab3'}>Content 3</TabsContent>
        </div>
      </div>
    ),
    defaultValue: 'tab1',
  },
}
