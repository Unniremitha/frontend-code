import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-600 py-6 shadow-inner mt-auto">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side */}
        <p className="text-sm text-center md:text-left">
          © {new Date().getFullYear()} Copyright@2024 Ksuite,Government of kerala Design & Developed by Information Kerala Mission
        </p>

        {/* Right Side */}
        <div className="flex space-x-4 mt-2 md:mt-0">   
          <a href="/terms" className="hover:text-pink-600 text-sm">Terms & Condition</a>
          <a href="/privacy" className="hover:text-pink-600 text-sm">Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;