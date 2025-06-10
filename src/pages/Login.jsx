
import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide';
import { useNavigate } from 'react-router-dom';
import Modal from '../components/Modal';
import Declaration from "../pages/Declaration";

export default function Login() {
  const [userId, setUserId] = useState("");
  const [otp, setOtp] = useState("");
  const [message, setMessage] = useState("");
  const [showOtp, setShowOtp] = useState(false);
  const navigate = useNavigate();
  const [showDeclaration, setShowDeclaration] = useState(false);

  const handleSendOtp = () => {
    if (!userId.trim()) {
      setMessage("Please enter a valid User ID.");
      return;
    }

    setShowOtp(true);
    setMessage("OTP sent successfully.");
  };

  const handleLogin = async () => {
    try {
      const payload = { otp };
      if (userId.includes("@")) {
        payload.email = userId;
      } else {
        payload.phoneNumber = userId;
      }
      
      const res = await axios.post("http://localhost:8088/demo-service/api/user/login", payload);
 
const msg = res.data.message?.toLowerCase();

    setMessage(res.data.message || "Login response unknown");

    console.log("Response message:", msg);

    if (msg.includes("successful")) {
      navigate("/dashboard");
    } else if (
      msg.includes("kyc") ||
      msg.includes("aadhaar") ||
      msg.includes("verify")
    ) {
      // // ✅ Redirect to /kycverify if KYC not completed
     
      // navigate("/kycverify", { state: { userId, message: res.data.message } });
      setMessage("KYC not completed. Please verify your Aadhaar first.");
      setTimeout(() => {
        navigate("/kycverify", { state: { userId } });
      }, 2000); // 2 seconds delay
    }
    

    } catch (error) {
      console.error(error);
      setMessage("Login failed. Please try again.");
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
    {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side */}
        <LeftSide />

        {/* Right Side */}
        <div className="flex-[1.2] bg-gray-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <div className="w-full max-w-sm space-y-4">
              <h2 className="text-2xl  text-center text-balck-600">
                Sign in <span className=" text-pink-600 font-bold">K-SMART</span>
              </h2>
              <h2 className="text-sm text-center text-gray-600">Login</h2>
              <p className="text-sm text-center text-gray-600">
                Please enter your login details below
              </p>

               <div className="min-h-[90px] transition-all duration-300 ease-in-out">
              {!showOtp && (
                <div>
                  <label htmlFor="userId" className="block text-sm font-medium text-gray-700 mb-1">
                    User ID
                  </label>
                  <input
                    id="userId"
                    type="text"
                    placeholder="Enter user id"
                    value={userId}
                    onChange={(e) => setUserId(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              )}

              {showOtp && (
                <div>
                  <label htmlFor="otp" className="block text-sm font-medium text-gray-700 mb-1">
                    OTP
                  </label>
                  <input
                    id="otp"
                    type="text"
                    placeholder="Enter OTP"
                    value={otp}
                    onChange={(e) => setOtp(e.target.value)}
                    className="w-full px-4 py-2   border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
                // </div>
              )}
              </div>
              <button
                onClick={showOtp ? handleLogin : handleSendOtp}
                className="w-full bg-pink-600 text-white py-2  rounded-md font-semibold hover:bg-pink-700 transition duration-300 -mt-10"
              >
                {showOtp ? "Login" : "Send OTP"}
              </button>

              {message && (
                <div className="text-center text-sm text-blue-600 font-medium">{message}</div>
              )}
              {/* {message && !message.toLowerCase().includes("failed") && (
  <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative flex items-start gap-2">
    <svg
      className="w-5 h-5 mt-1 text-green-500"
      fill="none"
      stroke="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
    </svg>
    <span className="text-sm">{message}</span>
  </div>
)} */}

              <div className="text-sm text-center text-gray-600">
                If you don’t have an account?{" "}
                {/* <Link to="/declaration" className="text-pink-600 font-medium">
                  Create Account
                </Link> */}
                 <button
    className="text-pink-600 font-medium underline"
    onClick={() => setShowDeclaration(true)}
  >
    Create Account
  </button>
                
              </div>

              <div className="text-sm text-center">
                <a href="#" className="text-black font-semibold underline">
                  Forgot User ID?
                </a>
              </div>
            </div>
          </div>
        </div>
      
</div>
      {/* Footer at bottom */}
      <Footer />
      <Modal isOpen={showDeclaration} onClose={() => setShowDeclaration(false)}>
        <Declaration closeModal={() => setShowDeclaration(false)} />
      </Modal>
    </div>
  );
}
