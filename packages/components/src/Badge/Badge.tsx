import React from 'react';
import { BadgeProps } from './Badge.types';
import * as styles from './Badge.css';

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className={styles.badge}>
      <span className={styles.label}>{label}</span>
    </span>
  );
};
