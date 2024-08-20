import { Chat } from 'ragged';

import Conversation from './ui/conversation';

export default async function Home() {
  const chatInstance = Chat.with({
    provider: 'cohere',
    config: { apiKey: process.env.COHERE_API_KEY, model: 'command-light' }
  });

  const { history } = await chatInstance.chat('What is a rickroll?');
  const chatReply = history.at(-1)?.text;
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Conversation chatData={chatReply} />
    </main>
  );
}
