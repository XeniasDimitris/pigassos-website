'use client';

import Frame from '@/components/layout/Frame';
import { Logo } from '@/components/ui/atoms/Logo';
import {
  Navbar,
  NavBody,
  NavItems,
  MobileNav,
  MobileNavHeader,
  MobileNavToggle,
  MobileNavMenu,
  MobileNavItems,
} from '@/components/ui/NavigationBar';
import { NAV_ITEMS } from '@/constants/navigation';
import { useState } from 'react';
import { Button } from '@/components/ui/atoms/Button';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const t = useTranslations();

  return (
    <Navbar>
      <NavBody>
        <Frame className='justify-between flex-1 items-center'>
          <Logo />
          <Frame className='items-center gap-2'>
            <NavItems items={NAV_ITEMS} />
            <Button
              asChild
              size='sm'
              className='ml-4 rounded-full bg-foreground text-background hover:bg-foreground/90 hidden lg:inline-flex'
            >
              <Link href='#contact'>{t('navigation.contact')}</Link>
            </Button>
          </Frame>
        </Frame>
      </NavBody>
      <MobileNav>
        <MobileNavHeader>
          <Logo />
          <MobileNavToggle
            isOpen={isMobileMenuOpen}
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          />
        </MobileNavHeader>

        <MobileNavMenu
          isOpen={isMobileMenuOpen}
          onClose={() => setIsMobileMenuOpen(false)}
        >
          <MobileNavItems
            items={NAV_ITEMS}
            onItemClick={() => setIsMobileMenuOpen(false)}
          />
          <Button
            asChild
            size='lg'
            className='w-full mt-4 rounded-full'
          >
            <Link href='#contact' onClick={() => setIsMobileMenuOpen(false)}>
              {t('navigation.contact')}
            </Link>
          </Button>
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
