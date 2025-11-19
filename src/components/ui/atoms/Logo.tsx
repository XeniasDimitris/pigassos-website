import { Link } from '@/i18n/navigation';
import Image from 'next/image';

export const Logo = ({
  width,
  height,
}: {
  width?: number;
  height?: number;
}) => {
  return (
    <Link href='/' className='relative flex items-center'>
      <Image
        src='/logo.jpeg'
        alt='logo'
        width={width || 100}
        height={height || 10}
      />
    </Link>
  );
};
