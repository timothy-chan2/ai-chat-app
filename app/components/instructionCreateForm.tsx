'use client';

import { useFormStatus } from 'react-dom';
import { getAnswer } from '../actions';
import React from 'react';

type SubmitButtonProps = {
  label: string,
  loading: React.ReactNode
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type='submit'>
      {pending ? loading : label}
    </button>
  );
};

const InstructionCreateForm = () => {
  return (
    <form action={getAnswer}>
      <label htmlFor='instruction'>Instruction</label>
      <textarea id='instruction' name='instruction' />
      <SubmitButton label='Send' loading='Searching...' />
    </form>
  );
};

export { InstructionCreateForm };