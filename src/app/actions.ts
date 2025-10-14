'use server';

import { z } from 'zod';
import { analyzeSentimentAndRespond } from '@/ai/flows/contact-form-sentiment-analysis';

const formSchema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  message: z.string().min(10),
});

export async function handleContactFormSubmission(values: z.infer<typeof formSchema>) {
  const validatedFields = formSchema.safeParse(values);

  if (!validatedFields.success) {
    throw new Error('Invalid form data provided.');
  }

  try {
    const aiResponse = await analyzeSentimentAndRespond({
      message: validatedFields.data.message,
    });
    return {
      response: aiResponse.response,
    };
  } catch (error) {
    console.error('AI sentiment analysis failed:', error);
    // Provide a graceful fallback response in case the AI service fails
    return {
      response: 'Thank you for your message. We have received it and will get back to you shortly.',
    };
  }
}
