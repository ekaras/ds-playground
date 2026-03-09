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
 * - **Neutral** (default): General labels without semantic meaning
 * - **Success**: Positive states or successful operations
 *
 * ## Usage
 *
 * ```tsx
 * import { Badge } from '@acme-ds/react';
 *
 * // Success badge
 * <Badge label="Active" variant="success" />
 *
 * // Neutral label
 * <Badge label="Featured" />
 * ```
 *
 * ## Design System Tokens
 *
 * Each variant uses PM3 semantic tokens for styling:
 *
 * | Variant | Background | Border | Text |
 * |---------|-----------|--------|------|
 * | Neutral | bgSurface | borderDefault | textDefault |
 * | Success | systemSuccessBg | systemSuccessBorder | systemSuccessText |
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
      options: ['neutral', 'success'],
      description:
        'Visual variant that determines the color scheme and semantic meaning',
      table: {
        type: { summary: 'neutral | success' },
        defaultValue: { summary: 'neutral' },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Badge>;

/**
 * The default badge variant with neutral styling.
 * Use for general labels without semantic meaning.
 */
export const Default: Story = {
  args: {
    label: 'Badge',
    variant: 'neutral',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default neutral badge. Uses standard background, border, and text colors.',
      },
    },
  },
};

/**
 * Neutral variant for general labels and non-semantic information.
 * Use for tags, metadata, and labels without specific meaning.
 */
export const Neutral: Story = {
  args: {
    label: 'Featured',
    variant: 'neutral',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Neutral variant with gray tones from PM3 system default tokens (bgSurface, borderDefault, textDefault). Use for general labels, tags, and metadata like "Featured", "New", or "Tag".',
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
    label: 'Success',
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
 * Example: Multiple badges together showing different statuses.
 */
export const AllVariants: Story = {
  render: () => (
    <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
      <Badge label="Neutral" variant="neutral" />
      <Badge label="Success" variant="success" />
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
          Status Labels
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Active" variant="success" />
          <Badge label="Inactive" variant="neutral" />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          General Labels
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Featured" variant="neutral" />
          <Badge label="Approved" variant="success" />
          <Badge label="New" variant="neutral" />
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
