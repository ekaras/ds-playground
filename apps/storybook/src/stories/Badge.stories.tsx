import type { Meta, StoryObj } from '@storybook/react';
import { Badge } from '@acme-ds/react';

/**
 * Badge Component
 *
 * A small, compact component for displaying status, labels, or metadata.
 *
 * Badges surface important information using semantic color variants. Each variant
 * uses PM3 design system tokens to ensure visual consistency across the application.
 *
 * ## Variants
 *
 * - **Success** (default): Positive states or successful operations
 * - **Error**: Negative states or error conditions
 *
 * ## Usage
 *
 * ```tsx
 * import { Badge } from '@acme-ds/react';
 *
 * // Success badge
 * <Badge label="Active" variant="success" />
 *
 * // Error badge
 * <Badge label="Failed" variant="error" />
 * ```
 *
 * ## Design System Tokens
 *
 * Each variant uses PM3 semantic tokens for styling:
 *
 * | Variant | Background | Border | Text |
 * |---------|-----------|--------|------|
 * | Success | systemSuccessBg | systemSuccessBorder | systemSuccessText |
 * | Error | systemErrorBg | systemErrorBorder | systemErrorText |
 */
const meta: Meta<typeof Badge> = {
  title: 'Components/Badge',
  component: Badge,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A versatile badge component for displaying status, labels, and metadata with semantic color variants.',
      },
    },
  },
  argTypes: {
    label: {
      control: { type: 'text' },
      description: 'The text label displayed in the badge',
    },
    variant: {
      control: { type: 'radio' },
      options: ['success', 'error'],
      description:
        'Visual variant that determines the color scheme and semantic meaning',
      table: {
        type: { summary: 'success | error' },
        defaultValue: { summary: 'success' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * The default badge variant with success styling.
 * Use for positive states and successful operations.
 */
export const Default: Story = {
  args: {
    label: 'Badge',
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default success badge. Uses green tones from PM3 system success tokens.',
      },
    },
  },
};

/**
 * Success variant indicates a positive or successful state.
 * Use for completed tasks, approved items, or active states.
 */
export const Success: Story = {
  args: {
    label: 'Active',
    variant: 'success',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Success variant with green tones from PM3 system success tokens. Use for positive states like "Active", "Approved", or "Completed".',
      },
    },
  },
};

/**
 * Error variant indicates a negative or error state.
 * Use for failed operations, error conditions, or rejected items.
 */
export const Error: Story = {
  args: {
    label: 'Failed',
    variant: 'error',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Error variant with red tones from PM3 system error tokens. Use for error states like "Failed", "Rejected", or "Invalid".',
      },
    },
  },
};

/**
 * Example: Multiple badges together showing different statuses.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge label="Success" variant="success" />
      <Badge label="Error" variant="error" />
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available badge variants side by side.',
      },
    },
  },
};

/**
 * Example: Common use cases for badges.
 */
export const UseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Outcome States
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Approved" variant="success" />
          <Badge label="Rejected" variant="error" />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Operation Results
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Completed" variant="success" />
          <Badge label="Failed" variant="error" />
        </div>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story:
          'Common real-world use cases showing how badges are used in practice.',
      },
    },
  },
};
