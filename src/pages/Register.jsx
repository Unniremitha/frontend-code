
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import Footer from '../components/Footer';
import LeftSide from '../components/LeftSide'; 
import BackButton from '../components/BackButton';

export default function Register() {
  const [form, setForm] = useState({
    phoneNumber: '',
    email: '',
    otp: '',
    countryType: true, // true = India (phone), false = Abroad (email)
  });

  const [message, setMessage] = useState('');
  const [otpSent, setOtpSent] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const isValidPhoneNumber = (phone) => {
  const phoneRegex = /^[0-9]{10}$/; // example for 10 digit numbers only
  return phoneRegex.test(phone);
};

const isValidEmail = (email) => {
  const emailRegex =  /^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$/;
  return emailRegex.test(email);
};
  const handleSendOtp = () => {
  if (form.countryType) {
    if (!form.phoneNumber.trim()) {
      setMessage('Please enter a phone number.');
      return;
    }
    if (!isValidPhoneNumber(form.phoneNumber.trim())) {
      setMessage('Please enter a valid 10-digit phone number.');
      return;
    }
  } else {
    if (!form.email.trim()) {
      setMessage('Please enter a valid Email.');
      return;
    }
   if (!isValidEmail(form.email.trim())) {
      setMessage('Please enter a valid email address.');
      return;
    }
  }
    setOtpSent(true);
    setMessage('OTP sent successfully.');
  };

  const handleRegister = async () => {
    try {
      const payload = {
        otp: form.otp,
        countryType: form.countryType,
      };

      if (form.countryType) {
        payload.phoneNumber = form.phoneNumber;
      } else {
        payload.email = form.email;
      }

      const response = await axios.post(
        'http://localhost:8088/demo-service/api/user/register',
        payload
      );

      setMessage(response.data.message);

     if (response.data.message === 'User Account Created') {
      const userId = form.countryType ? form.phoneNumber : form.email;
  setTimeout(() => {
    navigate('/registration-success', {
      state: {
        userId,
      },
    });
  }, 1500);
}
    } catch (error) {
      console.error(error);
      setMessage('Registration failed.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side */}
        <LeftSide />

        {/* Right Side */}
            <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <div className="w-full max-w-sm space-y-4">
              <h2 className="text-xl  text-center text-black-600">
                <BackButton />
                Sign Up <span className=" text-pink-600 font-bold">K-SMART</span>
              </h2>
              <h2 className="text-sm text-center text-gray-600">Registration</h2>
              <p className="text-sm text-center text-gray-600">
                To complete your registration, please fill in all fields below
              </p>

<div className="min-h-[90px] transition-all duration-300 ease-in-out">
            {/* Country Selection */}
            <div className="mb-4">
              <div className="flex gap-10">
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="countryType"
                    checked={form.countryType === true}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        countryType: true,
                        email: '',
                        otp: '',
                      }))
                    }
                  />
                  <span>India</span>
                </label>
                <label className="flex items-center gap-1">
                  <input
                    type="radio"
                    name="countryType"
                    checked={form.countryType === false}
                    onChange={() =>
                      setForm((prev) => ({
                        ...prev,
                        countryType: false,
                        phoneNumber: '',
                        otp: '',
                      }))
                    }
                  />
                  <span>Abroad</span>
                </label>
              </div>
            </div>

            {/* Phone or Email Field */}
            {!otpSent && (
              form.countryType ? (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Phone Number
                  </label>
                  <input
                    type="text"
                    name="phoneNumber"
                    value={form.phoneNumber}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              ) : (
                <div className="mb-4">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                    className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                  />
                </div>
              )
            )}

            {/* OTP Field */}
            {otpSent && (
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1">
                  OTP
                </label>
                <input
                  type="text"
                  name="otp"
                  value={form.otp}
                  onChange={handleChange}
                  className="w-full border px-3 py-2 rounded focus:outline-none focus:ring-2 focus:ring-pink-500"
                />
              </div>
              
            )}
      </div>
            {/* Send OTP / Register Button */}
            <button
              onClick={otpSent ? handleRegister : handleSendOtp}
              className="w-full bg-pink-600 text-white py-2 rounded-md hover:bg-pink-700 transition duration-300"
            >
              {otpSent ? 'Verify' : 'Send OTP'}
            </button>

            {/* Message */}
            {message && (
              <div className="text-center text-sm text-blue-600 font-medium mt-4">
                {message}
              </div>
            )}

            {/* Back to Login */}
            <div className="text-sm text-center mt-4">
              <button className="text-gray-600" onClick={() => navigate('/')}>
                If you have an account? Login
              </button>
            </div>
          </div>
        </div>
      </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
}
