import { ContactForm } from '@/components/forms/ContactForm';
import { Container } from '@/components/layout/Container';
import { Hero } from '@/components/layout/Hero';
import TextWithImage from '@/components/layout/TextWithImage';
import GoodPractices from '@/components/sections/GoodPractices';
import WhyUs from '@/components/sections/WhyUs';
import { Typography } from '@/components/ui/atoms/Typography';
import { useTranslations } from 'next-intl';

export default function Home() {
  const t = useTranslations();
  return (
    <>
      <Hero image='/image.png' opacity='md' showContent={true} />

      <Container id='about-us' className='bg-background'>
        <TextWithImage
          type='rtl'
          imageSrc='/cigarettes-hd.jpg'
          imageAlt={t('about.title')}
        >
          <div className='space-y-6'>
            <span className='inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-secondary text-muted-foreground rounded-full'>
              {t('about.tagline')}
            </span>
            <Typography variant='titleL' className='text-foreground'>
              {t('about.title')}
            </Typography>
            <Typography variant='bodyL' as='span' className='text-accent'>
              {t('about.founded')}
            </Typography>
            <Typography variant='bodyMRegular' className='text-muted-foreground leading-relaxed'>
              {t.rich('about.description', {
                br: () => (
                  <>
                    <br />
                    <br />
                  </>
                ),
              })}
            </Typography>
          </div>
        </TextWithImage>
      </Container>

      <WhyUs />
      
      <GoodPractices />

      <Container id='contact' className='bg-secondary'>
        <div className='flex flex-col items-center max-w-2xl mx-auto'>
          <span className='inline-block px-3 py-1 text-xs font-medium tracking-wider uppercase bg-background text-muted-foreground rounded-full mb-4'>
            {t('contact.tagline')}
          </span>
          <Typography variant='titleL' className='text-center text-foreground mb-4'>
            {t('contact.title')}
          </Typography>
          <Typography variant='bodyMRegular' className='text-center text-muted-foreground mb-10'>
            {t('contact.subtitle')}
          </Typography>
          <ContactForm />
        </div>
      </Container>
    </>
  );
}
