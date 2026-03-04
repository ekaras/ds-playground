import type { Meta, StoryObj } from '@storybook/react';
import { useState } from 'react';
import { Toast } from '@acme-ds/react';

const meta: Meta<typeof Toast> = {
  title: 'Primitives/Toast',
  component: Toast,
  argTypes: {
    title: {
      control: { type: 'text' },
    },
    message: {
      control: { type: 'text' },
    },
    variant: {
      control: { type: 'radio' },
      options: ['neutral', 'success'],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Toast>;

export const Default: Story = {
  args: {
    title: 'Toast Tile',
    message: 'Message in details',
    variant: 'neutral',
    onDismiss: undefined,
  },
};

export const WithDismiss: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) {
      return <p>Toast dismissed</p>;
    }

    return (
      <Toast
        {...args}
        onDismiss={() => setIsVisible(false)}
      />
    );
  },
  args: {
    title: 'Toast Tile',
    message: 'Message in details',
    variant: 'neutral',
  },
};

export const Success: Story = {
  args: {
    title: 'Success',
    message: 'Operation completed successfully',
    variant: 'success',
    onDismiss: undefined,
  },
};

export const SuccessWithDismiss: Story = {
  render: (args) => {
    const [isVisible, setIsVisible] = useState(true);
    
    if (!isVisible) {
      return <p>Toast dismissed</p>;
    }

    return (
      <Toast
        {...args}
        onDismiss={() => setIsVisible(false)}
      />
    );
  },
  args: {
    title: 'Success',
    message: 'Operation completed successfully',
    variant: 'success',
  },
};
