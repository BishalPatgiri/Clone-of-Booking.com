import React from 'react'
import {Link} from "react-router-dom"
import { CreatePassword } from './CreatePassword'
import { Regsiter } from './Regsiter'

export const Homepage = () => {
  return (
    <div>
        <h1>
        Welcome to Home Page
        </h1>
        <Link className='link' to="/goa">Goa</Link>
        <Link className='link' to="/mumbai">Mumbai</Link>
        <Regsiter/>
        {/* <CreatePassword/> */}
    </div>
  )
}
