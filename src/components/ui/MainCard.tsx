import Frame from '@/components/layout/Frame';
import { Button } from '@/components/ui/atoms/Button';
import { Card, CardContent } from '@/components/ui/atoms/Card';
import { Typography } from '@/components/ui/atoms/Typography';
import { Link } from '@/i18n/navigation';
import { useTranslations } from 'next-intl';

export default function MainCard({
  link,
  title,
  description,
  Icon,
}: {
  link?: string;
  title: string;
  description: string;
  Icon?: React.ComponentType<React.SVGProps<SVGSVGElement>>;
}) {
  const t = useTranslations();
  return (
    <Card className='h-full dark:bg-primary dark:text-primary-foreground'>
      <CardContent className='px-5'>
        {Icon && (
          <Frame className='mb-4 bg-secondary/10 p-4 rounded-full self-start'>
            <Icon className='size-8 text-secondary' />
          </Frame>
        )}
        <Frame orientation='vertical' className='flex-1'>
          <Typography variant='titleS' className='mb-4'>
            {title}
          </Typography>
          <Typography variant={'bodyMRegular'}>{description}</Typography>
        </Frame>
        {link && (
          <Link href={link} className='mt-6'>
            <Button>{t('common.learnMore')}</Button>
          </Link>
        )}
      </CardContent>
    </Card>
  );
}
