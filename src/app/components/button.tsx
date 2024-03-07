'use client'

import React from 'react'
import { deleteUser } from '../actions/actions'

const Button = ({id}: {id: number}) => {
  return (
   <button onClick={async () => await deleteUser(id) }>
     Apagar
   </button>
  )
}

export default Button
