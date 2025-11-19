import { ContactForm } from '@/components/forms/ContactForm';

import { Container } from '@/components/layout/Container';
import Frame from '@/components/layout/Frame';
import { Hero } from '@/components/layout/Hero';
import { Typography } from '@/components/ui/atoms/Typography';
import ContactItem from '@/components/ui/ContactItem';
import { BRAND_ADDRESS, BRAND_EMAIL, BRAND_PHONE } from '@/constants/brand';
import { Mail, MapPin, Phone } from 'lucide-react';
import { useTranslations } from 'next-intl';

export default function ContactPage() {
  const t = useTranslations();
  return (
    <>
      <Hero image={'/van-hero.webp'} className=' text-white' opacity='lg'>
        <Frame orientation='vertical' className='text-center mt-16 lg:mt-0'>
          <Typography variant='display'>{t('contact.title')}</Typography>
        </Frame>
      </Hero>
      <Container as='section'>
        <Frame
          orientation='vertical'
          className='lg:flex-row flex-col gap-16 lg:gap-4'
        >
          <Frame orientation='vertical' className='flex-1 gap-8'>
            <ContactItem
              Icon={Phone}
              text={BRAND_PHONE[0]}
              link={`tel:${BRAND_PHONE[0].replace(/\s+/g, '')}`}
            />

            <ContactItem
              Icon={Mail}
              text={BRAND_EMAIL}
              link={`mailto:${BRAND_EMAIL}`}
            />
            <ContactItem
              Icon={MapPin}
              text={t(`contact.${BRAND_ADDRESS[0].id}`)}
              link={BRAND_ADDRESS[0].link}
            />
          </Frame>
          <ContactForm />
        </Frame>
      </Container>
    </>
  );
}
