import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
import '../globals.css';
import { Layout } from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/atoms/Sonner';

const inter = Inter({ 
  subsets: ['latin'], 
  variable: '--font-inter',
  display: 'swap',
});

const playfair = Playfair_Display({ 
  subsets: ['latin'], 
  variable: '--font-playfair',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Pigassos - Global Tobacco Trading Excellence',
  description: 'Your trusted partner in international tobacco distribution with over 30 years of experience in African markets. Premium quality, integrity, and excellence.',
};

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <>
      <html lang={mapper[locale] || 'el-GR'}>
        <body className={`${inter.variable} ${playfair.variable} antialiased`}>
          <NextIntlClientProvider>
            <Layout>{children}</Layout>
            <Toaster />
          </NextIntlClientProvider>
        </body>
      </html>
    </>
  );
}

const mapper: Record<string, string> = {
  en: 'en',
  el: 'el-GR',
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}
