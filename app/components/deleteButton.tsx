import { useFormStatus } from 'react-dom';

const DeleteButton = ({ label, loading }: { label: string, loading: string }) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className='bg-red-500 hover:bg-red-700 font-semibold py-1 px-5 rounded mt-2 mb-2'
    >
      {pending ? loading : label}
    </button>
  );
};

export { DeleteButton };