import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import ContactEmail from '@/emails/ContactEmail';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { name, email, message } = await request.json();

    // Validate the input
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    const data = await resend.emails.send({
      from: 'Your Name <onboarding@resend.dev>', // Update this with your verified domain
      to: ['your-email@example.com'], // Update this with your email
      subject: 'New Contact Form Submission',
      react: ContactEmail({
        name,
        email,
        message,
      }),
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
} 