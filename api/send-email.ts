import type { VercelRequest, VercelResponse } from '@vercel/node';
import { Resend } from 'resend';

export default async function handler(req: VercelRequest, res: VercelResponse) {
  // Only allow POST requests
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method Not Allowed' });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error('RESEND_API_KEY is not set');
    return res.status(500).json({ error: 'Server configuration error.' });
  }

  const { name, email, phone, address, message } = req.body;

  // Basic validation
  if (!name || !email) {
    return res.status(400).json({ error: 'Name and email are required.' });
  }

  const resend = new Resend(apiKey);

  try {
    const { data, error } = await resend.emails.send({
      from: 'C&E Seamless Gutters <hello@candehomeservices.com>',
      to: ['cehomeser@gmail.com'],
      // Reply-to is set to the customer's email so replies go directly to them
      replyTo: email,
      subject: `New Quote Request from ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; background: #ffffff; border: 1px solid #e5e5e5;">
          
          <!-- Header -->
          <div style="background: #1a1a1a; padding: 32px 40px;">
            <h1 style="margin: 0; color: #ffffff; font-size: 24px; font-weight: 900; letter-spacing: -0.5px;">
              C&amp;E SEAMLESS GUTTERS
            </h1>
            <p style="margin: 6px 0 0; color: #f5c842; font-size: 12px; font-weight: 700; letter-spacing: 3px; text-transform: uppercase;">
              New Quote Request
            </p>
          </div>

          <!-- Body -->
          <div style="padding: 40px;">
            <h2 style="margin: 0 0 24px; font-size: 20px; color: #1a1a1a; font-weight: 900; border-bottom: 3px solid #cc2222; padding-bottom: 12px; display: inline-block;">
              Customer Details
            </h2>

            <table style="width: 100%; border-collapse: collapse; font-size: 15px;">
              <tr>
                <td style="padding: 12px 0; color: #888; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; width: 140px; border-bottom: 1px solid #f0f0f0;">Name</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f0f0f0;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; border-bottom: 1px solid #f0f0f0;">Email</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f0f0f0;"><a href="mailto:${email}" style="color: #cc2222; text-decoration: none;">${email}</a></td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; border-bottom: 1px solid #f0f0f0;">Phone</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f0f0f0;">${phone || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0; color: #888; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; border-bottom: 1px solid #f0f0f0;">Address</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600; border-bottom: 1px solid #f0f0f0;">${address || 'Not provided'}</td>
              </tr>
              ${message ? `
              <tr>
                <td style="padding: 12px 0; color: #888; font-weight: 700; text-transform: uppercase; font-size: 11px; letter-spacing: 1px; vertical-align: top;">Details</td>
                <td style="padding: 12px 0; color: #1a1a1a; font-weight: 600; line-height: 1.6;">${message.replace(/\n/g, '<br/>')}</td>
              </tr>` : ''}
            </table>

            <div style="margin-top: 32px; padding: 16px 20px; background: #f9f9f9; border-left: 4px solid #f5c842; font-size: 13px; color: #555;">
              💡 <strong>Reply directly to this email</strong> to respond to ${name} at <a href="mailto:${email}" style="color: #cc2222;">${email}</a>.
            </div>
          </div>

          <!-- Footer -->
          <div style="background: #f5f5f5; padding: 20px 40px; text-align: center;">
            <p style="margin: 0; font-size: 11px; color: #999; letter-spacing: 1px; text-transform: uppercase;">
              C&amp;E Seamless Gutters · Iowa, LA · (337) 842-8378
            </p>
          </div>

        </div>
      `,
    });

    if (error) {
      console.error('Resend API error:', error);
      return res.status(500).json({ error: 'Failed to send email. Please try again.' });
    }

    return res.status(200).json({ success: true, id: data?.id });
  } catch (err) {
    console.error('Unexpected error sending email:', err);
    return res.status(500).json({ error: 'An unexpected error occurred.' });
  }
}
