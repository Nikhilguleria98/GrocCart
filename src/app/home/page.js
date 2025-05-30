import React from 'react'
import Navbar from '../components/global components/Navbar'
import Hero from '../components/Home components/Hero'
import Categories from '../components/Home components/Categories'
import ProductCard from '../components/Home components/ProductCard'
import Banner from '../components/Home components/Banner'
import Newsletter from '../components/Home components/Newsletter'

const Home = () => {
  return (
    <>
     <Hero/>
     <Categories/>
     <ProductCard/>
     <Banner/>
     <Newsletter/>
   
      
    </>
  )
}

export default Home
