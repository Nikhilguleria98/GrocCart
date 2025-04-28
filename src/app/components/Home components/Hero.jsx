'use client';
import React, { useState, useEffect } from 'react';

const Hero = () => {
  const data = [
    {
      id: 1,
      title: 'Farm-Fresh Groceries Delivered Daily',
      desc: 'Straight from local farms to your doorstep — crisp, clean, and full of flavor.',
      img: '/hero1.webp',
      color:'text-gray-600'
    },
    {
      id: 2,
      title: 'Skip the Store, Shop More.',
      desc: 'Groceries at your fingertips. Fast delivery, easy checkout, zero hassle.',
      img: '/hero2.webp',
       color:'text-gray-600'
    },
    {
      id: 3,
      title: 'Big Savings on Everyday Essentials!',
      desc: 'Get the best deals on fresh produce, dairy, snacks & more — limited time only!',
      img: '/hero3.webp',
       color:'text-gray-600'
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setIsVisible(false); 
      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % data.length);
        setIsVisible(true); 
      }, 500); 
    }, 5000);

    return () => clearInterval(interval);
  }, [data.length]);

  const currentSlide = data[currentIndex];

  return (
    <div className={`relative h-[500px] responsivewidth mt-5 transition-opacity duration-500 ${isVisible ? "opacity-100" : "opacity-0"}`}>
      <img
        src={currentSlide.img}
        alt={currentSlide.title}
        className="w-full h-full object-cover rounded-2xl"
      />
      <div className="absolute top-1/2 left-1/6 -translate-x-1/6 -translate-y-1/2 text-white">
        <h1 className={`text-4xl font-bold mb-4 ${currentSlide.color}`}>{currentSlide.title}</h1>
        <p className={`text-lg max-w-xl ${currentSlide.color}`}>{currentSlide.desc}</p>
      </div>
    </div>
  );
};

export default Hero;
