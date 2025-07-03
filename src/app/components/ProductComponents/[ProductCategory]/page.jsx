import React from 'react'
import { useSelector } from 'react-redux'

const page = () => {

    const products = useSelector((state)=>state.items?.products)
    console.log(products)
  return (
    <div>
      
    </div>
  )
}

export default page
