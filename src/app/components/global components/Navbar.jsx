'use client';
import Login from '@/app/login/page';
import { CircleUserRound, Menu, Search, ShoppingCart, X } from 'lucide-react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const pathName = usePathname();

  const dispatch = useDispatch();
  const { isLoggedIn, user } = useSelector((state) => state.auth);

  const handleToggle = () => {
    setIsOpen(!isOpen);
  };

  const links = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Products', href: '/products' },
  ];

  useEffect(() => {
    const closeMenuOnResize = () => {
      if (window.innerWidth >= 1024) {
        setIsOpen(false);
      }
    };
    window.addEventListener('resize', closeMenuOnResize);
    return () => {
      window.removeEventListener('resize', closeMenuOnResize);
    };
  }, []);

  return (
    <>
      <div className='relative z-50'>
        <nav className='fixed top-0 w-full z-50 bg-white flex justify-between items-center p-5 lg:px-20 border-b border-gray-400'>
          <div>
            <Link href='/' className='text-rose text-2xl font-semibold'>
              Groc<span className='text-green-500'>Cart</span>
            </Link>
          </div>

          <div className='hidden lg:flex gap-5'>
            {links.map((link) => (
              <div className='flex flex-col items-center' key={link.name}>
                <Link
                  href={link.href}
                  className={`${
                    pathName === link.href ? 'text-black' : ''
                  } hover:scale-105 duration-300 font-semibold`}
                >
                  {link.name}
                </Link>
                {pathName === link.href && (
                  <div className='h-1 bg-green-500 w-[50%] mt-1 rounded-full'></div>
                )}
              </div>
            ))}
          </div>

          <div className='hidden lg:flex justify-center items-center gap-4'>
            <div className='flex p-2 rounded-full text-black border border-gray-300'>
              <input
                type='text'
                placeholder='Search here...'
                className='w-full h-full outline-0 px-2'
              />
              <Search />
            </div>
            <Link href='/cart' className='flex items-center'>
              <ShoppingCart />
            </Link>

         {!isLoggedIn ? (
  <>
    <button
      onClick={() => setIsModalOpen(true)}
      className="bg-green-500 py-2 px-3 text-white cursor-pointer hover:bg-green-700 duration-300 rounded-full"
    >
      Login
    </button>
  </>
) : (
  <div className='relative group cursor-pointer'>
    <div className='flex items-center'>
      <CircleUserRound />
    </div>
    <div className='absolute top-7 -right-16 rounded-lg z-40 group-hover:block hidden w-36 bg-green-500 text-white p-2 space-y-3 text-center'>
      <div className='cursor-pointer hover:bg-gray-300 w-
      full duration-300 rounded-lg p-2'>
        My Orders
      </div>
      <button
        onClick={() => dispatch(logout())}
        className='cursor-pointer hover:bg-gray-300 w-full duration-300 rounded-lg p-2'
      >
        Logout
      </button>
    </div>
  </div>
)}

          </div>

          {/* Mobile Button */}
          <div className='flex lg:hidden'>
            <button className='cursor-pointer' onClick={handleToggle}>
              {isOpen ? <X /> : <Menu />}
            </button>
          </div>
        </nav>

      
      {/* Mobile Menu */}
{isOpen && (
  <nav className='flex flex-col lg:justify-evenly justify-between items-center p-5 lg:p-2 w-1/2 h-screen bg-white fixed top-[72px] right-0 z-40 shadow-md'>
    <div className='flex flex-col lg:hidden gap-5 w-full'>
      {links.map((link) => (
        <Link
          key={link.name}
          href={link.href}
          className='hover:bg-gray-200 rounded-lg p-2 w-full text-center'
          onClick={() => setIsOpen(false)}
        >
          {link.name}
        </Link>
      ))}

      {/* Mobile Login Button */}
      {!isLoggedIn && (
        <button
          onClick={() => {
            setIsModalOpen(true);
            setIsOpen(false);
          }}
          className='bg-green-500 mt-6 w-full text-white py-2 rounded-lg hover:bg-green-700 duration-300'
        >
          Login
        </button>
      )}
    </div>
  </nav>
)}

{/* Modal for both desktop & mobile */}
{isModalOpen && (
  <div className="fixed inset-0  z-[9999] flex justify-center items-center">
    <Login onClose={() => setIsModalOpen(false)} />
  </div>
)}
      </div>

    </>
  );
};

export default Navbar;
