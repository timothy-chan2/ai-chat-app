import { getMessages } from '../actions';

const MessageList = async () => {
  const messages = await getMessages();
  const numberOfMessages = messages.length;

  return (
    numberOfMessages > 0 &&
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