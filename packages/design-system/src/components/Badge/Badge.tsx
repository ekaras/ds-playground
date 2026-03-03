import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess, badgeError, badgeWarning } from './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
  variant?: 'neutral' | 'success' | 'error' | 'warning';
};

/** Small badge used to surface status or labels. */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'error') {
    variantClass = badgeError;
  } else if (variant === 'warning') {
    variantClass = badgeWarning;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
