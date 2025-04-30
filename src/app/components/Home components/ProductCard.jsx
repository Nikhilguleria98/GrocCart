'use client'
import { ShoppingCart } from 'lucide-react';
import React from 'react';
import { useSelector } from 'react-redux';

const ProductCard = () => {
  const products = useSelector((state) => state.products?.items);


  return (
    <div className="responsivewidth grid grid-cols-2 md:grid-cols-5 gap-4 p-4">
 {
    products.slice(0,1).map((product)=>(
        <div key={product._id} className='border border-gray-300 shadow-2xl  p-4'>
            <div className='flex justify-center items-center'>
            <img src={product.image[0]} alt="" className='w-48'/>
            </div>
            <p className='text-gray-400'>{product.category}</p>
            <p className='font-semibold text-lg'>{product.name}</p>
            <div className='flex gap-2'>
            <p>₹{product.offerPrice}</p>
            <p className='line-through text-gray-400'>{product.price}</p>
            <ShoppingCart/>
            </div>
        </div>
    ))
 }
     
    </div>
  );
};

export default ProductCard;
