import { Chat } from 'ragged';
import { revalidatePath } from 'next/cache';

type Message = {
  id: string,
  creator: string,
  text: string | null | undefined
};

let messages: Message[] = [];

const chatInstance = Chat.with({
  provider: 'cohere',
  config: { apiKey: process.env.COHERE_API_KEY, model: 'command-light' }
});

export const getMessages = (): Message[] => {
  return messages;
}

export const getAnswer = async (formData: FormData) => {
  'use server';

  const instruction = formData.get('instruction') as string;

  messages.push({
    id: crypto.randomUUID(),
    creator: 'User',
    text: instruction
  });

  const { history } = await chatInstance.chat(instruction);
  const chatReply = history.at(-1)?.text;

  messages.push({
    id: crypto.randomUUID(),
    creator: 'AI',
    text: chatReply
  });

  revalidatePath('/');
};