import type { Meta, StoryObj } from '@storybook/react';
import { Input } from '@acme-ds/react';

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  args: {
    placeholder: 'Type here'
  }
};

export default meta;

type Story = StoryObj<typeof Input>;

export const Default: Story = {};

export const Error: Story = {
  args: {
    hasError: true,
    defaultValue: 'Invalid value'
  }
};

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'Disabled input'
  }
};
