import type {Meta, StoryObj} from '@storybook/react';
import {ComponentOne} from '@portfolio-yues-it-npm/ui';

const meta = {
  title: 'components',
  component: ComponentOne,
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  argTypes: {
    text: {
      description: 'This props is for any text',
    },
  },
} as Meta<typeof ComponentOne>;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentOneExample: Story = {
  args: {
    text: 'Some text',
  },
};
