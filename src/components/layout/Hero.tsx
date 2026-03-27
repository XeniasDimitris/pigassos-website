'use client';

import React from 'react';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';
import { Typography } from '@/components/ui/atoms/Typography';
import { Button } from '@/components/ui/atoms/Button';
import { ArrowDown } from 'lucide-react';
import { useTranslations } from 'next-intl';
import { Link } from '@/i18n/navigation';

interface HeroProps {
  image: string;
  className?: string;
  children?: React.ReactNode;
  opacity?: 'md' | 'lg' | 'sm' | null;
  showContent?: boolean;
}

export const Hero: React.FC<HeroProps> = ({
  image,
  className,
  children,
  opacity = 'md',
  showContent = true,
}) => {
  const t = useTranslations();

  return (
    <section
      className={cn(
        'relative flex items-center justify-center min-h-[90vh] w-full overflow-hidden',
        className
      )}
    >
      {/* Background Image */}
      <div
        className='absolute inset-0 z-0 bg-cover bg-center scale-105'
        style={{ backgroundImage: `url(${image})` }}
        aria-hidden='true'
      />

      {/* Overlay */}
      <div
        className={cn(
          'absolute inset-0 z-[1]',
          opacity === 'md' && 'bg-black/50',
          opacity === 'lg' && 'bg-black/60',
          opacity === 'sm' && 'bg-black/30',
          opacity === null && 'bg-transparent'
        )}
        aria-hidden='true'
      />

      {/* Content */}
      <div className='relative z-10 flex flex-col items-center justify-center w-full h-full px-6 py-24 text-center max-w-5xl mx-auto'>
        {showContent ? (
          <>
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: 'easeOut' }}
              className='mb-6'
            >
              <span className='inline-block px-4 py-2 text-sm font-medium tracking-wider text-white/80 uppercase border border-white/30 rounded-full backdrop-blur-sm'>
                {t('hero.tagline')}
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
              className='text-4xl md:text-6xl lg:text-7xl font-bold text-white leading-tight tracking-tight font-[var(--font-playfair)] text-balance'
            >
              {t('hero.title')}
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
              className='mt-6 text-lg md:text-xl text-white/80 max-w-2xl leading-relaxed'
            >
              {t('hero.subtitle')}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6, ease: 'easeOut' }}
              className='mt-10 flex flex-col sm:flex-row gap-4'
            >
              <Button
                asChild
                size='lg'
                className='bg-white text-foreground hover:bg-white/90 px-8 py-6 text-base font-medium rounded-full'
              >
                <Link href='#contact'>{t('hero.cta')}</Link>
              </Button>
              <Button
                asChild
                variant='outline'
                size='lg'
                className='border-white/50 text-white hover:bg-white/10 px-8 py-6 text-base font-medium rounded-full bg-transparent'
              >
                <Link href='#about-us'>{t('hero.learnMore')}</Link>
              </Button>
            </motion.div>
          </>
        ) : (
          children
        )}
      </div>

      {/* Scroll indicator */}
      {showContent && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1 }}
          className='absolute bottom-8 left-1/2 -translate-x-1/2 z-10'
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            className='flex flex-col items-center gap-2 text-white/60'
          >
            <span className='text-xs uppercase tracking-widest'>Scroll</span>
            <ArrowDown className='w-4 h-4' />
          </motion.div>
        </motion.div>
      )}
    </section>
  );
};
