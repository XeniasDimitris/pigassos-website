'use client';

import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/atoms/Typography';
import { CheckCircle, Globe, Handshake, TrendingUp, Users, Award } from 'lucide-react';
import { motion } from 'motion/react';
import { useTranslations } from 'next-intl';

const reasons = [
  {
    id: 'transparency',
    icon: Award,
    titleKey: 'whyUs.reasons.transparency.title',
    descKey: 'whyUs.reasons.transparency.desc',
  },
  {
    id: 'trackRecord',
    icon: TrendingUp,
    titleKey: 'whyUs.reasons.trackRecord.title',
    descKey: 'whyUs.reasons.trackRecord.desc',
  },
  {
    id: 'network',
    icon: Globe,
    titleKey: 'whyUs.reasons.network.title',
    descKey: 'whyUs.reasons.network.desc',
  },
  {
    id: 'cooperation',
    icon: Handshake,
    titleKey: 'whyUs.reasons.cooperation.title',
    descKey: 'whyUs.reasons.cooperation.desc',
  },
  {
    id: 'ability',
    icon: Users,
    titleKey: 'whyUs.reasons.ability.title',
    descKey: 'whyUs.reasons.ability.desc',
  },
];

export default function WhyUs() {
  const t = useTranslations();

  return (
    <Container className='bg-secondary'>
      <div className='text-center max-w-3xl mx-auto mb-16'>
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className='inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-background text-muted-foreground rounded-full mb-4'
        >
          {t('whyUs.tagline')}
        </motion.span>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          <Typography variant='titleL' className='text-foreground mb-4'>
            {t('whyUs.title')}
          </Typography>
        </motion.div>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className='text-lg text-muted-foreground'
        >
          {t('whyUs.subtitle')}
        </motion.p>
      </div>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
        {reasons.map((reason, index) => (
          <motion.div
            key={reason.id}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className='group bg-card p-8 rounded-2xl border border-border hover:border-accent/50 transition-all duration-300 hover:shadow-lg'
          >
            <div className='w-12 h-12 bg-secondary rounded-xl flex items-center justify-center mb-6 group-hover:bg-accent/10 transition-colors'>
              <reason.icon className='w-6 h-6 text-foreground group-hover:text-accent transition-colors' />
            </div>
            <Typography variant='titleS' className='text-foreground mb-3'>
              {t(reason.titleKey)}
            </Typography>
            <Typography variant='bodyMRegular' className='text-muted-foreground'>
              {t(reason.descKey)}
            </Typography>
          </motion.div>
        ))}
      </div>

      {/* Brands section */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className='mt-20 p-10 bg-card rounded-2xl border border-border'
      >
        <Typography variant='titleM' className='text-foreground mb-4'>
          {t('whyUs.brands.title')}
        </Typography>
        <Typography variant='bodyMRegular' className='text-muted-foreground leading-relaxed'>
          {t('whyUs.brands.description')}
        </Typography>
      </motion.div>
    </Container>
  );
}
