import { useFormStatus } from 'react-dom';

const DeleteButton = ({ label, loading }: { label: string, loading: string }) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type='submit'>
      {pending ? loading : label}
    </button>
  );
};

export { DeleteButton };