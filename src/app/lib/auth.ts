import NextAuth, { NextAuthConfig } from 'next-auth';
import Credentials from 'next-auth/providers/credentials';
import prisma from '../prisma';
import bcrypt from 'bcryptjs';

const config = {
  pages: {
    signIn: '/',
  },

  providers: [
    Credentials({
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          if (typeof email === 'string') {
            const user = await prisma.user.findUnique({
              where: {
                email,
              },
            });
            if (!user) {
              console.log('Usuário não encontrado');
              throw new Error('Erro');
            }
            const passwordMatches = await bcrypt.compare(
              password as string,
              user.hashedPassword,
            );
            if (!passwordMatches) {
              console.log('Usuário não encontrado');
              throw new Error('Erro');
            }
            return user;
          }
        } catch (err) {
          console.log(err);
          throw new Error('Erro');
        }
      },
    }),
  ],
  callbacks: {
    authorized: ({ auth, request }) => {
      const isLoggedIn = !!auth?.user;
      const isTryngToAcessApp = request.nextUrl.pathname.includes('/posts');
      if (!isLoggedIn && isTryngToAcessApp) {
        console.log('tentou nao logado');
        return false;
      }
      if (isLoggedIn && isTryngToAcessApp) {
        return true;
      }

      if (isLoggedIn && !isTryngToAcessApp) {
        return Response.redirect(new URL('/posts', request.nextUrl));
      }
      if (!isLoggedIn && !isTryngToAcessApp) {
        return true;
      }
      return false;
    },
    jwt: ({ token, user }) => {
      if (user) {
        token.userId = user.id as string;
      }
      return token;
    },
    session: ({session, token}) => {
      if(session.user){
        session.user.id = token.userId
      }
      return session
    }
  },
} satisfies NextAuthConfig;

export const { auth, signIn, signOut } = NextAuth(config);
