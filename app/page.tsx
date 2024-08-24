import { MessageList } from './components/messageList';
import { InstructionCreateForm } from './components/instructionCreateForm';

export default function Home() {
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <h1>AI Chat</h1>
      <MessageList />
      <InstructionCreateForm />
    </main>
  );
}
