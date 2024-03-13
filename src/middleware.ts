import { auth } from './app/lib/auth';
 
export default auth

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};

//Atentar se o arquivo '.env' está subindo para o git