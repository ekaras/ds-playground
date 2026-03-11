import type { AnchorHTMLAttributes } from 'react';
import { link, linkFocus, linkActive, linkDisabled } from './Link.css';

export type LinkState = 'default' | 'hover' | 'focus' | 'active' | 'disabled';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  /** The text label displayed in the link. */
  children: React.ReactNode;
  /** Visual state of the link.
   * @default 'default'
   */
  state?: LinkState;
  /** Whether to show the trailing arrow icon.
   * @default true
   */
  showIcon?: boolean;
  /** Disables the link interaction */
  disabled?: boolean;
};

/**
 * Link component for navigation and clickable text.
 *
 * Links are interactive elements that navigate to a different page, section, or external URL.
 * They support multiple semantic states for different use cases:
 *
 * - `default`: The normal, unvisited link state
 * - `hover`: Visual feedback when the user hovers over the link
 * - `focus`: Keyboard focus indicator for accessibility
 * - `active`: The currently active or pressed state
 * - `disabled`: A non-interactive, muted state
 *
 * Each state uses PM3 design system tokens for consistent color, typography, and effects.
 *
 * @example
 * ```tsx
 * <Link href="/about">Learn More</Link>
 * <Link href="/external" showIcon={true}>Visit External Site</Link>
 * <Link state="active">Current Page</Link>
 * <Link disabled>Unavailable Link</Link>
 * ```
 */
export function Link({
  children,
  state = 'default',
  showIcon = true,
  disabled = false,
  ...props
}: LinkProps) {
  const stateClass = disabled
    ? linkDisabled
    : state === 'focus'
      ? linkFocus
      : state === 'active'
        ? linkActive
        : '';

  return (
    <a className={`${link} ${stateClass}`} {...(disabled ? { 'aria-disabled': true } : {})} {...props}>
      {children}
      {showIcon && !disabled && <span className="link-icon" aria-hidden="true">→</span>}
    </a>
  );
}
