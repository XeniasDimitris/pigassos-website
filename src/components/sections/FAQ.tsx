import { Typography } from '@/components/ui/atoms/Typography';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/atoms/Accordion';
import { useTranslations } from 'next-intl';
import { Container } from '@/components/layout/Container';
import Divider from '@/components/ui/atoms/Divider';

export default function FAQ() {
  const t = useTranslations();
  const FAQS = [
    {
      question: t('FAQ.questions.item1.question'),
      answer: t('FAQ.questions.item1.answer'),
    },
    {
      question: t('FAQ.questions.item2.question'),
      answer: t('FAQ.questions.item2.answer'),
    },
    {
      question: t('FAQ.questions.item3.question'),
      answer: t('FAQ.questions.item3.answer'),
    },
    {
      question: t('FAQ.questions.item4.question'),
      answer: t('FAQ.questions.item4.answer'),
    },
    {
      question: t('FAQ.questions.item5.question'),
      answer: t('FAQ.questions.item5.answer'),
    },
    {
      question: t('FAQ.questions.item6.question'),
      answer: t('FAQ.questions.item6.answer'),
    },
  ];
  return (
    <Container as='section' className='bg-neutral-50'>
      <Typography variant='titleL' className='text-center'>
        {t('FAQ.title')}
      </Typography>
      <Divider />

      <Accordion type='single' collapsible className='mt-2'>
        {FAQS.map((faq, idx) => (
          <AccordionItem key={idx} value={String(idx)}>
            <AccordionTrigger>
              <Typography variant='subtitle' as='p'>
                {faq.question}
              </Typography>
            </AccordionTrigger>
            <AccordionContent>
              <Typography variant='bodyMRegular'>{faq.answer}</Typography>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </Container>
  );
}
