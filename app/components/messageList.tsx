import { getMessages } from '../actions';
import { DeleteButtonContainer } from './deleteButtonContainer';

const MessageList = async () => {
  const messages = await getMessages();
  const numberOfMessages = messages.length;
  
  const messageListItems = messages.map(message => {
    const messageStyle: { [key: string]: string; } = {
      'AI': 'mb-3',
      'User': 'mb-3 flex justify-end'
    };

    const style = messageStyle[message.creator];

    return (
      <li key={message.id} className={style}>
        <div>
          <p className='font-bold'>{ message.creator }</p>
          <p>{ message.text }</p>
          <DeleteButtonContainer id={message.id} />
        </div>
      </li>
    );
  });

  return (
    numberOfMessages > 0 &&
    <ul className='w-full lg:w-1/3 mb-8'>
      {messageListItems}
    </ul>
  );
};

export { MessageList };