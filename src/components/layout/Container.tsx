import { cn } from '@/lib/utils';

export const Container = ({
  children,
  className,
  as = 'div',
}: {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
}) => {
  const Component = as;
  return (
    <Component className={cn(className)}>
      <div className='max-w-7xl mx-auto px-6 py-16'>{children}</div>
    </Component>
  );
};
