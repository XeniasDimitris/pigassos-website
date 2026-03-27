'use client';

import { Button } from '@/components/ui/atoms/Button';
import { Input } from '@/components/ui/atoms/Input';
import { Textarea } from '@/components/ui/atoms/TextArea';
import { useTranslations } from 'next-intl';
import ReCAPTCHA from 'react-google-recaptcha';
import { useRef, useState } from 'react';
import { toast } from 'sonner';
import { BRAND_EMAIL } from '@/constants/brand';
import { Send } from 'lucide-react';

export const ContactForm = () => {
  const t = useTranslations();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
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
    setIsSubmitting(true);
    const recaptchaToken = await recaptchaRef.current?.executeAsync();
    if (!recaptchaToken) {
      alert('Please complete the reCAPTCHA.');
      setIsSubmitting(false);
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
      toast.error('Failed to send email. Please try again later.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <div className='w-full max-w-md'>
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
            className='h-12 bg-card border-border rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-accent'
          />

          <Input
            id='email'
            name='email'
            type='email'
            value={formData.email}
            onChange={handleChange}
            required
            placeholder={t('contact.form.email')}
            className='h-12 bg-card border-border rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-accent'
          />

          <Input
            id='phone'
            name='phone'
            type='tel'
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder={t('contact.form.phone')}
            className='h-12 bg-card border-border rounded-xl px-4 focus:ring-2 focus:ring-accent focus:border-accent'
          />

          <Textarea
            id='message'
            name='message'
            value={formData.message}
            onChange={handleChange}
            placeholder={t('contact.form.message')}
            rows={4}
            className='bg-card border-border rounded-xl px-4 py-3 focus:ring-2 focus:ring-accent focus:border-accent resize-none'
          />

          <Button
            type='submit'
            size='lg'
            className='w-full h-12 rounded-xl bg-foreground text-background hover:bg-foreground/90 font-medium'
            disabled={isSubmitting}
          >
            {isSubmitting ? (
              'Sending...'
            ) : (
              <>
                {t('contact.form.submit')}
                <Send className='w-4 h-4 ml-2' />
              </>
            )}
          </Button>
        </form>
      </div>
      <ReCAPTCHA
        ref={recaptchaRef}
        sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_KEY ?? ''}
        size='invisible'
      />
    </>
  );
};
