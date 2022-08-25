import React from 'react'
import FooterEveryPage from '../Components/Footer/FooterEveryPage'
import FooterHome from '../Components/Footer/FooterHome'
import Navbar from '../Components/Navbar/Navbar'

const Home = () => {
  return (
    <div>
        <Navbar />
        <FooterHome />
        {/* <FooterEveryPage /> */}
    </div>
  )
}

export default Home