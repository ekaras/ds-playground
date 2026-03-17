import type { HTMLAttributes } from 'react';
import {
  badge,
  badgeSuccess,
  badgeError
} from './Badge.css';

export type BadgeVariant = 'neutral' | 'success' | 'error';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  variant?: BadgeVariant;
};

/** Badge component for displaying status labels and categorical tags. */
export function Badge({ variant = 'neutral', children, ...props }: BadgeProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = badgeSuccess;
  } else if (variant === 'error') {
    variantClass = badgeError;
  }
  return (
    <span className={`${badge}${variantClass ? ` ${variantClass}` : ''}`} {...props}>
      {children}
    </span>
  );
}
