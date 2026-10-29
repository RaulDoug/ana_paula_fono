import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hover?: boolean;
  variant?: 'white' | 'sand' | 'sage';
}

export const Card: React.FC<CardProps> = ({
  children,
  hover = true,
  variant = 'white',
  className,
  ...props
}) => {
  const baseStyles = "rounded-3xl border transition-all duration-300 relative overflow-hidden";

  const variantStyles = {
    white: "bg-white border-[#E2DDD5]/70 shadow-[0_4px_20px_-4px_rgba(10,62,57,0.05)]",
    sand: "bg-[#F4F1EA] border-[#E2DDD5] shadow-[0_4px_20px_-4px_rgba(10,62,57,0.04)]",
    sage: "bg-[#E8F1EE]/60 border-[#0A3E39]/10 shadow-[0_4px_20px_-4px_rgba(10,62,57,0.06)]",
  };

  const hoverStyles = hover
    ? "hover:shadow-[0_12px_32px_-6px_rgba(10,62,57,0.12)] hover:border-[#0A3E39]/25 hover:-translate-y-0.5"
    : "";

  return (
    <div
      className={twMerge(clsx(baseStyles, variantStyles[variant], hoverStyles, className))}
      {...props}
    >
      {children}
    </div>
  );
};

