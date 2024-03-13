'use server'

import prisma from "../prisma";
import { Prisma } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { signIn, signOut } from "../lib/auth";
import { redirect } from "next/navigation";
import bcrypt from 'bcryptjs'
import { checkAuth } from "../lib/server-utils";

//User
export const addUser = async (formData: FormData) => {
  const passwordHashed = await bcrypt.hash(formData.get('password') as string, 10)
  try{
    await prisma.user.create({
      data: {
        email: formData.get('email') as string,
        hashedPassword: passwordHashed 
      },
    });
  }catch(error){
    if (error instanceof Prisma.PrismaClientKnownRequestError) {
      if (error.code === "P2002") {
        console.log('Email already exists.');
        return {
          message: "Email already exists.",
        };
      }
    }
    return {
      message: "Could not create user.",
    };
  }
  await signIn('credentials', formData)
  redirect('/posts')
};

export const deleteUser = async (id: string) => {
  await prisma.user.delete({
    where: {
      id: id
    }
  })
  revalidatePath('/');
}

export const logIn = async (formData: FormData) => {
  const authData = Object.fromEntries(formData.entries()) 
  await signIn('credentials', formData)
  redirect('/posts')
}


export const logOut = async () => {
  await signOut({redirectTo: '/'})
}

//Posts

export const createPost = async (formData: FormData) => {
  const session = await checkAuth()
  try{
    await prisma.post.create({
      data: {
        title: formData.get('title') as string,
        content: formData.get('content') as string,
        userId: session.user.id
      }
    })
    revalidatePath('/posts')
  }catch(err){
    console.log(err)
  }
}

export const deletePost = async (id: string) => {
  const session = await checkAuth()
  try{
    await prisma.post.delete({
      where: {
        id: id,
        userId: session.user.id
      }
    }) 
    revalidatePath('/posts')
  }
  catch(error){
    console.log(error);
  }
}