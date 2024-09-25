import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  label: string,
  loading: string
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type='submit' className='bg-blue-500 hover:bg-blue-700 font-semibold py-2 px-4 w-full rounded'>
      {pending ? loading : label}
    </button>
  );
};

export { SubmitButton };