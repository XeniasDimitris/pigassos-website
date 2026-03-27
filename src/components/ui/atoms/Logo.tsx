import { Link } from '@/i18n/navigation';
import Image from 'next/image';
import { cn } from '@/lib/utils';

export const Logo = ({
  width,
  height,
  variant = 'default',
}: {
  width?: number;
  height?: number;
  variant?: 'default' | 'light';
}) => {
  return (
    <Link href='/' className='relative flex items-center'>
      <Image
        src='/logo.jpg'
        alt='Pigassos Logo'
        width={width || 120}
        height={height || 40}
        className={cn(
          'object-contain',
          variant === 'light' && 'brightness-0 invert'
        )}
      />
    </Link>
  );
};
