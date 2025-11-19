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
        src='/logo.jpg'
        alt='logo'
        width={width || 150}
        height={height || 150}
      />
    </Link>
  );
};
