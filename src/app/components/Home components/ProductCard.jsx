'use client'
import { ShoppingCart, Star } from 'lucide-react';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

const ProductCard = ({product}) => {
  const products = useSelector((state) => state.products?.items);
 const [showPopup,setShowPopup] = useState(false)

 const handleAddtoCart=(product)=>{
  setShowPopup(true)
    setTimeout(() => {
      setShowPopup(false)
    }, 5000);
  
 }

  return (
 <div className='responsivewidth mt-10 relative'>
 {
  showPopup && (
    <div className='fixed top-20 transform -translate-x-1/2 left-1/2 bg-white shadow-2xl p-2 rounded '>
      ✅ Added to Cart
      <div className='h-1  mt-2 rounded relative '>
        <div
          className='absolute top-0 left-0 h-full bg-green-600'
          style={{
            animation: "ShrinkBar 5s linear forwards",
            width: "100%",
          }}
        ></div>
      </div>
    </div>
  )
}

          <h2 className='text-3xl font-bold sm:text-left text-center'>Best Seller</h2>
 <div className='flex justify-center'>
      <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mt-10 w-96 sm:w-full">
 {
    products.filter((item)=>item.inStock).slice(0,5).map((product)=>(
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
  );
};

export default ProductCard;
