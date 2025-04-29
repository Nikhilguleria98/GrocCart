'use client'
import { ChevronLeft, ChevronRight } from 'lucide-react'
import React, { useRef } from 'react'


const Categories = () => {

const scrollRef = useRef(null)

const scroll = (direction)=>{
    const container = scrollRef.current;
    const scrollAmount = 200;
    if (container){
        container.scrollBy({
            left: direction === 'left' ? -scrollAmount: scrollAmount,
            behavior: 'smooth'
        })
    }
}

    const data =[
        {name:"Organic veggies",img:"/organic_vegitable_image.png",bgColor:"bg-yellow-200/80"},
        {name:"Fresh Fruits",img:"/fresh_fruits_image.png",bgColor:"bg-pink-200"},
        {name:"Cold Drinks",img:"/bottles_image.png",bgColor:"bg-blue-200"},
        {name:"Instant Food",img:"/maggi_image.png",bgColor:"bg-green-100"},
        {name:"Dairy Products",img:"/dairy_product_image.png",bgColor:"bg-red-200"},
        {name:"Bakery & Breads",img:"/bakery_image.png",bgColor:"bg-purple-200"},
        {name:"Grains",img:"/grain_image.png",bgColor:"bg-yellow-200"},
    ]
  return (
    <div className='responsivewidth mt-10 font-poppins'>
        <h2 className='text-3xl font-bold sm:text-left text-center'>Categories</h2>
   <div className={` relative mt-10 `}>
    <button onClick={()=>scroll('left')} className='absolute left-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-300 shadow-2xl z-20 cursor-pointer'>
        <ChevronLeft/>
    </button>
    <button onClick={()=>scroll('right')} className='absolute right-0 top-1/2 -translate-y-1/2 bg-white p-2 rounded-full hover:bg-gray-300 shadow-2xl z-20 cursor-pointer'>
        <ChevronRight/>
    </button>
   <div ref={scrollRef} className='overflow-x-auto scroll-smooth scrollbar-hide flex gap-3 '>
      {
        data.map((item, index)=>(
             <div  key={index} className={`cursor-pointer flex flex-shrink-0 w-56 p-4  flex-col items-center justify-center rounded-xl  ${item.bgColor}`}>
             <img src={item.img} alt="" className='w-24 hover:scale-105 duration-300'/>
             <h3 className='font-semibold'>{item.name}</h3>
             </div>
        ))
    }
   </div>
    </div>
    </div>
  )
}

export default Categories
