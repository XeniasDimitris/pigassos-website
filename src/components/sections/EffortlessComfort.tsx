import { Container } from '@/components/layout/Container';
import { Typography } from '@/components/ui/atoms/Typography';
import { useTranslations } from 'next-intl';
import ListOfItems from '@/components/ui/ListOfItems';
import TextWithImage from '@/components/layout/TextWithImage';

export default function EffortlessComfort() {
  const t = useTranslations('home');
  const items = [
    t('effortlessComfort.list.item1'),
    t('effortlessComfort.list.item2'),
    t('effortlessComfort.list.item3'),
    t('effortlessComfort.list.item4'),
    t('effortlessComfort.list.item5'),
  ];
  return (
    <Container className='text-white' as='section'>
      <TextWithImage
        type='ltr'
        imageSrc='/fleet-sedan.jpg'
        imageAlt={t('effortlessComfort.heading')}
      >
        <Typography variant={'titleL'}>
          {t('effortlessComfort.heading')}
        </Typography>
        <Typography variant='bodyMRegular' className='mb-6'>
          {t.rich('effortlessComfort.description', {
            airportTransfers: (chunks) => (
              <span className='text-secondary font-medium'>{chunks}</span>
            ),
            tailoredTours: (chunks) => (
              <span className='text-secondary font-medium'>{chunks}</span>
            ),
            eventTransportation: (chunks) => (
              <span className='text-secondary font-medium'>{chunks}</span>
            ),
            hourlyDisposal: (chunks) => (
              <span className='text-secondary font-medium'>{chunks}</span>
            ),
          })}
        </Typography>
        <ListOfItems items={items} />
      </TextWithImage>
    </Container>
  );
}
