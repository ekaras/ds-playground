import type { HTMLAttributes } from 'react';
import { badge, badgeNeutral, badgeSuccess, badgeError } from './Badge.css';

export type BadgeVariant = 'neutral' | 'success' | 'error';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** The text label displayed in the badge. */
  label: string;
  /** Visual variant that determines the color scheme and semantic meaning.
   * @default 'neutral'
   */
  variant?: BadgeVariant;
};

/**
 * Badge component for displaying status, labels, or metadata.
 *
 * Badges are small, compact elements used to highlight information like status updates or tags.
 * They support three semantic variants for different use cases:
 *
 * - `neutral`: Default state, used for general labels and non-semantic information
 * - `success`: Indicates a positive or successful state
 * - `error`: Indicates an error or problem state
 *
 * Each variant uses PM3 design system tokens for consistent color, border, and text styling.
 *
 * @example
 * ```tsx
 * <Badge label="Featured" variant="neutral" />
 * <Badge label="Active" variant="success" />
 * <Badge label="Failed" variant="error" />
 * ```
 */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'error') {
    variantClass = badgeError;
  } else if (variant === 'neutral') {
    variantClass = badgeNeutral;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
