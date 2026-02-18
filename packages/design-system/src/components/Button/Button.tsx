import type { ButtonHTMLAttributes } from 'react';
import { button } from './Button.css';

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement>;

/** Primary button primitive for high-emphasis actions. */
export function Button(props: ButtonProps) {
  return <button className={button} {...props} />;
}
