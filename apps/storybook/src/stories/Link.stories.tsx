import type { Meta, StoryObj } from '@storybook/react';
import { Link } from '@acme-ds/react';

/**
 * Link Component
 *
 * An interactive navigation element that guides users to different pages, sections, or external URLs.
 *
 * Links are lightweight, text-based navigation elements that support multiple semantic states
 * for different interaction patterns. Each state uses PM3 design system tokens to ensure
 * visual consistency and accessibility.
 *
 * ## Variants
 *
 * - **Default**: The normal, unvisited link state
 * - **Hover**: Visual feedback when hovering
 * - **Focus**: Keyboard focus indicator
 * - **Active**: Currently active page or section
 * - **Disabled**: Non-interactive, muted state
 *
 * ## Features
 *
 * - Optional trailing arrow icon
 * - Full keyboard navigation support
 * - Clear focus indicators for accessibility
 * - State-specific styling for user feedback
 *
 * ## Usage
 *
 * ```tsx
 * import { Link } from '@acme-ds/react';
 *
 * // Basic navigation link
 * <Link href="/about">Learn More</Link>
 *
 * // With icon hidden
 * <Link href="/home" showIcon={false}>Home</Link>
 *
 * // Active state
 * <Link href="/services" state="active">Services</Link>
 *
 * // Disabled
 * <Link disabled>Coming Soon</Link>
 * ```
 *
 * ## Design System Tokens
 *
 * The Link component uses PM3 semantic tokens for each state:
 *
 * | State | Color | Decoration | Notes |
 * |-------|-------|-----------|-------|
 * | Default | textDefault | underline | Standard link appearance |
 * | Hover | textInverse | underline | Clear visual feedback |
 * | Focus | borderFocus (outline) | underline | Keyboard accessibility |
 * | Active | actionPrimaryBg | underline | Current page indicator |
 * | Disabled | actionDisabledText | none | Non-interactive state |
 */
const meta: Meta<typeof Link> = {
  title: 'Components/Link',
  component: Link,
  tags: ['autodocs'],
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component:
          'An interactive navigation element supporting multiple semantic states for user guidance and feedback.',
      },
    },
  },
  argTypes: {
    children: {
      control: { type: 'text' },
      description: 'The text label displayed in the link',
    },
    state: {
      control: { type: 'radio' },
      options: ['default', 'hover', 'focus', 'active', 'disabled'],
      description: 'Visual state of the link',
      table: {
        type: { summary: 'default | hover | focus | active | disabled' },
        defaultValue: { summary: 'default' },
      },
    },
    showIcon: {
      control: { type: 'boolean' },
      description: 'Whether to show the trailing arrow icon',
      table: {
        defaultValue: { summary: 'true' },
      },
    },
    disabled: {
      control: { type: 'boolean' },
      description: 'Disables the link interaction',
      table: {
        defaultValue: { summary: 'false' },
      },
    },
    href: {
      control: { type: 'text' },
      description: 'The URL the link navigates to',
    },
  },
};

export default meta;
type Story = StoryObj<typeof Link>;

/**
 * The default link state for standard navigation.
 */
export const Default: Story = {
  args: {
    children: 'Learn More',
    state: 'default',
    showIcon: true,
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'The default link state with standard styling and optional trailing arrow icon.',
      },
    },
  },
};

/**
 * Hover state showing visual feedback when the user hovers over the link.
 */
export const Hover: Story = {
  args: {
    children: 'Hover Me',
    state: 'hover',
    showIcon: true,
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'Hover state with darker text color for clear visual feedback.',
      },
    },
  },
};

/**
 * Focus state showing keyboard focus indicator for accessibility.
 */
export const Focus: Story = {
  args: {
    children: 'Focused Link',
    state: 'focus',
    showIcon: true,
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'Focus state with a visible outline for keyboard navigation and accessibility.',
      },
    },
  },
};

/**
 * Active state indicating the current page or section.
 */
export const Active: Story = {
  args: {
    children: 'Current Page',
    state: 'active',
    showIcon: true,
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'Active state with primary color and increased font weight to indicate the current page.',
      },
    },
  },
};

/**
 * Disabled state for non-interactive links.
 */
export const Disabled: Story = {
  args: {
    children: 'Unavailable',
    state: 'disabled',
    showIcon: true,
    disabled: true,
  },
  parameters: {
    docs: {
      description: {
        story: 'Disabled state with muted colors and no interactivity.',
      },
    },
  },
};

/**
 * Link without the trailing arrow icon.
 */
export const WithoutIcon: Story = {
  args: {
    children: 'Simple Link',
    state: 'default',
    showIcon: false,
    href: '#',
  },
  parameters: {
    docs: {
      description: {
        story: 'A link without the trailing arrow icon for a cleaner appearance.',
      },
    },
  },
};

/**
 * Multiple links showing different states together.
 */
export const AllStates: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <Link href="#" state="default">
        Default Link
      </Link>
      <Link href="#" state="hover">
        Hover Link
      </Link>
      <Link href="#" state="focus">
        Focus Link
      </Link>
      <Link href="#" state="active">
        Active Link
      </Link>
      <Link disabled>Disabled Link</Link>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Showcase of all available link states side by side.',
      },
    },
  },
};

/**
 * Common use cases for links in navigation and content.
 */
export const UseCases: Story = {
  render: () => (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Navigation Links
        </p>
        <div style={{ display: 'flex', gap: '16px' }}>
          <Link href="/home" state="active">
            Home
          </Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
        </div>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          Inline Links
        </p>
        <p>
          Read our <Link href="/blog">blog</Link> for latest updates and{' '}
          <Link href="/resources">resources</Link>.
        </p>
      </div>
      <div>
        <p style={{ margin: '0 0 8px 0', fontSize: '12px', color: '#666' }}>
          External Links
        </p>
        <Link href="https://example.com" showIcon={true}>
          Visit External Site
        </Link>
      </div>
    </div>
  ),
  parameters: {
    docs: {
      description: {
        story: 'Common real-world use cases showing how links are used in practice.',
      },
    },
  },
};
