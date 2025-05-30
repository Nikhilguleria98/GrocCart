'use client'
import { X } from 'lucide-react';
import Link from 'next/link'
import React, { useState } from 'react'

const Login = ({onClose}) => {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = (e) => {
    e.preventDefault();
  
    console.log('Logging in with', email, password);
    onClose(); 
  };
  return (
    <>
    <div  className='h-full w-full flex justify-center items-center mt-20 fixed -top-10 left-0 bottom-0 right-0 z-30  p-10 '>
       
        <button
          onClick={onClose}
          className="absolute cursor-pointer  translate-x-33 -translate-y-34  text-xl text-gray-500 hover:text-black z-50"
        >
         <X/>
        </button>
        <form className=' bg-gray-100 flex flex-col w-80 justify-center items-center rounded-md'>
                <h1 className='mt-5 text-2xl font-semibold text-gray-500'><span className='text-green-500'>User</span> Login</h1>
           
            <div className='flex flex-col gap-3 w-full p-5'>
              <div className='flex flex-col gap-2'>
                <label htmlFor="email">Email</label>
                <input type="email" placeholder='enter your email' className='border border-gray-300 rounded-md p-2 text-gray-400 outline-0'/>
              </div>
              <div className='flex flex-col gap-2'>
                <label htmlFor="password">Password</label>
              <input type="password" placeholder='enter your password' className='border border-gray-300 rounded-md p-2 text-gray-400 outline-0'/>
              </div>
        <div className='text-left'>
          <p>Create an account ? <Link href={'/sign in'} className='text-green-500'>click here</Link></p>
        </div>
        <div>
          <button className='bg-green-500 w-full p-2 rounded-md text-white cursor-pointer hover:bg-green-700 duration-300'>Login</button>
        </div>
            </div>
        </form>
    </div>
      
    </>
  )
}

export default Login
