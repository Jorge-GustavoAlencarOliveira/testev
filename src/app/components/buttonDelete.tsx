'use client';

import { deletePost } from '../actions/actions';

const ButtonDelete = ({ id }: { id: string }) => {
  return (
    <button
      onClick={async () => await deletePost(id)}
      className="bg-zinc-200 hover:bg-zinc-700 hover:text-white text-black font-bold py-2 px-4 rounded"
    >
      Apagar
    </button>
  );
};

export default ButtonDelete;
