import Frame from '@/components/layout/Frame';
import { Typography } from '@/components/ui/atoms/Typography';

export default function ContactItem({
  Icon,
  link,
  text,
}: {
  Icon: React.ComponentType<React.SVGProps<SVGSVGElement>>;
  link?: string;
  text: string;
}) {
  if (link) {
    return (
      <a href={link}>
        <Frame className='flex-1 gap-6 items-center border-b-[1px] border-secondary/40 pb-4'>
          <Frame className='bg-secondary/10 p-4 rounded-full self-start'>
            <Icon className='size-6 text-secondary' />
          </Frame>
          <Typography variant={'bodyL'}>{text}</Typography>
        </Frame>
      </a>
    );
  }

  return (
    <Frame className='flex-1 gap-6 items-center border-b-[1px] border-secondary/40 pb-4'>
      <Frame className='bg-secondary/10 p-4 rounded-full self-start'>
        <Icon className='size-8 text-secondary' />
      </Frame>
      <Typography variant={'bodyL'}>{text}</Typography>
    </Frame>
  );
}
