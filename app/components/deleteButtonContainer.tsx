'use client';

import { deleteMessage } from '../actions';
import { SubmitButton } from './submitButton';

const DeleteButtonContainer = ({ id }: { id: string }) => {
  const deleteMessageWithId = deleteMessage.bind(null, id);

  return (
    <form action={deleteMessageWithId}>
      <SubmitButton
        label='Delete'
        loading='Deleting...'
        styleClasses='bg-red-500 hover:bg-red-700 font-semibold py-1 px-5 rounded mt-2 mb-2'
      />
    </form>
  );
};

export { DeleteButtonContainer };