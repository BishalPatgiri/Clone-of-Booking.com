import React from 'react'
import {Link} from "react-router-dom"

export const Homepage = () => {
  return (
    <div>
        <h1>
        Welcome to Home Page
        </h1>
        <Link className='link' to="/goa">Goa</Link>
    </div>
  )
}
