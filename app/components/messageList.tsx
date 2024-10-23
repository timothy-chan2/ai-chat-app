import { getMessages } from '../actions';
import { DeleteButtonContainer } from './deleteButtonContainer';

const MessageList = async () => {
  const messages = await getMessages();
  const numberOfMessages = messages.length;

  const messageStyle: { [key: string]: string; } = {
    'AI': 'mb-3',
    'User': 'mb-3 flex justify-end'
  };

  const messageDivStyle: { [key: string]: string; } = {
    'AI': '',
    'User': 'bg-white/20 px-4 py-2 rounded-lg'
  };
  
  const messageListItems = messages.map(message => {
    const style = messageStyle[message.creator];
    const divStyle = messageDivStyle[message.creator];

    return (
      <li key={message.id} className={style}>
        <div className={divStyle}>
          <p className='font-bold'>{ message.creator }</p>
          <p>{ message.text }</p>
          <DeleteButtonContainer id={message.id} />
        </div>
      </li>
    );
  });

  return (
    numberOfMessages > 0 &&
    <ul className='w-full md:w-3/4 lg:w-1/3 mb-8'>
      {messageListItems}
    </ul>
  );
};

export { MessageList };