import type { Meta, StoryObj } from '@storybook/react';
import { Button } from '@acme-ds/react';

/**
 * Button Component
 *
 * A versatile primary action button with a pill-shaped design.
 * Perfect for main calls-to-action, form submissions, and important application actions.
 *
 * ## Features
 *
 * - **Semantic styling:** Uses PM3 design system tokens for consistent visual hierarchy
 * - **High emphasis:** Red primary color for strong action calls
 * - **Accessible:** Full keyboard support with visible focus states
 * - **Responsive:** Works seamlessly across all screen sizes
 * - **Interactive states:** Hover, focus, and disabled states with clear feedback
 *
 * ## Usage
 *
 * ```tsx
 * import { Button } from '@acme-ds/react';
 *
 * // Basic button
 * <Button>Click me</Button>
 *
 * // Disabled state
 * <Button disabled>Loading...</Button>
 *
 * // Form submission
 * <Button type="submit">Save</Button>
 *
 * // With handler
 * <Button onClick={handleAction}>Confirm</Button>
 * ```
 *
 * ## Design System Tokens
 *
 * | State | Background Token | Text Token | Focus |
 * |-------|------------------|------------|-------|
 * | Default | actionPrimaryBg (#dc1928) | actionPrimaryText (#fafafa) | borderFocus (#3587da) |
 * | Hover | actionPrimaryBgHover (#bd1723) | actionPrimaryText (#fafafa) | — |
 * | Focus | actionPrimaryBg (#dc1928) | actionPrimaryText (#fafafa) | 3px outline |
 * | Disabled | actionDisabledBg (#eeeeee) | actionDisabledText (#a2a2b0) | none |
 *
 * ## Accessibility
 *
 * - Full keyboard navigation (Tab, Enter, Space)
 * - Visible focus indicator for keyboard users
 * - Disabled state properly communicated
 * - High contrast colors (WCAG AA compliant)
 * - Supports aria-* attributes
 */
const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'A primary action button component with pill-shaped design, semantic PM3 styling, and full accessibility support.',
      },
    },
  },
  args: {
    children: 'Continue'
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'Button label text content',
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the button and prevents user interaction',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    type: {
      control: { type: 'select' },
      options: ['button', 'submit', 'reset'],
      description: 'HTML button type attribute',
      table: {
        defaultValue: { summary: 'button' },
      },
    },
    onClick: {
      action: 'clicked',
      description: 'Click event handler',
    },
  },
};

export default meta;

type Story = StoryObj<typeof Button>;

/**
 * The default button state - ready for user interaction.
 * Use for primary actions like submitting forms, confirming actions, or triggering important workflows.
 */
export const Default: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'The default button state with red background, white text, and rounded corners. Use for primary calls-to-action.',
      },
    },
  },
};

/**
 * Hover state - visual feedback when user hovers over the button.
 * The background color darkens to provide clear visual feedback.
 */
export const Hover: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Hover state with darker red background (actionPrimaryBgHover). Demonstrates interactive feedback when users hover with mouse.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <p style={{ marginBottom: '12px', fontSize: '12px', color: '#666' }}>
        Hover over the button below:
      </p>
      <Button {...args}>Continue</Button>
    </div>
  ),
};

/**
 * Focus state - keyboard navigation indicator.
 * Shows a blue outline for users navigating with keyboard (Tab key).
 */
export const Focus: Story = {
  parameters: {
    docs: {
      description: {
        story:
          'Focus state with blue outline (borderFocus token) for keyboard users. Press Tab to see the focus indicator.',
      },
    },
  },
  render: (args) => (
    <div style={{ padding: '20px' }}>
      <p style={{ marginBottom: '12px', fontSize: '12px', color: '#666' }}>
        Press Tab to focus the button:
      </p>
      <Button {...args} autoFocus>
        Continue
      </Button>
    </div>
  ),
};

/**
 * Disabled state - button cannot be interacted with.
 * Use when an action is not available or conditions are not met.
 */
export const Disabled: Story = {
  args: {
    disabled: true,
    children: 'Disabled'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Disabled state with gray background and muted text. Button is not interactive and cursor shows "not-allowed".',
      },
    },
  },
};

/**
 * Form submission button - typical use case.
 * Type="submit" integrates with form submission workflows.
 */
export const Submit: Story = {
  args: {
    type: 'submit',
    children: 'Save Changes'
  },
  parameters: {
    docs: {
      description: {
        story:
          'Form submission button with type="submit". Integrated with standard HTML form workflows.',
      },
    },
  },
  render: (args) => (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        alert('Form submitted!');
      }}
      style={{ display: 'flex', flexDirection: 'column', gap: '12px', maxWidth: '300px' }}
    >
      <input
        type="text"
        placeholder="Enter your name"
        style={{
          padding: '8px 12px',
          border: '1px solid #e2e2e2',
          borderRadius: '4px',
          fontFamily: 'Inter, sans-serif',
        }}
      />
      <Button {...args} />
    </form>
  ),
};

/**
 * Example: Common button use cases in a row.
 */
export const UseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>
          Primary Action
        </p>
        <Button>Continue</Button>
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>
          Form Submission
        </p>
        <Button type="submit">Save Changes</Button>
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>
          With Event Handler
        </p>
        <Button onClick={() => alert('Action triggered!')}>Confirm Action</Button>
      </div>
      <div>
        <p style={{ margin: '0 0 12px 0', fontSize: '12px', color: '#666', fontWeight: 600 }}>
          Loading / Disabled
        </p>
        <Button disabled>Loading...</Button>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common real-world use cases for the Button component in practice.',
      },
    },
  },
};
