'use server'

import prisma from "../prisma";
import { revalidatePath } from "next/cache";

export const addUser = async (formData: FormData) => {
  await prisma.user.create({
    data: {
      name: formData.get('name') as string,
      email: formData.get('email') as string,
    },
  });
  revalidatePath('/');
};

export const deleteUser = async (id: number) => {
  await prisma.user.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/');
}