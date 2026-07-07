import { ReactNode } from 'react';
import { useReveal } from '@/hooks/useReveal';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  variant?: 'fade' | 'zoom';
  delay?: number;
  as?: 'div' | 'section';
}

export default function AnimatedSection({
  children,
  className = '',
  variant = 'fade',
  delay = 0,
  as = 'div',
}: AnimatedSectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const revealClass = variant === 'zoom' ? 'reveal-zoom' : 'reveal';
  const Tag = as as any;

  return (
    <Tag
      ref={ref}
      className={`${revealClass} ${visible ? 'reveal-visible' : ''} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  );
}
