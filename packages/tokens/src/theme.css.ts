import { createGlobalTheme } from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root', {
  color: {
    brand: '#0F4C81',
    brandHover: '#0C3C66',
    text: '#1B1F23',
    textSubtle: '#4B5563',
    background: '#FFFFFF',
    surface: '#F8FAFC',
    border: '#D0D7DE',
    danger: '#B42318',
    focus: '#1F6FEB'
  },
  font: {
    body: '"IBM Plex Sans", "Segoe UI", sans-serif',
    mono: '"IBM Plex Mono", monospace'
  },
  fontSize: {
    xs: '12px',
    sm: '14px',
    md: '16px',
    lg: '20px',
    xl: '28px'
  },
  lineHeight: {
    tight: '1.2',
    normal: '1.5',
    relaxed: '1.65'
  },
  space: {
    '0': '0',
    '1': '4px',
    '2': '8px',
    '3': '12px',
    '4': '16px',
    '5': '20px',
    '6': '24px',
    '8': '32px',
    '10': '40px'
  },
  radius: {
    sm: '6px',
    md: '10px',
    lg: '14px',
    pill: '9999px'
  },
  shadow: {
    sm: '0 1px 2px rgba(16, 24, 40, 0.08)',
    md: '0 6px 18px rgba(16, 24, 40, 0.12)'
  },
  motion: {
    fast: '120ms',
    base: '180ms'
  }
});
