import { getMessages } from '../actions';

const MessageList = async () => {
  const messages = await getMessages();
  const numberOfMessages = messages.length;

  return (
    numberOfMessages > 0 &&
    <ul className='w-full lg:w-1/3 mb-8'>
      {messages.map(message => (
        <li key={message.id} className='mb-3'>
          <p>{ message.creator }</p>
          <p>{ message.text }</p>
        </li>
      ))}
    </ul>
  );
};

export { MessageList };