import { ClientComponent } from './components/clientComponent';
import { MessageList } from './components/messageList';
import { InstructionCreateForm } from './components/instructionCreateForm';

export default function Home() {
  // https://www.robinwieruch.de/next-forms/
  
  return (
    <main className='flex min-h-screen flex-col items-center justify-between p-24'>
      <ClientComponent />
      <MessageList />
      <InstructionCreateForm />
    </main>
  );
}
