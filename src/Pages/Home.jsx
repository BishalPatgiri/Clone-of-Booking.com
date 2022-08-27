import React from 'react'
import { Connect } from '../Components/connect'
import { Destination } from '../Components/destination'
import { ExploreIndia } from '../Components/ExploreIndia'
// import FooterEveryPage from '../Components/Footer/FooterEveryPage'
import FooterHome from '../Components/Footer/FooterHome'
import { Homeguest } from '../Components/Homeguest'
import Navbar from '../Components/Navbar/Navbar'
import { Nextrip } from '../Components/nextTrip'
import { Search } from '../Components/Search'

const Home = () => {
  return (
    <div>
        <Navbar />
        <Search/>
        <ExploreIndia/>
        <Homeguest/>
        <Connect/>
        <Nextrip/>
        <Destination/>
        <FooterHome />
        {/* <FooterEveryPage /> */}
    </div>
  )
}

export default Home