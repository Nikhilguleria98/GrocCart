import React from 'react';
import { features } from '../../../../public/assets';

const Banner = () => {
  return (
    <div className="responsivewidth mt-10 flex flex-col md:flex-row items-center justify-between gap-10 rounded-xl bg-blue-100/30 px-4 py-10">
      
      {/* Image Section */}
      <div className="w-full md:w-1/2 flex justify-center">
        <div className="max-h-[400px] w-full max-w-sm bg-red-600 rounded-t-full overflow-hidden">
          <img
            src="./banner.png"
            alt="Banner"
            className="w-full h-full object-fill"
          />
        </div>
      </div>

      {/* Features Section */}
      <div className="w-full md:w-1/2 flex flex-col gap-6">
      <h1 className='text-xl md:text-2xl font-bold text-green-500'>Why We Are Best ?</h1>
        {features.map((item, index) => (
          <div key={index} className="flex items-start gap-4">
            <img
              src={item.icon}
              alt={item.title}
              className="w-10 h-10 object-contain"
            />
            <div>
              <h4 className="text-lg font-semibold text-gray-800">{item.title}</h4>
              <p className="text-sm text-gray-700">{item.description}</p>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Banner;
