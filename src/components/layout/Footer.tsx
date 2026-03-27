import { Container } from '@/components/layout/Container';
import { Logo } from '@/components/ui/atoms/Logo';
import { SocialMedia } from '@/components/ui/SocialMedia';
import { Typography } from '@/components/ui/atoms/Typography';
import {
  BRAND_ADDRESS,
  BRAND_EMAIL,
  BRAND_NAME,
  BRAND_PHONE,
  BRAND_SOCIAL_MEDIA_ITEMS,
} from '@/constants/brand';
import { Mail, Phone, MapPin } from 'lucide-react';
import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  return (
    <footer className='bg-foreground text-background'>
      <Container className='!py-16'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12'>
          {/* Brand column */}
          <div className='lg:col-span-2 space-y-6'>
            <Logo variant='light' />
            <Typography variant='bodyMRegular' className='text-background/70 max-w-sm'>
              Your trusted partner in global tobacco trading with over 30 years of experience in African markets.
            </Typography>
            {BRAND_SOCIAL_MEDIA_ITEMS.length > 0 && (
              <SocialMedia items={BRAND_SOCIAL_MEDIA_ITEMS} />
            )}
          </div>

          {/* Contact column */}
          <div className='space-y-6'>
            <Typography variant='subtitle' className='text-background'>
              Contact
            </Typography>
            <div className='space-y-4'>
              <a
                href={`mailto:${BRAND_EMAIL}`}
                className='flex items-center gap-3 text-background/70 hover:text-background transition-colors group'
              >
                <div className='w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors'>
                  <Mail className='w-4 h-4' />
                </div>
                <span className='text-sm'>{BRAND_EMAIL}</span>
              </a>
              {BRAND_PHONE.map((phone, idx) => (
                <a
                  key={phone}
                  href={`tel:${phone}`}
                  className='flex items-center gap-3 text-background/70 hover:text-background transition-colors group'
                >
                  <div className='w-10 h-10 rounded-full bg-background/10 flex items-center justify-center group-hover:bg-background/20 transition-colors'>
                    <Phone className='w-4 h-4' />
                  </div>
                  <span className='text-sm'>{phone}</span>
                </a>
              ))}
            </div>
          </div>

          {/* Address column */}
          <FooterAddressColumn />
        </div>

        <hr className='my-12 border-background/10' />

        <FooterBottomSection />
      </Container>
    </footer>
  );
};

const FooterAddressColumn = () => {
  const t = useTranslations();
  
  return (
    <div className='space-y-6'>
      <Typography variant='subtitle' className='text-background'>
        {t('footer.address')}
      </Typography>
      <div className='space-y-4'>
        {BRAND_ADDRESS.map((line) => (
          <div key={line.id} className='flex items-start gap-3 text-background/70'>
            <div className='w-10 h-10 rounded-full bg-background/10 flex items-center justify-center flex-shrink-0'>
              <MapPin className='w-4 h-4' />
            </div>
            <div>
              <Typography variant='bodySBold' className='text-background/90'>
                {t(`footer.${line.id}`)}
              </Typography>
              <Typography variant='bodySRegular' className='text-background/60'>
                {t(`contact.${line.id}`)}
              </Typography>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const FooterBottomSection = () => {
  return (
    <div className='flex flex-col md:flex-row justify-between items-center gap-4'>
      <Typography variant='bodySRegular' className='text-background/50'>
        {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </Typography>
      <Typography variant='bodySRegular' className='text-background/50'>
        Built with care by{' '}
        <Link
          href='https://orbitalstudio.gr'
          target='_blank'
          rel='noopener noreferrer'
          className='text-background/70 hover:text-background transition-colors underline-offset-2 hover:underline'
        >
          Orbital
        </Link>
      </Typography>
    </div>
  );
};
