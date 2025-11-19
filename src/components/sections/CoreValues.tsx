import { Container } from '@/components/layout/Container';
import Frame from '@/components/layout/Frame';
import { Typography } from '@/components/ui/atoms/Typography';
import MainCard from '@/components/ui/MainCard';
import { CheckCircle } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function CoreValues() {
  const t = useTranslations();
  const coreValues = [
    {
      title: t('coreValues.values.customerCentricity.title'),
      description: t('coreValues.values.customerCentricity.description'),
    },
    {
      title: t('coreValues.values.reliability.title'),
      description: t('coreValues.values.reliability.description'),
    },
    {
      title: t('coreValues.values.professionalism.title'),
      description: t('coreValues.values.professionalism.description'),
    },
    {
      title: t('coreValues.values.safety.title'),
      description: t('coreValues.values.safety.description'),
    },
    {
      title: t('coreValues.values.luxuryAndComfort.title'),
      description: t('coreValues.values.luxuryAndComfort.description'),
    },
    {
      title: t('coreValues.values.sustainability.title'),
      description: t('coreValues.values.sustainability.description'),
    },
  ];
  return (
    <Container as='section' className='bg-primary/97 text-primary-foreground'>
      <Frame orientation='vertical' className='text-center max-w-3xl mx-auto'>
        <Typography variant='titleL' className='mb-4'>
          {t('coreValues.title')}
        </Typography>
        <Typography variant='bodyMRegular'>
          {t('coreValues.description')}
        </Typography>
      </Frame>

      <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8'>
        {coreValues.map((value, index) => (
          <MainCard
            Icon={CheckCircle}
            key={index}
            title={value.title}
            description={value.description}
          />
        ))}
      </div>
    </Container>
  );
}
