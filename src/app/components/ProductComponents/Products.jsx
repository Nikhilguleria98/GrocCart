'use client'
import { ShoppingCart, Star } from 'lucide-react'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

const Products = () => {
    const allProducts = useSelector((state)=>state.products?.items)
    const searchQuery = useSelector((state)=>state.products?.searchQuery)

    const [filteredProducts ,setFilteredProducts] = useState([])
   
    useEffect(()=>{
        if(searchQuery.length>0){
            setFilteredProducts(allProducts.filter(
                product=>product.name.toLowerCase().includes(searchQuery.toLowerCase())
            ))
        }
        else{
            setFilteredProducts(allProducts)
        }
    },[searchQuery,allProducts])
  return (
<div className='responsivewidth  mt-28'>

    <div >
        <h1 className='text-center md:text-left text-2xl font-bold text-gray-600'>All <span className='text-green-500'>Products</span></h1>
    </div>
  <div className='flex justify-center'>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-96 sm:w-full">
      
      {
        filteredProducts.filter((product)=>product.inStock).map((product,index)=>(
         <div key={product._id} className='border border-gray-300 shadow-2xl  p-4 cursor-pointer'>
            <div className='flex justify-center items-center'>
            <img src={product.image[0]} alt="" className='w-40 hover:scale-105 duration-300'/>
            </div>
            <p className='text-gray-400'>{product.category}</p>
            <p className='font-semibold text-lg'>{product.name}</p>
            <div className='flex items-center gap-1 my-1'>
  {[...Array(5)].map((_, index) => (
    <Star 
      key={index} 
      className={index < product.rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'} 
      size={18}
    />
  ))}
</div>

            <div className='flex gap-2 justify-between items-center mt-3'>
     
      <div className='flex items-center gap-2 text-green-500 font-semibold text-lg '>
            <p className='text-[4vw] sm:text-[3] md:text-[1.3vw]'>₹{product.offerPrice}</p>
            <p className='line-through text-gray-400 text-[3vw] sm:text-[3] md:text-[1.2vw]'>{product.price}</p>
            </div>
            <div onClick={()=>handleAddtoCart(product)} className='flex items-center border border-green-300 rounded-sm bg-green-200/50 gap-1 p-[0.7vw] cursor-pointer'>
            <ShoppingCart size={20} className='text-green-500 '/>
            <p className='text-green-500 text-sm'>Add</p>
            </div>
     
            </div>
        </div>
        ))
      }
    </div>
  </div>
</div>
  )
}

export default Products
