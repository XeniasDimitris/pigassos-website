import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: NextRequest) {
  const { name, email, message, sendTo, recaptchaToken, phone } =
    await req.json();

  // Verify reCAPTCHA using Enterprise API
  const recaptchaResponse = await fetch(
    `https://recaptchaenterprise.googleapis.com/v1/projects/orbital-476613/assessments?key=${process.env.RECAPTCHA_API_KEY}`,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        event: {
          token: recaptchaToken,
          siteKey: process.env.NEXT_PUBLIC_RECAPTCHA_KEY,
        },
      }),
    }
  );

  const recaptchaResult = await recaptchaResponse.json();
  if (!recaptchaResult.tokenProperties?.valid) {
    return NextResponse.json(
      { message: 'reCAPTCHA verification failed' },
      { status: 400 }
    );
  }

  try {
    const transporter = nodemailer.createTransport({
      host: 'mail.transferus.gr',
      port: 465,
      secure: true,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    const mailOptions = {
      replyTo: email,
      to: sendTo,
      subject: `Νέο μήνυμα από ${email}`,
      text: `
      From: ${name} <${email}> ${phone && `(${phone})`}
      
      ${message}`,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ message: 'Email sent successfully' });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { message: 'Failed to send email' },
      { status: 500 }
    );
  }
}
