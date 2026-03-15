import type { HTMLAttributes } from 'react';
import {
  badge,
  badgeSuccess,
  badgeError,
  badgeInfo,
  badgeWarning,
  badgePromotion,
} from './Badge.css';

export type BadgeVariant = 'neutral' | 'success' | 'error' | 'info' | 'warning' | 'promotion';

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
  } else if (variant === 'info') {
    variantClass = badgeInfo;
  } else if (variant === 'warning') {
    variantClass = badgeWarning;
  } else if (variant === 'promotion') {
    variantClass = badgePromotion;
  }

  return (
    <span className={`${badge}${variantClass ? ` ${variantClass}` : ''}`} {...props}>
      {children}
    </span>
  );
}
