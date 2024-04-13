import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default defineEventHandler(async (event) => {
  const body = await readBody(event)

  try {
    const data = await resend.emails.send({
      from: 'David <david@supernuxt.dev>',
      to: [body.to],
      subject: 'Hello world',
      html: '<strong>It works!</strong>',
    });

    return data;
  } catch (error) {
    return { error };
  }
});