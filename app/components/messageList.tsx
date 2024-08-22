import { getMessages } from '../actions';

const MessageList = () => {
  const messages = getMessages();

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