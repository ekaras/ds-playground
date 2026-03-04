import type { HTMLAttributes } from 'react';
import {
  toast,
  toastContent,
  toastTitle,
  toastMessage,
  toastCloseButton,
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

/** Toast notification component for system feedback. Displays a dismissible message with semantic color variants. */
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
    <div className={`${toast} ${variantClass}`} role="alert" {...props}>
      <div className={toastContent}>
        <div className={toastTitle}>{title}</div>
        <div className={toastMessage}>{message}</div>
      </div>
      {onDismiss && (
        <button
          className={toastCloseButton}
          onClick={onDismiss}
          aria-label="Close notification"
          type="button"
        >
          ×
        </button>
      )}
    </div>
  );
}
