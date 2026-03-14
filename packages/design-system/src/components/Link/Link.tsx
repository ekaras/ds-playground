import type { AnchorHTMLAttributes } from 'react';
import { link, linkIcon } from './Link.css';

export type LinkProps = AnchorHTMLAttributes<HTMLAnchorElement> & {
  showIcon?: boolean;
};

export function Link({ children, showIcon = true, className, ...props }: LinkProps) {
  const isDisabled = props['aria-disabled'] === true || props['aria-disabled'] === 'true';

  return (
    <a
      className={`${link}${className ? ` ${className}` : ''}`}
      aria-disabled={isDisabled || undefined}
      tabIndex={isDisabled ? -1 : undefined}
      {...props}
    >
      {children}
      {showIcon && (
        <svg
          className={linkIcon}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          aria-hidden="true"
        >
          <path
            d="M3 8H13M9 4L13 8L9 12"
            stroke="currentColor"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      )}
    </a>
  );
}
