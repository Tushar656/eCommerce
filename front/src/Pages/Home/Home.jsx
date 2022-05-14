import Slider from '../../components/Slider/Slider'
import Category from '../../components/Categories/Category'
import React from 'react'
import "./Home.css"
import Topbar from '../../components/Topbar/Topbar'
import NewsLetter from '../../components/Newsletter/NewsLetter'
import Footer from '../../components/Footer/Footer'

const Home = () => {
  return (
    <div>
        <Topbar/>
        <Slider/>
        <Category/>
        <NewsLetter/>
        <Footer/>
    </div>
  )
}

export default Home
