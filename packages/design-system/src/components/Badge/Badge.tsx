import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess, badgeError } from './Badge.css';

export type BadgeVariant = 'success' | 'error';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  /** The text label displayed in the badge. */
  label: string;
  /** Visual variant that determines the color scheme and semantic meaning.
   * @default 'success'
   */
  variant?: BadgeVariant;
};

/**
 * Badge component for displaying status, labels, or metadata.
 *
 * Badges are small, compact elements used to highlight information like status updates or tags.
 * They support two semantic variants for different use cases:
 *
 * - `success`: Indicates a positive or successful state
 * - `error`: Indicates a negative or error state
 *
 * Each variant uses PM3 design system tokens for consistent color, border, and text styling.
 *
 * @example
 * ```tsx
 * <Badge label="Active" variant="success" />
 * <Badge label="Failed" variant="error" />
 * ```
 */
export function Badge({ label, variant = 'success', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'error') {
    variantClass = badgeError;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
