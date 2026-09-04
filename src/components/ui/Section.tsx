import React from 'react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  background?: 'default' | 'subtle' | 'card';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

export function Section({
  id,
  badge,
  title,
  subtitle,
  centered = true,
  background = 'default',
  containerSize = 'lg',
  children,
  className,
  ...props
}: SectionProps) {
  const bgStyles = {
    default: 'bg-[#0C0A09]',
    subtle: 'bg-[#14110E] border-y border-[#D4AF37]/15',
    card: 'bg-[#1A1612]',
  };

  return (
    <section
      id={id}
      className={cn('py-16 sm:py-20 lg:py-24 relative scroll-mt-16 text-white', bgStyles[background], className)}
      {...props}
    >
      <Container size={containerSize}>
        {(badge || title || subtitle) && (
          <div
            className={cn(
              'mb-12 sm:mb-16 space-y-3 max-w-3xl',
              centered && 'mx-auto text-center'
            )}
          >
            {badge && (
              <div>
                <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-[#261B01] text-[#F6D020] border border-[#D4AF37]/40 shadow-sm">
                  {badge}
                </span>
              </div>
            )}
            {title && (
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-white font-heading">
                {title}
              </h2>
            )}
            {subtitle && (
              <p className="text-sm sm:text-base font-normal leading-relaxed text-stone-300">
                {subtitle}
              </p>
            )}
          </div>
        )}
        {children}
      </Container>
    </section>
  );
}
