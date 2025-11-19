import { PATHS } from '@/constants/paths';

export const NAV_ITEMS = [
  { id: 'home', link: PATHS.home },
  { id: 'aboutUs', link: PATHS.home + '#about-us' },
  { id: 'contact', link: PATHS.home + '#contact' },
];

export const FOOTER_NAV_ITEMS: {
  id?: string;
  items: { id: string; href: string }[];
}[] = [
  {
    id: 'quickLinks',
    items: [
      { id: 'home', href: PATHS.home },
      { id: 'aboutUs', href: PATHS.home + '#about-us' },
      { id: 'contact', href: PATHS.home + '#contact' },
    ],
  },
];
