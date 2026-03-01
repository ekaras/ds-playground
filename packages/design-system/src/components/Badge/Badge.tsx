import type { HTMLAttributes } from 'react';
import { badge, badgeSuccess } from './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
  variant?: 'neutral' | 'success';
};

/** Small badge used to surface status or labels. */
export function Badge({ label, variant = 'neutral', ...props }: BadgeProps) {
  const variantClass = variant === 'success' ? badgeSuccess : '';
  return (
    <span className={`${badge} ${variantClass}`} {...props}>
      {label}
    </span>
  );
}
