import { Suspense } from 'react';
import PostList from './postList';
import prisma from './prisma';


export default async function Home() {
  const data = await prisma?.user.findMany()
  return (
    <main>
      <Suspense fallback='Carregando...'>
        {data?.map(item => {
          return (
            <div key={item.name}>
               <span>nome: {item.name}</span>
               <span>email: {item.email}</span>
            </div>
          )
        })}
        <PostList />
      </Suspense>
    </main>
  );
}
