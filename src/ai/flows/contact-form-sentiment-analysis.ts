'use server';

/**
 * @fileOverview Analyzes the sentiment of a contact form message and returns a tailored response.
 *   If sentiment is negative, the LLM will use a tool to offer specific assistance.
 *
 * - analyzeSentimentAndRespond - A function that analyzes the sentiment and returns a tailored response.
 * - ContactFormInput - The input type for the analyzeSentimentAndRespond function.
 * - ContactFormOutput - The return type for the analyzeSentimentAndRespond function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const ContactFormInputSchema = z.object({
  message: z.string().describe('The message from the contact form.'),
});
export type ContactFormInput = z.infer<typeof ContactFormInputSchema>;

const ContactFormOutputSchema = z.object({
  response: z.string().describe('The tailored response based on the sentiment of the message, potentially offering specific help if negative.'),
});
export type ContactFormOutput = z.infer<typeof ContactFormOutputSchema>;

export async function analyzeSentimentAndRespond(input: ContactFormInput): Promise<ContactFormOutput> {
  return analyzeSentimentAndRespondFlow(input);
}

const provideAssistance = ai.defineTool({
  name: 'provideAssistance',
  description: 'Offers specific assistance or directs the user to helpful resources based on their message.',
  inputSchema: z.object({
    message: z.string().describe('The user message.'),
  }),
  outputSchema: z.string().describe('A helpful response based on the content of the message.'),
},
async (input) => {
    // Placeholder implementation for providing assistance
    return `We understand your concern. Please ensure to reach out to abhinavnalla10@gmail.com for assistance.`
});

const prompt = ai.definePrompt({
  name: 'contactFormSentimentPrompt',
  input: {schema: ContactFormInputSchema},
  output: {schema: ContactFormOutputSchema},
  tools: [provideAssistance],
  prompt: `You are a helpful assistant designed to respond to messages submitted through a contact form. Analyze the sentiment of the following message and provide a tailored response.\n\nIf the sentiment is positive, express gratitude.\nIf the sentiment is negative, acknowledge the issue and offer assistance using the provideAssistance tool to guide the user to support resources.\nIf the sentiment is neutral, provide a standard acknowledgment. \n\nMessage: {{{message}}}`,
});

const analyzeSentimentAndRespondFlow = ai.defineFlow(
  {
    name: 'analyzeSentimentAndRespondFlow',
    inputSchema: ContactFormInputSchema,
    outputSchema: ContactFormOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
