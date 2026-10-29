import React from 'react';
import { Badge } from '../ui/Badge';

export interface SectionHeadingProps {
  badge?: string;
  badgeIcon?: React.ReactNode;
  title: string;
  titleHighlight?: string;
  subtitle?: string;
  centered?: boolean;
  className?: string;
}

export const SectionHeading: React.FC<SectionHeadingProps> = ({
  badge,
  badgeIcon,
  title,
  titleHighlight,
  subtitle,
  centered = true,
  className = '',
}) => {
  return (
    <div
      className={`flex flex-col gap-3 ${
        centered ? 'items-center text-center mx-auto' : 'items-start text-left'
      } max-w-3xl ${className}`}
    >
      {badge && (
        <Badge variant="sage" icon={badgeIcon}>
          {badge}
        </Badge>
      )}

      <h2 className="font-serif text-3xl sm:text-4xl lg:text-[42px] leading-[1.18] text-[#0A3E39] font-semibold tracking-tight">
        {title}{' '}
        {titleHighlight && (
          <span className="italic font-normal text-[#165E57] underline decoration-[#10B981]/40 underline-offset-6">
            {titleHighlight}
          </span>
        )}
      </h2>

      {subtitle && (
        <p className="text-base sm:text-lg text-[#596567] leading-relaxed max-w-2xl">
          {subtitle}
        </p>
      )}
    </div>
  );
};

