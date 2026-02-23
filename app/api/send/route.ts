import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(req: Request) {
    try {
        const data = await req.json();
        const { name, email, service, phone, details } = data;

        // Create a transporter
        const transporter = nodemailer.createTransport({
            service: 'gmail', // or another provider
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        const mailOptions = {
            from: process.env.SMTP_USER,
            to: process.env.RECIPIENT_EMAIL,
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
    } catch (error) {
        console.error('Email send error:', error);
        return NextResponse.json({ error: 'Failed to send email' }, { status: 500 });
    }
}
