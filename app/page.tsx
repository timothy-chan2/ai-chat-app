import { Chat } from 'ragged';

export default function Home() {
  let chatReply: string | null | undefined;
  
  const chatInstance = Chat.with({
    provider: 'cohere',
    config: { apiKey: process.env.COHERE_API_KEY, model: 'command-light' }
  });

  async function getResponse() {
    const { history } = await chatInstance.chat('What is a rickroll?');
    chatReply = history.at(-1)?.text;
    console.log(chatReply);
  }

  getResponse().catch(e => console.error(e));
  
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      
    </main>
  );
}
