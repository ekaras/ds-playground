import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess } from './Badge.css';

export type BadgeVariant = 'neutral' | 'success';

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
 * They support multiple variants for semantic meaning:
 *
 * - `neutral`: Default state, used for general labels
 * - `success`: Indicates a positive or successful state
 *
 * Each variant uses PM3 design system tokens for consistent color, border, and text styling.
 *
 * @example
 * ```tsx
 * <Badge label="New" variant="success" />
 * <Badge label="Featured" />
 * ```
 */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
