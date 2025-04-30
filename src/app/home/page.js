import React from 'react'
import Navbar from '../components/global components/Navbar'
import Hero from '../components/Home components/Hero'
import Categories from '../components/Home components/Categories'
import BestSeller from '../components/Home components/BestSeller'
import ProductCard from '../components/Home components/ProductCard'

const Home = () => {
  return (
    <>
     <Hero/>
     <Categories/>
     <ProductCard/>
      
    </>
  )
}

export default Home
