'use client';
import { addUser } from '../actions/actions';

const Form = () => {
  return (
    <div>
      <form action={addUser}>
        <input type="text" name="name" />
        <input type="email" name="email" />
        <button type='submit'>Criar</button>
      </form>
    </div>
  );
};

export default Form;
