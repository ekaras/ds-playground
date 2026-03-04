import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@acme-ds/react';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['neutral', 'success', 'info'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'Badge label',
    variant: 'neutral',
  },
};

export const Success: Story = {
  args: {
    label: 'Badge label',
    variant: 'success',
  },
};

export const Info: Story = {
  args: {
    label: 'Badge label',
    variant: 'info',
  },
};
