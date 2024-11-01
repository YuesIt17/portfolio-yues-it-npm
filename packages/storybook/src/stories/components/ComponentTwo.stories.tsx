import type {Meta, StoryObj} from '@storybook/react';
import {ComponentTwo} from '@portfolio-yues-it-npm/ui';

const meta = {
  title: 'components',
  component: ComponentTwo,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
} as Meta<typeof ComponentTwo>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentTwoExample: Story = {};
