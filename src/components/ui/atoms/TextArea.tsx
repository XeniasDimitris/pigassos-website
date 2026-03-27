import * as React from 'react';

import { cn } from '@/lib/utils';

export type TextareaProps = React.TextareaHTMLAttributes<HTMLTextAreaElement>;

const Textarea = React.forwardRef<HTMLTextAreaElement, TextareaProps>(
  ({ className, ...props }, ref) => {
    return (
      <textarea
        className={cn(
          'placeholder:text-muted-foreground selection:bg-foreground selection:text-background border-border min-h-[120px] w-full min-w-0 rounded-xl border bg-card px-4 py-3 text-base transition-all duration-200 outline-none disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 resize-none',
          'focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20',
          'aria-invalid:ring-destructive/20 aria-invalid:border-destructive',
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Textarea.displayName = 'Textarea';

export { Textarea };
