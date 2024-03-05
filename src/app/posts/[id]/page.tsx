import { notFound } from "next/navigation";

const SinglePost = async ({params}: {params: {id: string}}) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${params.id}`)
  const data = await response.json()

  if(!data.title) return notFound()

  return (
    <div>
      {data.id}
      {data.title}
    </div>
  )
}

export default SinglePost
