import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/atoms/Typography';
import MainCard from '@/components/ui/MainCard';
import { SERVICES } from '@/constants/services';
import { useTranslations } from 'next-intl';

export default function Services() {
  const t = useTranslations();

  return (
    <Container as='section' className='bg-primary text-primary-foreground'>
      <Typography variant='titleL' className='mb-2 text-center'>
        {t('services.title')}
      </Typography>
      <Typography
        variant='bodyL'
        className='mb-12 text-center max-w-2xl mx-auto text-primary-foreground/70'
      >
        {t('services.description')}
      </Typography>
      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
        {Object.values(SERVICES).map((service, index) => (
          <MainCard
            key={index}
            link={service.link}
            title={t(service.title)}
            description={t(service.description)}
            Icon={service.icon}
          />
        ))}
      </div>
    </Container>
  );
}
