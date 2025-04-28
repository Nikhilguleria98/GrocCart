'use client';
import { Menu, Search, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useState } from 'react'


const Navbar = () => {
    const [isOpen, setIsOpen]= useState(false)
    const pathName= usePathname()

    const handleToggle=()=>{
        setIsOpen(!isOpen)
    }

    const links =[
        {name:'Home' , href:"/"},
        {name:'About Us' , href:"/about"},
        {name:'Products' , href:"/products"},
    ]
  return (
    <>
    <div className=' relative text-white '>
        <nav className='flex justify-between items-center p-5 md:px-20 border-b bg-green-500 border-gray-400'>
            <div>
                <h1 className='text-rose'>GrocCart</h1>
            </div>
            <div className='hidden md:flex gap-5'>
                {links.map((link,index)=>(
                    <Link  key={link.name}
                    href={link.href} className={`${pathName===link.href?"text-black":""}`}>{link.name}</Link>
                ))}
            </div>
            <div className='hidden md:flex gap-4 '>
            <div className='flex  p-2 rounded-full bg-[#FFF5EE] text-black'>
                <input type="text" placeholder='Search here...' className='w-full h-full outline-0 px-2'/>
            <Search />
            </div>
           <div className='flex items-center'>
           <ShoppingCart />
           </div>
            </div>
            <div className='flex md:hidden'>
            <button onClick={handleToggle}>{isOpen?<X />:<Menu />}</button>
            </div>
        </nav>

        {
            isOpen && (
                <nav className='flex flex-col md:justify-evenly justify-between items-center p-5 md:p-2 w-1/2 h-screen bg-green-500  absolute top-16 right-0 z-50'>
               
                <div className='flex flex-col md:hidden gap-5'>
                    {links.map((link,index)=>(
                        <Link  key={link.name}
                        href={link.href}>{link.name}</Link>
                    ))}
                </div>
           
            
            </nav>
            )
        }
    </div>
      
    </>
  )
}

export default Navbar
