import type { Meta, StoryObj } from '@storybook/react'

import { TabsContainer, TabsContent, TabsItem, TabsList } from '@/ui'

const meta = {
  title: 'Navigation/Tabs',
  component: TabsContainer,
  decorators: [
    Story => (
      <div
        style={{
          margin: '3em',
          height: '25rem',
        }}
      >
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
  argTypes: {},
} satisfies Meta<typeof TabsContainer>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    defaultValue: 'tab1',
    children: (
      <div style={{ display: 'inline-block' }}>
        <TabsList>
          <TabsItem value={'tab1'}>Tab1</TabsItem>
          <TabsItem value={'tab2'}>Tab2</TabsItem>
          <TabsItem value={'tab3'}>Tab3</TabsItem>
        </TabsList>
        <div
          style={{
            height: '15rem',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2.5rem',
            fontWeight: 600,
          }}
        >
          <TabsContent value={'tab1'}>Content 1</TabsContent>
          <TabsContent value={'tab2'}>Content 2</TabsContent>
          <TabsContent value={'tab3'}>Content 3</TabsContent>
        </div>
      </div>
    ),
  },
}

export const TabsWithDisabledOption: Story = {
  args: {
    defaultValue: 'tab1',
    children: (
      <div style={{ display: 'inline-block' }}>
        <TabsList>
          <TabsItem value={'tab1'}>Tab1</TabsItem>
          <TabsItem value={'tab2'}>Tab2</TabsItem>
          <TabsItem value={'tab3'} disabled>
            Tab3
          </TabsItem>
        </TabsList>
        <div
          style={{
            height: '15rem',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2.5rem',
            fontWeight: 600,
          }}
        >
          <TabsContent value={'tab1'}>Content 1</TabsContent>
          <TabsContent value={'tab2'}>Content 2</TabsContent>
          <TabsContent value={'tab3'}>Content 3</TabsContent>
        </div>
      </div>
    ),
  },
}

export const FullWidthTabs: Story = {
  args: {
    defaultValue: 'tab1',
    children: (
      <div style={{ flexGrow: 1 }}>
        <TabsList fullWidth>
          <TabsItem value={'tab1'}>Tab1</TabsItem>
          <TabsItem value={'tab2'}>Tab2</TabsItem>
          <TabsItem value={'tab3'}>Tab3</TabsItem>
        </TabsList>
        <div
          style={{
            height: '15rem',
            marginTop: '2rem',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            fontSize: '2.5rem',
            fontWeight: 600,
          }}
        >
          <TabsContent value={'tab1'}>Content 1</TabsContent>
          <TabsContent value={'tab2'}>Content 2</TabsContent>
          <TabsContent value={'tab3'}>Content 3</TabsContent>
        </div>
      </div>
    ),
  },
}
