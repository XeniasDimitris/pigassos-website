import Image from 'next/image';

import { Link } from '@/i18n/navigation';
import { Typography } from '@/components/ui/atoms/Typography';
import { Button } from '@/components/ui/atoms/Button';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';

export default function BookNow() {
  const t = useTranslations();
  return (
    <Container
      as='section'
      className="relative bg-[url('/fleet-sedan.jpg')] bg-cover bg-center"
    >
      {/* Overlay */}
      <div className='absolute inset-0 bg-black/70 z-10' />
      {/* Content */}
      <div className='relative z-20 flex flex-col text-center px-4 py-20 max-w-3xl mx-auto gap-8'>
        <Typography variant='titleL'>{t('contact.block.title')}</Typography>
        <Typography variant='bodyMRegular'>
          {t('contact.block.description')}
        </Typography>
        <Link href='/contact'>
          <Button size='lg'>{t('common.contactUs')}</Button>
        </Link>
      </div>
    </Container>
  );
}
