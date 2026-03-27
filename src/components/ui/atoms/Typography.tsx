import { cn } from '@/lib/utils';
import { cva, type VariantProps } from 'class-variance-authority';
import React from 'react';

const typographyVariants = cva('', {
  variants: {
    variant: {
      display: 'text-4xl leading-tight font-bold tracking-tight md:text-5xl lg:text-6xl',
      titleL: 'text-3xl leading-tight font-bold tracking-tight md:text-4xl',
      titleM: 'text-2xl leading-tight font-semibold tracking-tight md:text-3xl',
      titleS: 'text-xl leading-tight font-semibold tracking-tight md:text-2xl',
      subtitle: 'text-lg leading-relaxed font-semibold md:text-xl',
      paragraph: 'text-base leading-relaxed font-normal md:text-lg',
      bodyLBold: 'text-lg leading-relaxed font-semibold',
      bodyL: 'text-lg leading-relaxed font-normal',
      bodyMBold: 'text-base leading-relaxed font-semibold',
      bodyMRegular: 'text-base leading-relaxed font-normal',
      bodySBold: 'text-sm leading-relaxed font-semibold',
      bodySRegular: 'text-sm leading-relaxed font-normal',
      linkMBold: 'text-base leading-relaxed font-semibold underline underline-offset-4',
      linkMRegular: 'text-base leading-relaxed font-normal underline underline-offset-4',
      linkSRegular: 'text-sm leading-relaxed font-normal underline underline-offset-4',
      microcopyBold: 'text-xs leading-normal font-semibold',
      microcopyRegular: 'text-xs leading-normal font-normal',
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
  bodyLBold: 'p',
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
