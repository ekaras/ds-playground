import type { HTMLAttributes } from 'react';
import {
  toast,
  toastContent,
  toastTitle,
  toastTitleSuccess,
  toastMessage,
  toastMessageSuccess,
  toastCloseButton,
  toastCloseButtonSuccess,
  toastSuccess,
} from './Toast.css';

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  message: string;
  variant?: 'neutral' | 'success';
  onDismiss?: () => void;
};

/** Toast notification component for displaying messages with optional dismiss. */
export function Toast({ title, message, variant = 'neutral', onDismiss, ...props }: ToastProps) {
  const isSuccess = variant === 'success';
  const variantClass = isSuccess ? toastSuccess : '';
  const titleClass = isSuccess ? `${toastTitle} ${toastTitleSuccess}` : toastTitle;
  const messageClass = isSuccess ? `${toastMessage} ${toastMessageSuccess}` : toastMessage;
  const closeButtonClass = isSuccess ? `${toastCloseButton} ${toastCloseButtonSuccess}` : toastCloseButton;

  return (
    <div className={`${toast} ${variantClass}`} {...props}>
      <div className={toastContent}>
        <h3 className={titleClass}>{title}</h3>
        <p className={messageClass}>{message}</p>
      </div>
      {onDismiss && (
        <button className={closeButtonClass} onClick={onDismiss} aria-label="Dismiss toast">
          ×
        </button>
      )}
    </div>
  );
}
