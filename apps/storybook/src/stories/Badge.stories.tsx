import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@acme-ds/react';

const meta: Meta<typeof Badge> = {
  title: 'Primitives/Badge',
  component: Badge,
};

export default meta;
type Story = StoryObj<typeof Badge>;

export const Default: Story = {
  args: {
    label: 'New',
  },
};

export const Status: Story = {
  args: {
    label: 'Sale',
  },
};
