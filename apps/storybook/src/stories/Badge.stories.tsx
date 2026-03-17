import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@acme-ds/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  args: {
    label: 'Badge label',
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'Text displayed inside the badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Badge>;

export const Default: Story = {};
