import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/atoms/DropDownMenu';
import { Typography } from '@/components/ui/atoms/Typography';
import { useRouter, usePathname } from '@/i18n/navigation'; // custom helper

import { ChevronDown } from 'lucide-react';
import { useLocale } from 'next-intl';
import { Gb, Gr } from 'react-flags-select';

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const locale = useLocale();
  const handleChangeLanguage = (locale: string) => {
    router.replace(pathname, { locale });
  };

  return (
    <div>
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger asChild>
          <button
            aria-label='change language'
            className='flex items-center transition-colors text-sm sm:text-md font-medium uppercase tracking-wide'
          >
            <Typography variant={'bodyMRegular'}>
              {locale === 'en' ? (
                <Gb width={16} height={16} className='sm:w-5 sm:h-5' />
              ) : (
                <Gr width={16} height={16} className='sm:w-5 sm:h-5' />
              )}
            </Typography>
            <ChevronDown className='ml-1 h-3 w-3 sm:h-4 sm:w-4' />
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem asChild>
            <button
              aria-label='change language to Greek'
              onClick={() => handleChangeLanguage('el')}
              className={`block w-full text-left px-4 py-2 text-gray-950 hover:bg-gray-100 ${
                locale === 'el' ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              <Gr /> Ελληνικά
            </button>
          </DropdownMenuItem>
          <DropdownMenuItem asChild>
            <button
              aria-label='change language to English'
              onClick={() => handleChangeLanguage('en')}
              className={`block w-full text-left px-4 py-2 text-gray-950 hover:bg-gray-100 ${
                locale === 'en' ? 'bg-gray-100 font-medium' : ''
              }`}
            >
              <Gb /> English
            </button>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
