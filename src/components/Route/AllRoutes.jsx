import React from 'react'
import {Routes,Route} from "react-router-dom"
import { ExploreGoa } from '../ExploreGoa'
import { ExploreMumbai } from '../ExploreMumbai'
import { Homepage } from '../Homepage'

export const AllRotes= () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
            <Route path='/goa' element={<ExploreGoa/>}></Route>
        </Routes>
    </div>
  )
}
