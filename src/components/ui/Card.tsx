import React from 'react';
import { cn } from '@/lib/utils';

interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  hoverEffect?: boolean;
}

export function Card({
  children,
  hoverEffect = true,
  className,
  ...props
}: CardProps) {
  return (
    <div
      className={cn(
        'rounded-3xl border border-[#D4AF37]/25 bg-[#171410] p-6 sm:p-8 transition-all duration-300 text-white shadow-xl',
        hoverEffect && 'hover:border-[#D4AF37]/60 hover:shadow-2xl hover:shadow-[#D4AF37]/10 hover:-translate-y-1',
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
}
