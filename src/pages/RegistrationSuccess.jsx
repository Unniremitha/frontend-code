import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';
import React, { useEffect } from 'react';

export default function RegistrationSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const userId = location.state?.userId;

  useEffect(() => {
    if (!userId) {
      navigate('/');
    }
  }, [userId, navigate]);

  const handleProceedToKYC = () => {
  //   navigate('/kycverify', {
  //     state: { userId },
  //   });
  // };
    const isPhoneNumber = /^\d{10}$/.test(userId); // Assuming 10-digit phone number
  const path = isPhoneNumber ? '/kycverify' : '/kyc-passportupload';

  navigate(path, {
    state: { userId },
  });
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
              Sign Up <span className="text-pink-600 font-bold">K-SMART</span>          
            </h2>
            <h3 className="text-xl font-semibold text-blue-600 mt-2 mb-1">Registration</h3>
            <p className="text-sm text-gray-600 mb-4">
              To complete your registration, please fill in all the fields below
            </p>
<div className="min-h-[90px] transition-all duration-300 ease-in-out">
            {/* Success Icon */}
            <div className="flex justify-center my-4">
              <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center">
                <svg className="w-8 h-8 text-green-500" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                </svg>
              </div>
            </div>

            <h4 className="text-lg font-semibold text-blue-600 mb-1">User Account Created</h4>
            <p className="text-sm text-gray-600 mb-2">
              You are about to begin the KYC verification process. This will require
              you to provide personal information and upload documents.
            </p>

            <p className="text-sm text-gray-800">
              <span className="font-medium">User ID :</span>{' '}
              <span className="text-blue-600 font-semibold">{userId || 'N/A'}</span>
            </p>
</div>
            <button
              onClick={handleProceedToKYC}
              className="mt-6 w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
            >
              Proceed to KYC
            </button>

            <p className="text-sm text-gray-600 mt-4">
              If you have an account?{' '}
              <span
                onClick={() => navigate('/')}
                className="text-blue-600 font-medium cursor-pointer"
              >
                Login
              </span>
            </p>
          </div>
        </div>
      </div>

      {/* Sticky Footer */}
      <Footer />
    </div>
  );
}
