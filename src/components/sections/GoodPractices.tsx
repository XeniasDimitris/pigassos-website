'use client';

import { Container } from '@/components/layout/Container';
import TextWithImage from '@/components/layout/TextWithImage';
import { Typography } from '@/components/ui/atoms/Typography';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';
import { Shield, FileCheck, Scale } from 'lucide-react';

const practices = [
  { id: 'excellence', icon: Shield },
  { id: 'transparency', icon: FileCheck },
  { id: 'ethics', icon: Scale },
];

export default function GoodPractices() {
  const t = useTranslations();

  return (
    <Container className='bg-background'>
      <div className='grid lg:grid-cols-2 gap-16 items-center'>
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='relative'
        >
          <div className='aspect-[4/3] rounded-2xl overflow-hidden'>
            <img
              src='/handshake.jpg'
              alt={t('goodPractices.title')}
              className='w-full h-full object-cover'
            />
          </div>
          {/* Decorative element */}
          <div className='absolute -bottom-6 -right-6 w-32 h-32 bg-accent/20 rounded-2xl -z-10' />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className='space-y-6'
        >
          <span className='inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary text-muted-foreground rounded-full'>
            {t('goodPractices.tagline')}
          </span>
          
          <Typography variant='titleL' className='text-foreground'>
            {t('goodPractices.title')}
          </Typography>

          <Typography variant='bodyMRegular' className='text-muted-foreground leading-relaxed'>
            {t('goodPractices.description1')}
          </Typography>

          <Typography variant='bodyMRegular' className='text-muted-foreground leading-relaxed'>
            {t('goodPractices.description2')}
          </Typography>

          {/* Practice highlights */}
          <div className='grid grid-cols-3 gap-4 pt-6'>
            {practices.map((practice, index) => (
              <motion.div
                key={practice.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className='text-center'
              >
                <div className='w-12 h-12 mx-auto bg-secondary rounded-xl flex items-center justify-center mb-3'>
                  <practice.icon className='w-5 h-5 text-foreground' />
                </div>
                <Typography variant='bodySBold' className='text-foreground'>
                  {t(`goodPractices.practices.${practice.id}`)}
                </Typography>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </Container>
  );
}
