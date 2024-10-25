'use client';

import { useRef } from 'react';

import { getAnswer } from '../actions';
import { SubmitButton } from './submitButton';

const InstructionCreateForm = () => {
  const formRef = useRef<HTMLFormElement>(null);

  const handleCreateInstruction = async (formData: FormData) => {
    await getAnswer(formData);

    if (formRef.current) {
      formRef.current.reset();
    }
  };
  
  return (
    <form
      ref={formRef}
      action={handleCreateInstruction}
      className='flex flex-col items-center w-full md:w-3/4 lg:w-1/3'
    >
      <label htmlFor='instruction'>Instruction</label>
      <textarea
        id='instruction'
        name='instruction'
        className='bg-white/20 mt-1 mb-5 resize-none w-full h-20 px-2 py-1 rounded'
      />
      <SubmitButton
        label='Send'
        loading='Searching...'
        styleClasses='bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 w-full rounded'
      />
    </form>
  );
};

export { InstructionCreateForm };