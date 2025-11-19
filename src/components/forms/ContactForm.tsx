'use client';
import { Button } from '@/components/ui/atoms/Button';
import { Card, CardContent } from '@/components/ui/atoms/Card';
import { Input } from '@/components/ui/atoms/Input';
import { Textarea } from '@/components/ui/atoms/TextArea';
import { useTranslations } from 'next-intl';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { BRAND_EMAIL } from '@/constants/brand';

export const ContactForm = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const recaptchaRef = useRef<ReCAPTCHA>(null);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = async (data: {
    name: string;
    phone: string;
    email: string;
    message: string;
  }) => {
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      return;
    }

    try {
      await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...data,
          recaptchaToken,
          sendTo: BRAND_EMAIL,
        }),
      });
      setFormData({
        name: '',
        email: '',
        phone: '',
        message: '',
      });
      toast.success(t('contact.form.successMessage'));
    } catch (error) {
      console.error('Error sending email:', error);
      alert('Failed to send email. Please try again later.');
    }
  };

  return (
    <>
      <Card className='flex flex-1 dark:bg-primary dark:text-primary-foreground'>
        <CardContent className='px-8 py-4'>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              onSubmit(formData);
            }}
            className='space-y-4'
          >
            <Input
              id='name'
              name='name'
              value={formData.name}
              onChange={handleChange}
              required
              placeholder={t('contact.form.name')}
            />

            <Input
              id='email'
              name='email'
              type='email'
              value={formData.email}
              onChange={handleChange}
              required
              placeholder={t('contact.form.email')}
            />

            <Input
              id='phone'
              name='phone'
              type='tel'
              value={formData.phone}
              onChange={handleChange}
              required
              placeholder={t('contact.form.phone')}
            />

            <Textarea
              id='message'
              name='message'
              value={formData.message}
              onChange={handleChange}
              placeholder={t('contact.form.message')}
              rows={4}
            />

            <Button
              type='submit'
              size='lg'
              className='w-full'
              variant='default'
            >
              {t('contact.form.submit')}
            </Button>
          </form>
        </CardContent>
      </Card>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ''}
        size='invisible'
      />
    </>
  );
};
