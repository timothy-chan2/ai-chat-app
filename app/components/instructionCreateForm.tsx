'use client';

import { getAnswer } from '../actions';
import { SubmitButton } from './submitButton';

const InstructionCreateForm = () => {
  return (
    <form action={getAnswer} className='flex flex-col items-center'>
      <label htmlFor='instruction'>Instruction</label>
      <textarea id='instruction' name='instruction' />
      <SubmitButton label='Send' loading='Searching...' />
    </form>
  );
};

export { InstructionCreateForm };