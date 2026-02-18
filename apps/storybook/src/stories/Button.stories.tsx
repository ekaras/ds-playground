import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@acme-ds/react';

const meta: Meta<typeof Button> = {
  title: 'Primitives/Button',
  component: Button,
  args: {
    children: 'Continue'
  }
};

export default meta;

type Story = StoryObj<typeof Button>;

export const Default: Story = {};

export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  }
};
