import type { HTMLAttributes } from 'react';
import { badge } from './Badge.css';

export type BadgeProps = HTMLAttributes<HTMLSpanElement> & {
  label: string;
};

/** Small badge used to surface status or labels. */
export function Badge({ label, ...props }: BadgeProps) {
  return (
    <span className={badge} {...props}>
      {label}
    </span>
  );
}
