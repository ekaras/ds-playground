import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@acme-ds/react';

const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
  },
  argTypes: {
    showIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the arrow-right icon',
      table: { defaultValue: { summary: 'true' } },
    },
    href: {
      control: { type: 'text' },
      description: 'The URL the link points to',
    },
    'aria-disabled': {
      control: { type: 'boolean' },
      description: 'Disables the link interaction',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

export const Default: Story = {
  args: {
    children: 'Label',
    href: '#',
    showIcon: true,
  },
};

export const WithoutIcon: Story = {
  args: {
    children: 'Label',
    href: '#',
    showIcon: false,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Label',
    href: '#',
    'aria-disabled': true,
  },
};

export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ margin: '0 0 4px 0', fontSize: '11px', color: '#888' }}>Default</p>
        <Link href="#">Label</Link>
      </div>
      <div>
        <p style={{ margin: '0 0 4px 0', fontSize: '11px', color: '#888' }}>Without Icon</p>
        <Link href="#" showIcon={false}>Label</Link>
      </div>
      <div>
        <p style={{ margin: '0 0 4px 0', fontSize: '11px', color: '#888' }}>Disabled</p>
        <Link href="#" aria-disabled="true">Label</Link>
      </div>
    </div>
  ),
};
