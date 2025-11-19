import { AspectRatio } from '@/components/ui/atoms/AspectRatio';
import { cn } from '@/lib/utils';
import Image from 'next/image';

const TextWithImage = ({
  imageSrc,
  imageAlt,
  children,
  imageClassName,
  type = 'ltr',
}: {
  imageSrc: string;
  imageAlt: string;
  children?: React.ReactNode;
  imageClassName?: string;
  type?: 'ltr' | 'rtl';
}) => {
  return (
    <div
      className={`flex flex-col lg:flex-row gap-16 ${
        type === 'ltr' ? '' : 'lg:flex-row-reverse'
      }`}
    >
      <div className='flex-1 gap-4 flex flex-col '>{children}</div>
      <div className='flex-1 flex items-start justify-center max-w-[400px]'>
        <AspectRatio ratio={4 / 3}>
          <Image src={imageSrc} alt={imageAlt} fill className='object-cover' />
        </AspectRatio>
      </div>
    </div>
  );
};
export default TextWithImage;
