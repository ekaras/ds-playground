import clsx from 'clsx';
import type { InputHTMLAttributes } from 'react';
import { input, inputError } from './Input.css';

export type InputProps = InputHTMLAttributes<HTMLInputElement> & {
  hasError?: boolean;
};

/** Text input primitive with optional error state. */
export function Input({ hasError = false, ...props }: InputProps) {
  return <input className={clsx(input, hasError && inputError)} {...props} />;
}
