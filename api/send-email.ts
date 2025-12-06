import { Resend } from 'resend';

const resend = new Resend('re_dzszcV5S_BB8BNZzujGEDDBtvvLrbmTbe');

export default async function handler(req: any, res: any) {
    if (req.method !== 'POST') {
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, message } = req.body;

    if (!name || !email || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    try {
        const data = await resend.emails.send({
            from: 'onboarding@resend.dev',
            to: 'shantanuyadav117@gmail.com',
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
        });

        return res.status(200).json(data);
    } catch (error) {
        console.error('Resend error:', error);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
