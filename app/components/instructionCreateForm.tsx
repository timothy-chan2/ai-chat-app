import { getAnswer } from '../actions';

const InstructionCreateForm = () => {
  return (
    <form action={getAnswer}>
      <label htmlFor='instruction'>Instruction</label>
      <textarea id='instruction' name='instruction' />
      <button type='submit'>Send</button>
    </form>
  );
};

export { InstructionCreateForm };