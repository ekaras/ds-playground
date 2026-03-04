import type { HTMLAttributes } from 'react';
import {
  toast,
  toastContent,
  toastTitle,
  toastMessage,
  toastCloseButton,
} from './Toast.css';

export type ToastProps = HTMLAttributes<HTMLDivElement> & {
  title: string;
  message: string;
  onDismiss?: () => void;
};

/** Toast notification component for displaying messages with optional dismiss. */
export function Toast({ title, message, onDismiss, ...props }: ToastProps) {
  return (
    <div className={toast} {...props}>
      <div className={toastContent}>
        <h3 className={toastTitle}>{title}</h3>
        <p className={toastMessage}>{message}</p>
      </div>
      {onDismiss && (
        <button className={toastCloseButton} onClick={onDismiss} aria-label="Dismiss toast">
          ×
        </button>
      )}
    </div>
  );
}
