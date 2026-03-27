import * as React from 'react';

import { cn } from '@/lib/utils';

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot='input'
      className={cn(
        'placeholder:text-muted-foreground selection:bg-foreground selection:text-background border-border h-10 w-full min-w-0 rounded-xl border bg-card px-4 py-2 text-base transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50',
        'focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20',
        'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
        className
      )}
      {...props}
    />
  );
}

export { Input };
