import React from 'react'

type userProps = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

type dataProps = {
  data: userProps[]
}

const PostList = async () => {
  await new Promise((resolve) => setTimeout(resolve,1000))
  const response = await fetch('https://jsonplaceholder.typicode.com/todos');
  const data = await response.json() as userProps[];
  return (
    <div className='bg-zinc-100 '>
        {data.map(item => {
          return (
            <div key={item.id} className='border border-indigo-600 '>
            <span>
              {item.title}
            </span>
          </div>
        )
      })}
    </div>
  )
}

export default PostList
