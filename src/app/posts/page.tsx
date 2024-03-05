import React from 'react'

async function loadPost (){
  await new Promise(() => {
    setTimeout(() => {
      console.log('carregou');
    }, 3000);
  })
}

const Posts = () => {
  loadPost()
  return (
    <div>
     todos os post
    </div>
  )
}

export default Posts
