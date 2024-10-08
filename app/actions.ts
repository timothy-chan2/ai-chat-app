'use server';

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

export const getMessages = async (): Promise<Message[]> => {
  await new Promise(resolve => setTimeout(resolve, 200));
  
  return Promise.resolve(messages);
}

export const getAnswer = async (formData: FormData) => {
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

export const deleteMessage = (messageId: string) => {
  const messageIndex = messages.findIndex(message => message.id === messageId);
  messages.splice(messageIndex, 1);

  revalidatePath('/');
};