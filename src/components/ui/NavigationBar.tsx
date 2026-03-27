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
import { Menu, X } from 'lucide-react';
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from 'motion/react';
import React, { useRef, useState } from 'react';
import { useTranslations } from 'next-intl';

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
      className={cn(
        'fixed inset-x-0 top-0 z-50 w-full transition-all duration-300',
        visible ? 'bg-background/95 backdrop-blur-md shadow-sm border-b border-border' : 'bg-transparent',
        className
      )}
    >
      <motion.div ref={ref}>
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
      className={cn(
        'relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start px-6 py-4 lg:flex transition-colors duration-300',
        visible ? 'text-foreground' : 'text-white',
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
      <NavigationMenuList className='gap-1'>
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
                    'bg-transparent hover:bg-foreground/10 data-[state=open]:bg-foreground/10 rounded-full px-4 py-2 text-sm font-medium transition-colors',
                    hasActiveSubItem && 'bg-foreground/10'
                  )}
                >
                  {t(item.id)}
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <ul className='w-[200px] gap-2 p-2'>
                    {item.items.map((subItem, subIdx) => {
                      const isSubItemActive = pathname === subItem.link;
                      return (
                        <li key={`sub-item-${subIdx}`} className='list-none'>
                          <NavigationMenuLink asChild active={isSubItemActive}>
                            <Link
                              href={subItem.link}
                              className='block px-3 py-2 rounded-lg hover:bg-secondary transition-colors text-sm'
                            >
                              {t(subItem.id)}
                            </Link>
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
                    'inline-flex h-9 w-max items-center justify-center rounded-full px-4 py-2 text-sm font-medium hover:bg-foreground/10 transition-colors',
                    isActive && 'bg-foreground/10'
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
      className={cn(
        'relative z-50 mx-auto flex w-full flex-col items-center justify-between px-4 py-4 lg:hidden transition-colors duration-300',
        visible ? 'text-foreground' : 'text-white',
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
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
          className={cn(
            'absolute inset-x-4 top-20 z-50 flex w-[calc(100%-2rem)] flex-col items-start justify-start gap-4 rounded-2xl bg-card p-6 shadow-xl border border-border',
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
    <div className='w-full space-y-2'>
      {items.map((item, index) => {
        const isActive = pathname === item.link;
        const hasActiveSubItem = item.items?.some(
          (subItem) => pathname === subItem.link
        );

        if (item.items && item.items.length > 0) {
          return (
            <Accordion
              key={`mobile-accordion-${index}`}
              type='single'
              collapsible
              className='w-full'
            >
              <AccordionItem value={`item-${index}`} className='border-none'>
                <AccordionTrigger
                  className={cn(
                    'py-2 px-3 justify-between font-medium hover:no-underline rounded-lg hover:bg-secondary transition-colors text-foreground',
                    hasActiveSubItem && 'bg-secondary'
                  )}
                >
                  {t(item.id)}
                </AccordionTrigger>
                <AccordionContent className='pl-4 pt-2 space-y-1'>
                  {item.items.map((subItem, subIndex) => {
                    const isSubItemActive = pathname === subItem.link;
                    return (
                      <Link
                        key={`mobile-sub-link-${index}-${subIndex}`}
                        href={subItem.link}
                        onClick={onItemClick}
                        className={cn(
                          'block px-3 py-2 rounded-lg transition-colors text-muted-foreground hover:text-foreground hover:bg-secondary',
                          isSubItemActive && 'bg-secondary text-foreground'
                        )}
                      >
                        {t(subItem.id)}
                      </Link>
                    );
                  })}
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          );
        }

        return (
          <Link
            key={`mobile-link-${index}`}
            href={item.link ?? '#'}
            onClick={onItemClick}
            className={cn(
              'block px-3 py-2 rounded-lg font-medium transition-colors text-foreground hover:bg-secondary',
              isActive && 'bg-secondary'
            )}
          >
            {t(item.id)}
          </Link>
        );
      })}
    </div>
  );
};

export const MobileNavToggle = ({
  isOpen,
  onClick,
}: {
  isOpen: boolean;
  onClick: () => void;
}) => {
  return (
    <button
      onClick={onClick}
      className='p-2 rounded-full hover:bg-foreground/10 transition-colors'
      aria-label={isOpen ? 'Close menu' : 'Open menu'}
    >
      {isOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
    </button>
  );
};
