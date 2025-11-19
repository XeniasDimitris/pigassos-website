import { PATHS } from '@/constants/paths';
import { SERVICES } from '@/constants/services';

export const NAV_ITEMS = [
  { id: 'home', link: PATHS.home },
  {
    id: 'services',
    items: [
      {
        id: SERVICES.TestService.id,
        link: SERVICES.TestService.link,
      },
    ],
  },
  // { id: 'fleet', link: PATHS.fleet },
  { id: 'aboutUs', link: PATHS.aboutUs },
  { id: 'contact', link: PATHS.contact },
];

export const FOOTER_NAV_ITEMS: {
  id?: string;
  items: { id: string; href: string }[];
}[] = [
  {
    id: 'quickLinks',
    items: [
      { id: 'home', href: PATHS.home },
      { id: 'aboutUs', href: PATHS.aboutUs },
      { id: 'contact', href: PATHS.contact },
    ],
  },
];
