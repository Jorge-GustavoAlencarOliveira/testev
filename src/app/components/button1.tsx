'use client';

import { useFormStatus } from 'react-dom';

const Button1 = () => {
  const { pending } = useFormStatus();

  return (
    <button
      className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded float-right"
      type="submit"
      aria-disabled={pending}
      disabled={pending}
    >
      {pending ? 'Criando' : 'Criar'}
    </button>
  );
};

export default Button1;
