import { Suspense } from 'react';
import PostList from './postList';
import prisma from './prisma';
import { revalidatePath } from 'next/cache';

type userProps = {
  name: string;
  id: string;
  email: string
}

export default async function Home() {
  // const response = await fetch('https://testev-two.vercel.app/api', {
  //   method: 'GET'
  // })
  // const data = await response.json() as userProps[]
  const data = await prisma?.user.findMany()
  
  const addUser =  async (formData: FormData) => {
    "use server"
      await prisma.user.create({
        data: {
          name: formData.get('name') as string,
          email: formData.get('email') as string
        }
      })

      revalidatePath('/')
  }

  return (
    <main>
      <Suspense fallback='Carregando...'>
        <form action={addUser}>
          <input type="text" name='name' />
          <input type="email" name='email' />
          <button>Criar</button>
        </form>
        {data?.map(item => {
          return (
            <div key={item.name} style={{display: 'flex', flexDirection: 'column'}}>
               <span>nome: {item.name}</span>
               <span>email: {item.email}</span>
            </div>
          )
        })}
      </Suspense>
    </main>
  );
}
