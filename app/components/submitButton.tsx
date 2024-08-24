import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  label: string,
  loading: string
};

const SubmitButton = ({ label, loading }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button disabled={pending} type='submit'>
      {pending ? loading : label}
    </button>
  );
};

export { SubmitButton };