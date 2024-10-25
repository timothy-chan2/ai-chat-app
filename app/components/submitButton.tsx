import { useFormStatus } from 'react-dom';

type SubmitButtonProps = {
  label: string,
  loading: string,
  styleClasses: string
};

const SubmitButton = ({ label, loading, styleClasses }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <button
      disabled={pending}
      type='submit'
      className={styleClasses}
    >
      {pending ? loading : label}
    </button>
  );
};

export { SubmitButton };