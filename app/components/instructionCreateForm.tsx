'use client';

import { getAnswer } from '../actions';
import { SubmitButton } from './submitButton';

const InstructionCreateForm = () => {
  return (
    <form action={getAnswer} className='flex flex-col items-center w-full lg:w-1/3'>
      <label htmlFor='instruction'>Instruction</label>
      <textarea id='instruction' name='instruction' className='bg-white/20 mt-1 mb-5 resize-none w-full h-20 px-2 py-1' />
      <SubmitButton label='Send' loading='Searching...' />
    </form>
  );
};

export { InstructionCreateForm };