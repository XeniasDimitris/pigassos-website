import { cn } from '@/lib/utils';

export default function Frame({
  children,
  orientation = 'horizontal',
  className,
}: {
  children: React.ReactNode;
  orientation?: 'horizontal' | 'vertical';
  className?: string;
}) {
  return (
    <div
      className={cn(
        `flex ${orientation === 'vertical' ? 'flex-col' : 'flex-row'}`,
        className
      )}
    >
      {children}
    </div>
  );
}
