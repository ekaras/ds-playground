import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@acme-ds/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  argTypes: {
    variant: {
      control: { type: 'radio' },
      options: ['neutral', 'success', 'error', 'info', 'warning'],
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

export const Error: Story = {
  args: {
    label: 'Badge label',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    label: 'Badge label',
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    label: 'Badge label',
    variant: 'warning',
  },
};
