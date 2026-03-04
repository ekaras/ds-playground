import type { HTMLAttributes } from 'react';
import {
  toast,
  toastSuccess,
  toastError,
  toastInfo,
  toastWarning,
  toastPromotion,
} from './Toast.css';

export type ToastVariant = 'neutral' | 'success' | 'error' | 'info' | 'warning' | 'promotion';

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  message: string;
  variant?: ToastVariant;
  onDismiss?: () => void;
};

/** Toast notification component for system feedback. */
export function Toast({ title, message, variant = 'neutral', onDismiss, ...props }: ToastProps) {
  let variantClass = '';
  if (variant === 'success') {
    variantClass = toastSuccess;
  } else if (variant === 'error') {
    variantClass = toastError;
  } else if (variant === 'info') {
    variantClass = toastInfo;
  } else if (variant === 'warning') {
    variantClass = toastWarning;
  } else if (variant === 'promotion') {
    variantClass = toastPromotion;
  }

  return (
    <div className={`${toast} ${variantClass}`} {...props}>
      <div>
        <div style={{ fontWeight: 500 }}>{title}</div>
        <div style={{ fontSize: '0.875rem', marginTop: '4px' }}>{message}</div>
      </div>
      {onDismiss && (
        <button
          onClick={onDismiss}
          style={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            fontSize: '1.25rem',
            padding: 0,
            minWidth: 'auto',
            minHeight: 'auto',
          }}
          aria-label="Close"
        >
          ×
        </button>
      )}
    </div>
  );
}
