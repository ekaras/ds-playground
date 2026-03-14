import React from 'react';
import { BadgeContainer } from './Badge.css';

export interface BadgeProps {
  label: string;
}

export const Badge: React.FC<BadgeProps> = ({ label }) => {
  return <BadgeContainer>{label}</BadgeContainer>;
};
