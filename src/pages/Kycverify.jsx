
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useLocation, useNavigate } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';

export default function Kycverify() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.userId;

  const [aadhaarNo, setAadhaarNo] = useState('');
  const [otp, setOtp] = useState('');
  const [message, setMessage] = useState('');
  const [verified, setVerified] = useState(false);
  const [showOtpField, setShowOtpField] = useState(false);
  const [aadhaarError, setAadhaarError] = useState('');

  // Redirect to login if no userId
  useEffect(() => {
    if (!userId) navigate('/');
  }, [userId, navigate]);

  const isEmail = userId?.includes('@'); // crude check

  const handleGetOTP = () => {
    if (!/^\d{12}$/.test(aadhaarNo)) {
      setAadhaarError('Please enter a valid 12-digit Aadhaar number');
      return;
    }

    setAadhaarError('');
    setShowOtpField(true);
    setMessage('OTP sent to your Aadhar registered mobile.');
  };

  const handleVerifyKYC = async () => {
    try {
      const payload = {
        aadhaarNo,
        otp,
        ...(isEmail ? { email: userId } : { phoneNumber: userId }),
      };

      const response = await axios.post('http://localhost:8088/demo-service/verify', payload);

      const { message, aadhaarNo: verifiedAadhaar } = response.data;
      setMessage(message);
      if (verifiedAadhaar) setVerified(true);
      navigate('/kyc-success', {
    state: {
      userId,
      aadhaarNo: aadhaarNo,
       },
  });

    } catch (error) {
      console.error(error);
      setMessage('Verification failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <LeftSide />
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <div className="w-full max-w-lg space-y-6">
              <h2 className="text-xl  text-center text-black-600">
                Verification <span className=" text-pink-600 font-bold">KYC</span>
              </h2>
              <p className="text-sm text-center text-gray-600">
                Verifying identity for: <span className="font-semibold">{userId}</span>
              </p>
              <div className="min-h-[100px] transition-all duration-300 ease-in-out">
              {!showOtpField && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">Aadhaar Number</label>
                    <input
                      type="text"
                      value={aadhaarNo}
                      onChange={(e) => setAadhaarNo(e.target.value)}
                      className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                      placeholder="Enter 12-digit Aadhaar"
                    />
                    {aadhaarError && <p className="text-red-500 text-xs mt-1">{aadhaarError}</p>}
                  </div>

                  <button
                    onClick={handleGetOTP}
                    className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition mb-1"
                  >
                    Get OTP
                  </button>
                </>
              )}

              {showOtpField && (
                <>
                  <div className="mb-4">
                    <label className="block text-gray-700 text-sm font-medium mb-1">OTP</label>
                    <input
                      type="text"
                      value={otp}
                      onChange={(e) => setOtp(e.target.value)}
                      className="w-full px-4 py-2 mb-5 border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-400"
                      placeholder="Enter OTP"
                    />
                  </div>

                  <button
                    onClick={handleVerifyKYC}
                    className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition mb-5"
                  >
                    Verify KYC
                  </button>
                </>
              )}
              </div>
              {message && (
                <p className={`mt-4 text-center text-sm font-medium ${verified ? 'text-green-600' : 'text-red-600'}`}>
                  {message}
                </p>
              )}

                    <div className="text-sm text-center" text-gray-600 onClick={() => navigate('/other-document')}>
                I don’t have an aadhar?{" "}
                {/* <Link to="/declaration" className="text-pink-600 font-medium">
                  Create Account
                </Link> */}
                 <button
    className="text-pink-600 font-medium underline"
    
  >
    Click here
  </button>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
