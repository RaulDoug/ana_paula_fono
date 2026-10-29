import React from 'react';
import { clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'emerald' | 'outline' | 'ghost' | 'sand';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  target?: string;
  rel?: string;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

export const Button: React.FC<ButtonProps> = ({
  variant = 'primary',
  size = 'md',
  href,
  target,
  rel,
  icon,
  iconPosition = 'left',
  children,
  className,
  ...props
}) => {
  const baseStyles = "inline-flex items-center justify-center font-medium rounded-full transition-all duration-200 select-none active:scale-[0.98] cursor-pointer text-center";

  const sizeStyles = {
    sm: "text-xs px-3.5 py-1.5 gap-1.5",
    md: "text-sm px-5 py-2.5 gap-2 font-semibold shadow-sm",
    lg: "text-base px-6 py-3.5 gap-2.5 font-semibold shadow-md",
  };

  const variantStyles = {
    primary: "bg-[#0A3E39] text-[#FDFCF9] hover:bg-[#165E57] shadow-[0_4px_14px_rgba(10,62,57,0.25)] hover:shadow-[0_6px_20px_rgba(10,62,57,0.35)]",
    emerald: "bg-[#10B981] text-white hover:bg-[#059669] shadow-[0_4px_14px_rgba(16,185,129,0.3)] hover:shadow-[0_6px_20px_rgba(16,185,129,0.4)]",
    outline: "border border-[#0A3E39] text-[#0A3E39] bg-transparent hover:bg-[#E8F1EE]/60",
    ghost: "text-[#0A3E39] hover:bg-[#E8F1EE]/50 hover:text-[#0A3E39]",
    sand: "bg-[#F4F1EA] text-[#0A3E39] hover:bg-[#E2DDD5]/70 border border-[#E2DDD5]",
  };

  const combinedClasses = twMerge(
    clsx(
      baseStyles,
      sizeStyles[size],
      variantStyles[variant],
      className
    )
  );

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="shrink-0">{icon}</span>}
      <span>{children}</span>
      {icon && iconPosition === 'right' && <span className="shrink-0">{icon}</span>}
    </>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className={combinedClasses}>
        {content}
      </a>
    );
  }

  return (
    <button className={combinedClasses} {...props}>
      {content}
    </button>
  );
};

