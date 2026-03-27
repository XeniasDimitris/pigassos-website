'use client';

import { cn } from '@/lib/utils';
import Image from 'next/image';
import { motion } from 'motion/react';

const TextWithImage = ({
  imageSrc,
  imageAlt,
  children,
  imageClassName,
  type = 'ltr',
}: {
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  imageClassName?: string;
  type?: 'ltr' | 'rtl';
}) => {
  return (
    <div
      className={cn(
        'grid lg:grid-cols-2 gap-12 lg:gap-20 items-center',
        type === 'rtl' && 'lg:[&>*:first-child]:order-2'
      )}
    >
      <motion.div
        initial={{ opacity: 0, x: type === 'ltr' ? -30 : 30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
      
      <motion.div
        initial={{ opacity: 0, x: type === 'ltr' ? 30 : -30 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className='relative'
      >
        <div className={cn(
          'aspect-[4/3] rounded-2xl overflow-hidden',
          imageClassName
        )}>
          <Image
            src={imageSrc}
            alt={imageAlt}
            fill
            className='object-cover'
          />
        </div>
        {/* Decorative element */}
        <div 
          className={cn(
            'absolute -bottom-4 w-24 h-24 bg-accent/20 rounded-2xl -z-10',
            type === 'ltr' ? '-right-4' : '-left-4'
          )} 
        />
      </motion.div>
    </div>
  );
};

export default TextWithImage;
