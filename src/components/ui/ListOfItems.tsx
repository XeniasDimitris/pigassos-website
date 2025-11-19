import { Typography } from '@/components/ui/atoms/Typography';
import { CheckCircle } from 'lucide-react';

export default function ListOfItems({ items }: { items: string[] }) {
  return (
    <ul className='space-y-3'>
      {items.map((item: string, index: number) => (
        <li key={index} className='flex items-center gap-3'>
          <CheckCircle className='h-5 w-5 text-secondary flex-shrink-0' />
          <Typography variant='bodyMRegular'>{item}</Typography>
        </li>
      ))}
    </ul>
  );
}
