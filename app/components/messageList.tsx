import { getMessages } from '../actions';
import { DeleteButtonContainer } from './deleteButtonContainer';

const MessageList = async () => {
  const messages = await getMessages();
  const numberOfMessages = messages.length;

  return (
    numberOfMessages > 0 &&
    <ul className='w-full lg:w-1/3 mb-8'>
      {messages.map(message => {
        let style;
        
        switch (message.creator) {
          case 'AI':
            style = 'mb-3';
            break;
          case 'User':
            style = 'mb-3 flex justify-end';
            break;
        }
        
        return (
          <li key={message.id} className={style}>
            <div>
              <p className='font-bold'>{ message.creator }</p>
              <p>{ message.text }</p>
              <DeleteButtonContainer id={message.id} />
            </div>
          </li>
        )
      })}
    </ul>
  );
};

export { MessageList };