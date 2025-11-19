import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import '../globals.css';
import { Layout } from '@/components/layout/Layout';
import { Toaster } from '@/components/ui/atoms/Sonner';
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });

export const metadata: Metadata = {
  title: 'Pigassos - Overseas Trading Ltd',
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
        <body className={`${inter.variable} antialiased`}>
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
