import type { Meta, StoryObj } from '@storybook/react';
import { Text } from '@acme-ds/react';

const meta: Meta<typeof Text> = {
  title: 'Primitives/Text',
  component: Text,
  args: {
    children: 'Design systems make UI predictable.',
    tone: 'body'
  }
};

export default meta;

type Story = StoryObj<typeof Text>;

export const Body: Story = {};

export const Subtle: Story = {
  args: {
    tone: 'subtle',
    children: 'Supporting label and helper content.'
  }
};

export const Heading: Story = {
  args: {
    as: 'h1',
    tone: 'heading',
    children: 'Foundation First'
  }
};
