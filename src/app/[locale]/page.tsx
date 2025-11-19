import { ContactForm } from '@/components/forms/ContactForm';
import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/layout/Hero';
import TextWithImage from '@/components/layout/TextWithImage';
import GoodPractices from '@/components/sections/GoodPractices';
import WhyUs from '@/components/sections/WhyUs';
import Divider from '@/components/ui/atoms/Divider';
import { Typography } from '@/components/ui/atoms/Typography';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Hero image='/image.png' opacity={null}>
        <></>
      </Hero>
      <Container id='about-us'>
        <TextWithImage
          type='rtl'
          imageSrc='/cigarettes-hd.jpg'
          imageAlt={t('about.title')}
        >
          <Typography variant='titleL'>{t('about.title')}</Typography>
          <Typography variant='bodyL' as='span' className='mb-4'>
            {t('about.founded')}
          </Typography>
          <Typography variant='bodyMRegular'>
            {t.rich('about.description', {
              br: () => (
                <>
                  <br />
                  <br />
                </>
              ),
            })}
          </Typography>
        </TextWithImage>
      </Container>
      <WhyUs />
      <GoodPractices />
      <div id='contact' className='flex flex-col items-center mb-40'>
        <Typography variant='titleL' className='mx-auto'>
          {t('contact.title')}
        </Typography>
        <Divider />
        <ContactForm />
      </div>
    </>
  );
}
