import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@acme-ds/react';

const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    variant: {
      control: { type: 'select' },
      options: ['neutral', 'success', 'error', 'warning'],
      description: 'Visual style of the badge',
      table: { defaultValue: { summary: 'neutral' } },
    },
    children: {
      control: { type: 'text' },
      description: 'Content to be displayed inside the badge',
    },
  },
};

export default meta;

type Story = StoryObj<typeof meta>;

export const Neutral: Story = {
  args: {
    children: 'Neutral',
    variant: 'neutral',
  },
};

export const Success: Story = {
  args: {
    children: 'Success',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    children: 'Error',
    variant: 'error',
  },
};

export const Warning: Story = {
  args: {
    children: 'Warning',
    variant: 'warning',
  },
};
