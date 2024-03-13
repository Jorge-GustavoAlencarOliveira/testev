import ButtonLogout from '../components/buttonLogout';
import prisma from '../prisma';
import FormPost from '../components/formPost';
import { checkAuth } from '../lib/server-utils';
import ButtonDelete from '../components/buttonDelete';

const Posts = async () => {
  const session = await checkAuth()
  
  const posts = await prisma.post.findMany({
    where: {
      userId: session?.user?.id
    }
  })
  
  return (
    <div className='w-full flex flex-col items-center'>
      <div className='bg-zinc-200 py-4 w-full flex justify-center'>
        <div className='w-1/2 flex justify-between items-center'>
          <span>
            {session?.user?.email}
          </span>
          <ButtonLogout />
      </div>
      </div>
      <FormPost />
      {posts && posts.map(item => {
        return (
          <div key={item.id} className='flex justify-between w-1/2 my-4'>
            <div>
              <p>Titulo: {item.title}</p>
              <p>Conteúdo: {item.content}</p>
            </div>
            <ButtonDelete id={item.id}/>
          </div>
        )
      })}
    </div>
  );
};

export default Posts;
