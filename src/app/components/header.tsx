import React from 'react'
import { auth } from '../lib/auth'
import { NextRequest } from 'next/server';
import { PageProps } from '../../../.next/types/app/layout';
import { useSession } from 'next-auth/react';
import { redirect } from 'next/navigation';


const Header = async () => {

    return (
      <div className='bg-zinc-500'>
         {/* <h1>Bom dia {session.user?.name}</h1> */}
      </div>
    )
  }


export default Header
