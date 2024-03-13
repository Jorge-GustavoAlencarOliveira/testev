import prisma from '../prisma';

export async function GET(request: Request, response: Response) {
  const users = await prisma.user.findMany();
  return Response.json(users);
}

// export async function POST(request: Request, response: Response) {
//   const { name, email } = await request.json();
//   if (name === '' || email === '')
//     return Response.json({ message: 'Insira os dados' });
//   const userAlreadyExist = await prisma.user.findFirst({
//     where: {
//       email: email,
//     },
//   });
//   if (userAlreadyExist) return Response.json({ message: 'usuario ja existe' });
//   const user = await prisma.user.create({
//     data: {
//       name: name,
//       email: email,
//     },
//     select: {
//       name: true,
//       email: true,
//     },
//   });
//   return Response.json({ message: 'ok', user });
// }
