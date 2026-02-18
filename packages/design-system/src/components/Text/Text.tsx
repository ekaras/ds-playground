import type { HTMLAttributes, ReactNode } from 'react';
import { text } from './Text.css';

export type TextTone = 'body' | 'subtle' | 'heading';

export type TextProps = HTMLAttributes<HTMLElement> & {
  as?: 'p' | 'span' | 'h1' | 'h2' | 'h3';
  tone?: TextTone;
  children: ReactNode;
};

/** Typography primitive that enforces DS text scales and tones. */
export function Text({ as: Tag = 'p', tone = 'body', children, ...rest }: TextProps) {
  return (
    <Tag className={text[tone]} {...rest}>
      {children}
    </Tag>
  );
}
