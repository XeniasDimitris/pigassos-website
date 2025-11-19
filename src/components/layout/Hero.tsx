import React from 'react';
import { cn } from '@/lib/utils';

interface HeroProps {
  image: string;
  className?: string;
  children: React.ReactNode;
  opacity?: 'md' | 'lg' | 'sm';
}

export const Hero: React.FC<HeroProps> = ({
  image,
  className,
  children,
  opacity = 'md',
}) => {
  return (
    <section
      className={cn(
        'relative flex items-center justify-center min-h-[400px] w-full overflow-hidden',
        className
      )}
    >
      <div
        className='absolute inset-0 z-0 bg-cover bg-center'
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden='true'
      />
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full px-4 py-16 text-center'>
        {children}
      </div>
      <div
        className={cn(
          'absolute inset-0 z-1',
          opacity === 'md' ? 'bg-black/50' : '',
          opacity === 'lg' ? 'bg-black/60' : '',
          opacity === 'sm' ? 'bg-black/30' : ''
        )}
        aria-hidden='true'
      />
    </section>
  );
};
