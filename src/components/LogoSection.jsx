import React from 'react';

const LogoSection = () => {
  return (
    <>
      <img src="/kerala-logo.png" alt="Kerala Logo" className="h-16 mb-4" />

      <h1 className="text-2xl font-semibold text-gray-700 mb-2">Welcome to</h1>
      <h1 className="text-4xl font-bold text-[#E90064]">
        K<span className="text-blue-500">smart</span>
      </h1>
    </>
  );
};

export default LogoSection;