import { addUser, logIn} from '../actions/actions';
import Button1 from './button1';

type FormActionRrops = {
  typeAction: 'login' | 'signUp'
}

const Form = ({typeAction}: FormActionRrops) => {
  return (
    <div className="flex justify-center">
      <form action={typeAction === 'login' ? logIn : addUser} className="w-1/2">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            id="email"
            type="email"
            placeholder="teste@gmail.com"
            name="email"
          />
        </div>
        <div className="mb-6">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="password"
          >
            Senha
          </label>
          <input
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
            id="password"
            type="password"
            placeholder="*******"
            name="password"
          />
        </div>
        <div className="flex items-center justify-between">
          <a
            className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
            href="#"
          >
            Forgot Password?
          </a>
          <Button1 />
        </div>
      </form>
    </div>
  );
};

export default Form;
