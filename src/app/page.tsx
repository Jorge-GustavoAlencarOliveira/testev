import prisma from './prisma';
import Form from './components/form';
import Button from './components/button';

export default async function Home() {

  const data = await prisma?.user.findMany();

  return (
    <main>
      <Form/>
      {data?.map((item) => {
        return (
          <div
            key={item.id}
            style={{ display: 'flex', flexDirection: 'column' }}
          >
            <span>nome: {item.name}</span>
            <span>email: {item.email}</span>
            <Button id={item.id}/>
          </div>
        );
      })}
    </main>
  );
}
