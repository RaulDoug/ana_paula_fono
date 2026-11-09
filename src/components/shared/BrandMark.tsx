import React from 'react';

interface BrandMarkProps {
  variant?: 'dark' | 'light';
  className?: string;
}

/** Símbolo da marca, idêntico ao /favicon.svg. */
export const BrandMark: React.FC<BrandMarkProps> = ({ variant = 'dark', className = 'w-10 h-10' }) => {
  const bg = variant === 'dark' ? '#0A3E39' : '#FFFFFF';
  const stroke = variant === 'dark' ? '#E8F1EE' : '#0A3E39';
  return (
    <svg viewBox="0 0 32 32" fill="none" className={className} aria-hidden="true" focusable="false">
      <rect width="32" height="32" rx="8" fill={bg} />
      <path
        d="M16 7C12.134 7 9 10.134 9 14V17C9 18.6569 10.3431 20 12 20H13V13H11V14C11 11.2386 13.2386 9 16 9C18.7614 9 21 11.2386 21 14V20C21 21.6569 19.6569 23 18 23H15"
        stroke={stroke}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <circle cx="20" cy="16.5" r="2.5" fill="#10B981" />
    </svg>
  );
};
