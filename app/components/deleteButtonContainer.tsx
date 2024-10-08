'use client';

import { deleteMessage } from '../actions';
import { DeleteButton } from './deleteButton';

const DeleteButtonContainer = ({ id }: { id: string }) => {
  const deleteMessageWithId = deleteMessage.bind(null, id);

  return (
    <form action={deleteMessageWithId}>
      <DeleteButton label='Delete' loading='Deleting...' />
    </form>
  );
};

export { DeleteButtonContainer };