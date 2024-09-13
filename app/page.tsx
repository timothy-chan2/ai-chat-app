import { MessageList } from './components/messageList';
import { InstructionCreateForm } from './components/instructionCreateForm';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col justify-center items-center p-24'>
      <h1 className='mb-10 text-3xl'>AI Chat</h1>
      <MessageList />
      <InstructionCreateForm />
    </main>
  );
}
