import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const { SMTP_USER, SMTP_PASSWORD, RECIPIENT_EMAIL } = process.env;

        if (!SMTP_USER || !SMTP_PASSWORD || !RECIPIENT_EMAIL) {
            console.error('Missing environment variables for email service');
            return NextResponse.json({ error: 'Mail server configuration missing' }, { status: 500 });
        }

        const data = await req.json();
        const { name, email, service, phone, details } = data;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                user: SMTP_USER,
                pass: SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: SMTP_USER,
            to: RECIPIENT_EMAIL,
            subject: `New Project Quote Request from ${name}`,
            text: `
        New Quote Request Details:
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone}
        Service Type: ${service}
        
        Project Details:
        ${details}
      `,
            html: `
        <div style="font-family: sans-serif; padding: 20px; color: #333;">
          <h2 style="color: #EAB308;">New Project Quote Request</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Service Type:</strong> ${service}</p>
          <hr style="border: 0; border-top: 1px solid #eee; margin: 20px 0;">
          <h3 style="color: #666;">Project Details:</h3>
          <p style="white-space: pre-wrap;">${details}</p>
        </div>
      `,
        };

        await transporter.sendMail(mailOptions);

        return NextResponse.json({ message: 'Email sent successfully' }, { status: 200 });
    } catch (error: any) {
        console.error('Email send error:', error.message || error);
        return NextResponse.json({ error: error.message || 'Failed to send email' }, { status: 500 });
    }
}
