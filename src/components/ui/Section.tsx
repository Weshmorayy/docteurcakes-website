import React from 'react';
import { Container } from './Container';
import { cn } from '@/lib/utils';

interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  id?: string;
  badge?: string;
  title?: string;
  subtitle?: string;
  centered?: boolean;
  background?: 'white' | 'dark' | 'cream' | 'card';
  containerSize?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
  children: React.ReactNode;
}

export function Section({
  id,
  badge,
  title,
  subtitle,
  centered = true,
  background = 'white',
  containerSize = 'lg',
  children,
  className,
  ...props
}: SectionProps) {
  const isDark = background === 'dark';
  const isCream = background === 'cream';

  const bgStyles = {
    white: 'bg-white text-stone-900 border-b border-stone-200/80',
    cream: 'bg-[#FAF8F5] text-stone-900 border-y border-[#D4AF37]/20',
    dark: 'bg-[#0E0C0A] text-white border-y border-[#D4AF37]/20',
    card: 'bg-[#15120E] text-white',
  };

  return (
    <section
      id={id}
      className={cn('py-16 sm:py-20 lg:py-24 relative scroll-mt-16', bgStyles[background], className)}
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
                <span
                  className={cn(
                    'inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-black uppercase tracking-wider shadow-xs',
                    isDark
                      ? 'bg-[#241C0C] text-[#F6D020] border border-[#D4AF37]/40'
                      : 'bg-[#FFF9E6] text-[#937012] border border-[#D4AF37]/50'
                  )}
                >
                  {badge}
                </span>
              </div>
            )}
            {title && (
              <h2
                className={cn(
                  'text-2xl sm:text-4xl font-black tracking-tight font-heading',
                  isDark ? 'text-white' : 'text-stone-950'
                )}
              >
                {title}
              </h2>
            )}
            {subtitle && (
              <p
                className={cn(
                  'text-sm sm:text-base font-normal leading-relaxed',
                  isDark ? 'text-stone-300' : 'text-stone-600'
                )}
              >
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
