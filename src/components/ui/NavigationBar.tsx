'use client';

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from '@/components/ui/NavigationMenu';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/atoms/Accordion';
import { Link, usePathname } from '@/i18n/navigation';
import { cn } from '@/lib/utils';
import { Frame, Menu, Phone, X } from 'lucide-react';

import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';

import React, { useRef, useState } from 'react';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { Typography } from '@/components/ui/atoms/Typography';
import { BRAND_PHONE } from '@/constants/brand';
import LanguageSwitcher from '@/components/ui/LanguageSwitcher';

interface NavbarProps {
  children: React.ReactNode;
  className?: string;
}

interface NavBodyProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface NavItemsProps {
  items: {
    id: string;
    link?: string;
    items?: { id: string; link: string }[];
  }[];
  className?: string;
  onItemClick?: () => void;
}

interface MobileNavProps {
  children: React.ReactNode;
  className?: string;
  visible?: boolean;
}

interface MobileNavHeaderProps {
  children: React.ReactNode;
  className?: string;
}

interface MobileNavMenuProps {
  children: React.ReactNode;
  className?: string;
  isOpen: boolean;
  onClose: () => void;
}

export const Navbar = ({ children, className }: NavbarProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollY } = useScroll({
    target: ref,
    offset: ['start start', 'end start'],
  });
  const [visible, setVisible] = useState<boolean>(false);

  useMotionValueEvent(scrollY, 'change', (latest) => {
    if (latest > 100) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });

  return (
    <header
      className={cn('inset-x-0 top-10 z-40 w-full bg-primary', className)}
    >
      <motion.div
        ref={ref}
        // IMPORTANT: Change this to class of `fixed` if you want the navbar to be fixed
      >
        {React.Children.map(children, (child) =>
          React.isValidElement(child)
            ? React.cloneElement(
                child as React.ReactElement<{ visible?: boolean }>,
                { visible }
              )
            : child
        )}
      </motion.div>
    </header>
  );
};

export const NavBody = ({ children, className, visible }: NavBodyProps) => {
  return (
    <motion.div
      style={{
        minWidth: '800px',
      }}
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl text-white flex-row items-center justify-between self-start rounded-full px-4 py-2 lg:flex',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const NavItems = ({ items }: NavItemsProps) => {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  return (
    <NavigationMenu viewport={false}>
      <NavigationMenuList>
        {items.map((item, idx) => {
          const isActive = pathname === item.link;
          const hasActiveSubItem = item.items?.some(
            (subItem) => pathname === subItem.link
          );

          if (item.items && item.items.length > 0) {
            return (
              <NavigationMenuItem key={`nav-item-${idx}`}>
                <NavigationMenuTrigger
                  className={cn(
                    hasActiveSubItem && 'bg-accent text-accent-foreground'
                  )}
                >
                  {t(item.id)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='w-[200px] gap-4'>
                    {item.items.map((subItem, subIdx) => {
                      const isSubItemActive = pathname === subItem.link;
                      return (
                        <li key={`sub-item-${subIdx}`} className='list-none'>
                          <NavigationMenuLink asChild active={isSubItemActive}>
                            <Link href={subItem.link}>{t(subItem.id)}</Link>
                          </NavigationMenuLink>
                        </li>
                      );
                    })}
                  </ul>
                </NavigationMenuContent>
              </NavigationMenuItem>
            );
          }
          return (
            <NavigationMenuItem key={`nav-item-${idx}`}>
              <NavigationMenuLink asChild active={false}>
                <Link
                  href={item.link ?? '#'}
                  className={cn(
                    'inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-base hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground transition-colors',
                    isActive && 'bg-accent text-accent-foreground'
                  )}
                >
                  {t(item.id)}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          );
        })}
      </NavigationMenuList>
    </NavigationMenu>
  );
};

export const MobileNav = ({ children, className, visible }: MobileNavProps) => {
  return (
    <motion.div
      animate={{
        backdropFilter: visible ? 'blur(5px)' : 'none',
        boxShadow: visible
          ? '0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset'
          : 'none',
      }}
      transition={{
        type: 'spring',
        stiffness: 200,
        damping: 50,
      }}
      className={cn(
        'relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between bg-transparent px-0 py-2 lg:hidden',
        visible && 'bg-primary/90 dark:bg-neutral-950/80',
        className
      )}
    >
      {children}
    </motion.div>
  );
};

export const MobileNavHeader = ({
  children,
  className,
}: MobileNavHeaderProps) => {
  return (
    <div
      className={cn(
        'flex w-full flex-row items-center justify-between',
        className
      )}
    >
      {children}
    </div>
  );
};

export const MobileNavMenu = ({
  children,
  className,
  isOpen,
}: MobileNavMenuProps) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className={cn(
            'absolute inset-x-0 top-24 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg bg-primary px-4 py-8 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] dark:bg-neutral-950',
            className
          )}
        >
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export const MobileNavItems = ({ items, onItemClick }: NavItemsProps) => {
  const t = useTranslations('navigation');
  const pathname = usePathname();

  return (
    <>
      {items.map((item, index) => {
        const isActive = pathname === item.link;
        const hasActiveSubItem = item.items?.some(
          (subItem) => pathname === subItem.link
        );

        // If item has inner items, show an Accordion
        if (item.items && item.items.length > 0) {
          return (
            <Accordion
              key={`mobile-accordion-${index}`}
              type='single'
              collapsible
              className='w-full text-white'
            >
              <AccordionItem value={`item-${index}`} className='border-none'>
                <AccordionTrigger
                  className={cn(
                    'py-0 justify-baseline font-normal hover:no-underline',
                    hasActiveSubItem && 'bg-accent/20 rounded-md px-2'
                  )}
                >
                  {t(item.id)}
                </AccordionTrigger>
                <AccordionContent className='gap-4 pl-4 pt-4 flex flex-col'>
                  {item.items.map((subItem, subIndex) => {
                    const isSubItemActive = pathname === subItem.link;
                    return (
                      <Link
                        key={`mobile-sub-link-${index}-${subIndex}`}
                        href={subItem.link}
                        onClick={onItemClick}
                        className={cn(
                          'transition-colors',
                          isSubItemActive &&
                            'bg-accent text-accent-foreground rounded-md px-2 py-1'
                        )}
                      >
                        <span>{t(subItem.id)}</span>
                      </Link>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }

        // Else leave the link as it is
        return (
          <Link
            key={`mobile-link-${index}`}
            href={item.link ?? '#'}
            onClick={onItemClick}
            className={cn(
              'relative text-white transition-colors',
              isActive &&
                'bg-accent text-accent-foreground rounded-md px-2 py-1'
            )}
          >
            <span className='block'>{t(item.id)}</span>
          </Link>
        );
      })}
    </>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return isOpen ? (
    <X className='text-white dark:text-white' onClick={onClick} />
  ) : (
    <Menu className='text-white dark:text-white' onClick={onClick} />
  );
};

export const NavbarLogo = () => {
  return (
    <Link href='/' className='relative flex items-center'>
      <Image src='/next.svg' alt='logo' width={100} height={30} />
    </Link>
  );
};

export const TopBar = () => {
  return (
    <Frame className='justify-between flex-1 max-w-7xl mx-auto items-center text-white my-4 px-2'>
      <Frame className='items-center gap-6' orientation='horizontal'>
        <Link href={`tel:${BRAND_PHONE[0]}`}>
          <Frame
            className='items-center gap-2 underline'
            orientation='horizontal'
          >
            <Phone size={24} />
            <Typography variant={'bodyLBold'}>{BRAND_PHONE[0]}</Typography>
          </Frame>
        </Link>
        <Link href={`tel:${BRAND_PHONE[1]}`}>
          <Frame
            className='items-center gap-2 underline'
            orientation='horizontal'
          >
            <Phone size={24} />
            <Typography variant={'bodyLBold'}>{BRAND_PHONE[1]}</Typography>
          </Frame>
        </Link>
      </Frame>
      <LanguageSwitcher />
    </Frame>
  );
};
