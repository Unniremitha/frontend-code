
import React, { useState } from 'react';
import LeftSide from '../components/LeftSide';
import Footer from '../components/Footer';
import FormField from '../components/FormField';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';

export default function PassportVerification() {
  const [documentNumber, setDocumentNumber] = useState('');
  const [dob, setDob] = useState('');
  const [name, setName] = useState('');
  const [gender, setGender] = useState('');
  const navigate = useNavigate();
  const location = useLocation();
  const email = location.state?.email;

  const handleContinue = async () => {
    if (!documentNumber.trim()) {
      alert("Please enter your document number");
      return;
    }
    if (!dob) {
      alert("Please select your date of birth");
      return;
    }
    if (!name.trim()) {
      alert("Please enter your name");
      return;
    }
    if (!gender) {
      alert("Please select your gender");
      return;
    }

    const payload = { email, documentNumber, dob, name, gender };

    try {
      const response = await axios.post('http://localhost:8088/demo-service/save-document', payload);

      if (response.status === 200) {
        navigate('/document-success', {
          state: {
            documentNumber,
            dob,
            name,
            gender,
            // email (optional)
          }
        });
      } else {
        alert('Verification failed. Please check your data and try again.');
      }
    } catch (error) {
      console.error('Verification error:', error);
      alert(error.response?.data?.message || 'An error occurred during verification.');
    }
  };

  return (
    <>
      <div className="flex flex-col h-screen overflow-hidden">
        <div className="flex flex-grow overflow-hidden">
          <LeftSide />
          <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6 overflow-hidden">
            <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md h-fit animate-fade-in">
              <div className="w-full max-w-lg space-y-5">
                <h2 className="text-xl text-center text-black">
                  Verification <span className="text-pink-600 font-bold">KYC</span>
                </h2>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  Confirming your identity to ensure security, trust, and smooth experience
                </p>

                {/* Images */}
                <div className="mt-6 max-w-md w-full flex justify-between items-center px-4">
                  <img
                    src="/passport-sample.jpg"
                    alt="Sample passport"
                    className="w-32 h-20 object-cover border rounded-md"
                  />
                  <div className="relative">
                    <img
                      src="/user-profile.jpg"
                      alt="User profile"
                      className="w-16 h-16 rounded-full border-2 border-white shadow-md"
                    />
                    <span className="absolute bottom-0 right-0 bg-pink-600 text-white text-xs px-1.5 py-0.5 rounded-full">
                      📷
                    </span>
                  </div>
                </div>

                {/* Form Inputs */}
                <div className="flex gap-4">
                  <div className="flex-1">
                    <FormField
                      label="Document Number"
                      id="documentNumber"
                      value={documentNumber}
                      onChange={(e) => setDocumentNumber(e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <FormField
                      label="Date of Birth"
                      id="dob"
                      type="date"
                      value={dob}
                      onChange={(e) => setDob(e.target.value)}
                    />
                  </div>
                </div>

                <div className="flex gap-4 mt-4">
                  <div className="flex-1">
                    <FormField
                      label="Name"
                      id="name"
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                    />
                  </div>
                  <div className="relative mt-4 ">
                    <label
                      htmlFor="gender"
                      className="absolute -top-2 left-3 bg-white px-1 text-sm text-blue-800 font-medium"
                    >
                      Gender
                    </label>
                    <select
                      id="gender"
                      className="w-full mt-3 border border-gray-300 rounded-md p-2 focus:outline-pink-500"
                      value={gender}
                      onChange={(e) => setGender(e.target.value)}
                    >
                      <option value="" disabled>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
                    </select>
                  </div>
                </div>

                {/* Continue Button */}
                <div className="mt-6 w-full">
                  <button
                    onClick={handleContinue}
                    className="w-full bg-pink-600 text-white py-2 rounded-lg font-semibold hover:bg-pink-700 transition"
                  >
                    Continue
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <Footer />
      </div>
    </>
  );
}

