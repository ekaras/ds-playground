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
 * - **Error**: Error states or problems
 * - **Info**: Informational context or auxiliary data
 * - **Warning**: Cautionary states or important notices
 * - **Promo**: Promotional offers or featured content
 *
 * ## Usage
 *
 * ```tsx
 * import { Badge } from '@acme-ds/react';
 *
 * // Status badge
 * <Badge label="Active" variant="success" />
 *
 * // Error notification
 * <Badge label="Failed" variant="error" />
 *
 * // General label
 * <Badge label="New" />
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
 * | Error | systemErrorBg | systemErrorBorder | systemErrorText |
 * | Info | systemInfoBg | systemInfoBorder | systemInfoText |
 * | Warning | systemWarningBg | systemWarningBorder | systemWarningText |
 * | Promo | systemPromotionBg | systemPromotionBorder | systemPromotionText |
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
      options: ['neutral', 'success', 'error', 'info', 'warning', 'promo'],
      description:
        'Visual variant that determines the color scheme and semantic meaning',
      table: {
        type: { summary: 'neutral | success | error | info | warning | promo' },
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
 * Error variant indicates an error or problem state.
 * Use for failed operations, invalid items, or critical issues.
 */
export const Error: Story = {
  args: {
    label: 'Error',
    variant: 'error',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Error variant with red tones from PM3 system error tokens. Use for error states like "Failed", "Invalid", or "Rejected".',
      },
    },
  },
};

/**
 * Info variant provides informational context.
 * Use for auxiliary data, draft states, or general information.
 */
export const Info: Story = {
  args: {
    label: 'Info',
    variant: 'info',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Info variant with blue tones from PM3 system info tokens. Use for informational states like "Draft", "New", or "Pending".',
      },
    },
  },
};

/**
 * Warning variant alerts to caution or warnings.
 * Use for attention-requiring states or potential issues.
 */
export const Warning: Story = {
  args: {
    label: 'Warning',
    variant: 'warning',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Warning variant with orange/amber tones from PM3 system warning tokens. Use for cautionary states like "Attention", "Expiring", or "Review Required".',
      },
    },
  },
};

/**
 * Promo variant highlights promotional or special offers.
 * Use for marketing campaigns, limited offers, or featured content.
 */
export const Promo: Story = {
  args: {
    label: 'Promo',
    variant: 'promo',
  },
  parameters: {
    docs: {
      description: {
        story:
          'Promo variant with purple tones from PM3 system promotion tokens. Use for promotional states like "Special Offer", "Limited Time", "Featured", or "New Feature".',
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
      <Badge label="Error" variant="error" />
      <Badge label="Info" variant="info" />
      <Badge label="Warning" variant="warning" />
      <Badge label="Promo" variant="promo" />
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
          <Badge label="Pending" variant="info" />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Notifications
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Sent" variant="success" />
          <Badge label="Failed" variant="error" />
          <Badge label="Retry" variant="warning" />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Document States
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="Draft" variant="info" />
          <Badge label="Published" variant="success" />
          <Badge label="Archived" variant="neutral" />
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Marketing & Promotions
        </p>
        <div style={{ display: 'flex', gap: '8px' }}>
          <Badge label="New Feature" variant="promo" />
          <Badge label="Limited Time" variant="promo" />
          <Badge label="Featured" variant="promo" />
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
