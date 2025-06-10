
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import LeftSide from '../components/LeftSide';
import Footer from '../components/Footer';

export default function KycPassportUpload() {
  const [selectedFile, setSelectedFile] = useState(null);
  const [fileName, setFileName] = useState('');
  const location = useLocation();
  const navigate = useNavigate();
  const email = location.state?.userId;

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setFileName(file.name);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!selectedFile) {
      alert('Please upload your passport file.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);
    // formData.append('userId', userId); // Optional if backend expects userId
    formData.append('email', email);

    try {
      const res = await fetch('http://localhost:8088/demo-service/upload-passport', {
        method: 'POST',
        body: formData,
      });

      const result = await res.text();
      alert(result);

      //  if (res.ok) {
      //   navigate('/kyc-success', { state: { userId } }); // Optional next step
      // }

      if (res.ok) {
  navigate('/passportverification', { state: { email } });  // instead of userId
}
    } catch (err) {
      console.error(err);
      alert('Upload failed. Please try again.');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Main Content */}
      <div className="flex flex-grow">
        {/* Left Side */}
        <LeftSide />
{/* Right Side*/}
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <div className="w-full max-w-lg space-y-4">
              <h2 className="text-xl  text-center text-black">
                Verification <span className="text-pink-600">KYC</span>
              </h2>
            <p className="text-sm text-gray-600 text-center">
              Confirming your identity to ensure security, trust, and smooth experience.
            </p>
              <p className="text-sm text-blue-600 text-center font-bold">
             Attach Passport
            </p>

            <div className="border-2 border-dashed border-pink-300 p-6 rounded-lg text-center">
              <p className="text-sm text-gray-500 mb-2">Choose your passport or drag & drop it here</p>
              <label
                htmlFor="file-upload"
                className="cursor-pointer bg-pink-50 hover:bg-pink-100 text-pink-600 px-4 py-2 rounded border border-pink-300 inline-block"
              >
                {fileName || 'Browse File'}
              </label>
              <input
                id="file-upload"
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
                onChange={handleFileChange}
                className="hidden"
              />
              <p className="text-xs text-gray-400 mt-1">JPEG, PNG, PDF, JPG formats, up to 5MB</p>
            </div>

            <button
              onClick={handleSubmit}
              className="w-full bg-pink-600 hover:bg-pink-700 text-white font-semibold py-2 rounded"
            >
              Continue
            </button>

            <p className="text-sm text-gray-500 text-center">
              I don’t have Aadhaar?{' '}
              <a href="/alternateVerification" className="text-pink-600 font-medium hover:underline">
                Click here
              </a>
            </p>
            </div>
          </div>
        </div>
      </div> 
       <Footer /> 
    </div>
  );
}
