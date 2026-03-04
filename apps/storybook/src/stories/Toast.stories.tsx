import type { Meta, StoryObj } from '@storybook/react';
import { Toast } from '@acme-ds/react';

const meta = {
  title: 'Components/Toast',
  component: Toast,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Toast>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Success: Story = {
  args: {
    title: 'Success',
    message: 'Your changes have been saved successfully.',
    variant: 'success',
  },
};

export const Error: Story = {
  args: {
    title: 'Error',
    message: 'Something went wrong. Please try again.',
    variant: 'error',
  },
};

export const Info: Story = {
  args: {
    title: 'Info',
    message: 'This is an informational message.',
    variant: 'info',
  },
};

export const Warning: Story = {
  args: {
    title: 'Warning',
    message: 'Please review this important notice.',
    variant: 'warning',
  },
};

export const Promotion: Story = {
  args: {
    title: 'Promotion',
    message: 'Check out our new features!',
    variant: 'promotion',
  },
};

export const WithDismiss: Story = {
  args: {
    title: 'Dismissible Toast',
    message: 'Click the × button to close this toast.',
    variant: 'success',
    onDismiss: () => alert('Toast dismissed!'),
  },
};

export const Neutral: Story = {
  args: {
    title: 'Neutral',
    message: 'A neutral toast notification.',
    variant: 'neutral',
  },
};
