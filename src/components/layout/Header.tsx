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
  TopBar,
} from '@/components/ui/NavigationBar';
import { NAV_ITEMS } from '@/constants/navigation';

import { useState } from 'react';

export function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  return (
    <Navbar>
      <TopBar />
      <div className='w-full h-0.5 bg-white/50' />
      <NavBody>
        <Frame className='justify-between flex-1'>
          <Logo />
          <Frame className='items-center gap-4'>
            <NavItems items={NAV_ITEMS} />
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
        </MobileNavMenu>
      </MobileNav>
    </Navbar>
  );
}
