import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface BadgeProps {
  children: React.ReactNode;
  variant?: 'sage' | 'teal' | 'emerald' | 'cream' | 'outline';
  icon?: React.ReactNode;
  className?: string;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'sage',
  icon,
  className,
}) => {
  const baseStyles = "inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold tracking-wide uppercase";

  const variantStyles = {
    sage: "bg-[#E8F1EE] text-[#0A3E39] border border-[#0A3E39]/10",
    teal: "bg-[#0A3E39] text-[#FDFCF9]",
    emerald: "bg-[#10B981]/15 text-[#059669] border border-[#10B981]/30",
    cream: "bg-white/95 text-[#0A3E39] shadow-sm border border-[#E2DDD5]/80",
    outline: "border border-[#0A3E39]/30 text-[#0A3E39] bg-transparent",
  };

  return (
    <span className={twMerge(clsx(baseStyles, variantStyles[variant], className))}>
      {icon && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
    </span>
  );
};

