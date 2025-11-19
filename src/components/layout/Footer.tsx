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
import { FOOTER_NAV_ITEMS } from '@/constants/navigation';

import Link from 'next/link';
import { useTranslations } from 'next-intl';

export const Footer = () => {
  return (
    <footer>
      <Container className='bg-neutral-900 text-white'>
        <div className='flex flex-col gap-12  md:gap-16 md:flex-row'>
          <div className='flex flex-col flex-1 gap-6  md:items-start'>
            <Logo />
            <SocialMedia items={BRAND_SOCIAL_MEDIA_ITEMS} />
          </div>
          <FooterNavLinks />
          <FooterContactDetails />
        </div>
        <hr className='my-8 border-white/20' />
        <FooterBottomSection />
      </Container>
    </footer>
  );
};

const FooterNavLinks = () => {
  const t = useTranslations();
  return (
    <nav className='flex flex-1 flex-col-reverse gap-12 md:flex-row md:gap-8 '>
      <ul>
        {FOOTER_NAV_ITEMS.map((category) => (
          <li key={category.id ?? 'category'}>
            {category.id && (
              <Typography variant={'subtitle'} as={'span'}>
                {t(`footer.${category.id}`)}
              </Typography>
            )}
            <ul className='flex flex-col gap-3 mt-4'>
              {category.items.map((item) => (
                <li key={item.id}>
                  <Link href={item.href}>{t(`navigation.${item.id}`)}</Link>
                </li>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </nav>
  );
};

const FooterContactDetails = () => {
  const t = useTranslations();
  return (
    <div className='flex flex-col gap-4'>
      <Typography variant={'subtitle'} as='span'>
        {t('footer.contact')}
      </Typography>
      <Typography variant={'bodyMRegular'}>
        {t('footer.email')}:{' '}
        <Link href={`mailto:${BRAND_EMAIL}`}>
          {' '}
          <Typography variant={'linkMRegular'}>{BRAND_EMAIL}</Typography>
        </Link>
      </Typography>
      <Typography variant={'bodyMRegular'}>
        {t('footer.phone')}:{' '}
        {Array.isArray(BRAND_PHONE) ? (
          BRAND_PHONE.map((phone, idx) => (
            <span key={phone}>
              <Link href={`tel:${phone}`}>
                <Typography variant={'linkMRegular'}>{phone}</Typography>
              </Link>
              {idx < BRAND_PHONE.length - 1 && ' | '}
            </span>
          ))
        ) : (
          <Link href={`tel:${BRAND_PHONE}`}>
            <Typography variant={'linkMRegular'}>{BRAND_PHONE}</Typography>
          </Link>
        )}
      </Typography>
      {BRAND_ADDRESS.map((line) => (
        <Typography key={line.id} variant={'bodyMRegular'}>
          {t(`footer.${line.id}`)}:{' '}
          <Link href={line.link}>
            <Typography variant={'linkMRegular'}>
              {t(`contact.${line.id}`)}
            </Typography>
          </Link>
        </Typography>
      ))}
    </div>
  );
};

const FooterBottomSection = () => {
  return (
    <div className='justify-between flex flex-col gap-4 md:flex-row md:flex mx-auto'>
      <Typography variant={'bodySRegular'} className='text-white/70'>
        &copy; {new Date().getFullYear()} {BRAND_NAME}. All rights reserved.
      </Typography>
      <Typography variant={'bodySRegular'} className='text-white/70'>
        Built with ❤️ by{' '}
        <Link href='https://www.orbitalstudio.gr'>Orbital</Link>
      </Typography>
    </div>
  );
};
