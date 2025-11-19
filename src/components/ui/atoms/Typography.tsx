import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      display: 'text-3xl leading-3xl font-extrabold md:text-5xl md:leading-5xl',
      titleL: 'text-4xl leading-4xl font-bold',
      titleM: 'text-3xl leading-3xl font-bold',
      titleS: 'text-2xl leading-2xl font-bold',
      subtitle: 'text-[22px] leading-[30px] font-semibold',
      paragraph: 'text-xl leading-[26px] font-normal',
      bodyLBold: 'text-l leading-2xl font-bold',
      bodyL: 'text-l leading-2xl font-normal',
      bodyMBold: 'text-base leading-xl font-bold',
      bodyMRegular: 'text-base leading-xl font-normal',
      bodySBold: 'text-sm leading-xl font-bold',
      bodySRegular: 'text-sm leading-[17.5px] font-normal',
      linkMBold: 'text-base leading-xl font-bold underline',
      linkMRegular: 'text-base leading-xl font-normal underline',
      linkSRegular: 'text-sm leading-[17.5px] font-normal underline',
      microcopyBold: 'text-xs leading-[15.6px] font-bold',
      microcopyRegular: 'text-xs leading-[15.6px] font-normal',
    },
  },
  defaultVariants: {
    variant: 'paragraph',
  },
});

interface TypographyProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof typographyVariants> {
  as?: React.ElementType;
  children: React.ReactNode;
}

const variantElementMap = {
  display: 'h1',
  titleL: 'h2',
  titleM: 'h3',
  titleS: 'h4',
  subtitle: 'h5',
  paragraph: 'p',
  bodyL: 'p',
  bodyMBold: 'p',
  bodyMRegular: 'p',
  bodySBold: 'p',
  bodySRegular: 'p',
  linkMBold: 'span',
  linkMRegular: 'span',
  linkSRegular: 'span',
  microcopyBold: 'span',
  microcopyRegular: 'span',
} as const;

export const Typography = React.forwardRef<HTMLElement, TypographyProps>(
  ({ variant = 'paragraph', as, className, children, ...props }, ref) => {
    const Component =
      as ||
      variantElementMap[variant as keyof typeof variantElementMap] ||
      'span';

    return (
      <Component
        ref={ref}
        className={cn(typographyVariants({ variant }), className)}
        {...props}
      >
        {children}
      </Component>
    );
  }
);

Typography.displayName = 'Typography';
