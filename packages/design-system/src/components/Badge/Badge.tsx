import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess, badgeError, badgeInfo, badgeWarning } from './Badge.css';

export type BadgeVariant = 'neutral' | 'success' | 'error' | 'info' | 'warning';

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
 * Badges are small, compact elements used to highlight information like status updates,
 * tags, or counts. They support multiple variants for semantic meaning:
 *
 * - `neutral`: Default state, used for general labels
 * - `success`: Indicates a positive or successful state
 * - `error`: Indicates a problem or error condition
 * - `info`: Provides informational context
 * - `warning`: Alerts to caution or warnings
 *
 * Each variant uses PM3 design system tokens for consistent color, border, and text styling.
 *
 * @example
 * ```tsx
 * <Badge label="New" variant="success" />
 * <Badge label="Error" variant="error" />
 * <Badge label="Draft" variant="info" />
 * ```
 */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'error') {
    variantClass = badgeError;
  } else if (variant === 'info') {
    variantClass = badgeInfo;
  } else if (variant === 'warning') {
    variantClass = badgeWarning;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
