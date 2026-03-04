import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess, badgeInfo } from './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
  variant?: 'neutral' | 'success' | 'info';
};

/** Small badge used to surface status or labels. */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'info') {
    variantClass = badgeInfo;
  }
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
