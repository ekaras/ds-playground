
import React from 'react';
import { badge } from './Badge.css';

interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return (
    <span className={badge}>
      {label}
    </span>
  );
};
