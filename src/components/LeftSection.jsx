import React from 'react';
import LogoSection from './LogoSection';
import ImageCarousel from './ImageCarousel';

const LeftSection = () => {
  return (
    <div className="hidden md:flex flex-col justify-center items-center w-1/2 bg-gray-100 p-5">
      <p className="text-sm text-center mt-8 text-gray-600 ">
        One integrated platform for all the services you need
      </p>
    </div>
  );
};

export default LeftSection;