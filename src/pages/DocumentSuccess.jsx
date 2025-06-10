import { useNavigate, useLocation } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';
import React from 'react';

export default function DocumentSuccess() {
  const navigate = useNavigate();
  const location = useLocation();
  const { documentNumber, dob, name, gender, email } = location.state || {};

  const handleContinue = () => {
    // Redirect to next step (e.g., dashboard or selfie verification)
    navigate('/dashboard', { state: { email } });
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-grow">
        <LeftSide />

        {/* Right Side */}
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md h-fit animate-fade-in">
            <h2 className="w-full max-w-sm space-y-6 text-xl text-center text-black mb-4">
              Verification <span className="text-pink-600 font-bold">KYC</span>
            </h2>
            <p className="text-sm text-gray-600 mb-4 text-center">
                Confirming your identity to ensure security, trust, and smooth experience
              </p>

            {/* Confirmation Card */}
           
              <div className="text-green-700 bg-green-100 border border-green-300 rounded p-2 mb-4 text-sm flex items-center gap-2">
                ✅ Entered document details for verification.
              </div>

              <div className="flex items-center gap-4 mb-4">
                <img
                  src="/user-profile.jpg"
                  alt="User profile"
                  className="w-20 h-20 rounded-full border-2 border-gray shadow-md"
                />
                <div>
                  <p className="text-gray-700 text-sm">Document Number</p>
                  <p className="text-black font-semibold">{documentNumber}</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Date of Birth</p>
                  <p className="text-black font-semibold">{dob}</p>
                </div>
              </div>

              <div className="flex justify-between text-left mb-4">
                <div>
                  <p className="text-gray-700 text-sm">Name</p>
                  <p className="text-black font-semibold">{name}</p>
                </div>
                <div>
                  <p className="text-gray-700 text-sm">Gender</p>
                  <p className="text-black font-semibold">{gender}</p>
                </div>
              </div>

              {/* Continue Button */}
              <div className="mt-7">
                <button
                  onClick={handleContinue}
                  className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
                >
                  Continue
                </button>
              {/* </div> */}
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
