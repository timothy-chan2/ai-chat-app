import { getMessages } from '../actions';

const MessageList = async () => {
  const messages = await getMessages();

  return (
    <ul>
      {messages.map(message => (
        <li key={message.id}>
          <p>{ message.creator }</p>
          <p>{ message.text }</p>
        </li>
      ))}
    </ul>
  );
};

export { MessageList };