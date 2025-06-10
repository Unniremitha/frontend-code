import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';

export default function KycSuccess() {
  const location = useLocation();
  const navigate = useNavigate();
  const { userId, aadhaarNo } = location.state || {};
  

  const handleContinue = () => {
    
    navigate('/dashboard'); // Change to your actual dashboard route
  };

  return (
<div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side */}
        <LeftSide />

        {/* Right Side */}
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-4">
          <div className="w-full max-w-md bg-white shadow-lg rounded-xl p-8 text-center">
            <h2 className="text-lg font-medium text-gray-800">
              Verification <span className="text-pink-600 font-bold">KYC</span>          
            </h2>
            {/* <h3 className="text-xl font-semibold text-blue-600 mt-2 mb-1">Registration</h3> */}
            <p className="text-sm text-gray-600 mb-4">
              Confirming your identity to ensure security,trust,and smooth experience
            </p>
                        {/* Success Icon */}
            <div className="flex justify-center my-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>
                 <h3 className="text-xl font-semibold text-blue-600 mt-2 mb-1">KYC verification success!</h3> 
                  <p className="text-sm text-gray-600 mb-4">
              You can now access KSMART services.Click "Proceed" to continue
            </p>
            <div className="bg-gray-100 p-4 rounded-lg">
              <p className="text-sm text-gray-700">
                <span className="font-medium">User ID:</span>{' '}
                <span className="text-blue-600">{userId || 'N/A'}</span>
              </p>
              <p className="text-sm text-gray-700">
                <span className="font-medium">Verified Aadhaar:</span>{' '}
                <span className="text-blue-600">{aadhaarNo || 'N/A'}</span>
              </p>
            </div>

            <button
              onClick={handleContinue}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition"
            >
              Proceed
            </button>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
