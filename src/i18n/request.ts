import { routing } from '@/i18n/routing';
import { hasLocale } from 'next-intl';
import { getRequestConfig } from 'next-intl/server';

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const [commonMessages, specificMessages] = await Promise.all([
    import(`../../messages/${locale}/common-${locale}.json`).then(
      (mod) => mod.default
    ),
    import(`../../messages/${locale}/meta-${locale}.json`).then(
      (mod) => mod.default
    ),
  ]);
  const messages = {
    ...commonMessages,
    ...specificMessages,
  };
  return {
    locale,
    messages,
  };
});
