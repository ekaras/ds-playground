import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess, badgeError, badgeInfo } from './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
  variant?: 'neutral' | 'success' | 'error' | 'info';
};

/** Small badge used to surface status or labels. */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'error') {
    variantClass = badgeError;
  } else if (variant === 'info') {
    variantClass = badgeInfo;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
