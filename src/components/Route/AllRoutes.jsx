import React from 'react'
import {Routes,Route} from "react-router-dom"
import { CreatePassword } from '../CreatePassword'
import { ExploreGoa } from '../ExploreGoa'
import { ExploreMumbai } from '../ExploreMumbai'
import { Homepage } from '../Homepage'

export const AllRotes= () => {
  return (
    <div>
        <Routes>
          <Route path='/' element={<Homepage/>}></Route>
            <Route path='/goa' element={<ExploreGoa/>}></Route>
            <Route path='/mumbai' element={<ExploreMumbai/>}></Route>
            <Route path='/register' element={<ExploreMumbai/>}></Route>
            <Route path='/createPass' element={<CreatePassword/>}></Route>
        </Routes>
    </div>
  )
}
