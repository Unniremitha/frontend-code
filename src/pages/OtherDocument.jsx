
import React, { useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import axios from 'axios';
import LeftSide from '../components/LeftSide';

export default function OtherDocument() {
  const location = useLocation();
  const navigate = useNavigate();
  const userId = location.state?.userId || ''; // ✅ Get userId from RegistrationSuccess

  const [selectedDoc, setSelectedDoc] = useState('');
  const [file, setFile] = useState(null);

  const handleDocChange = (e) => {
    setSelectedDoc(e.target.value);
  };

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

 const handleSubmit = async () => {
  if (!file || !userId) {
    alert('Please upload a file.');
    return;
  }

    const formData = new FormData();
    formData.append('file', file);

    const isPhone = /^\d{10}$/.test(userId);
    if (isPhone) {
      formData.append('phoneNumber', userId);
    } else {
      formData.append('email', userId);
    }

    try {
      const res = await axios.post('http://localhost:8088/demo-service/upload-document', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      alert(res.data);
   
      navigate('/kyc-success');
    } catch (error) {
      console.error(error);
      alert('Upload failed');
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <div className="flex flex-grow">
        <LeftSide />
        <div className="flex-[1.2] bg-slate-100 flex items-center justify-center p-6">
          <div className="bg-white rounded-xl shadow-xl p-6 md:p-8 w-full max-w-md animate-fade-in">
            <div className="space-y-6">
              <h2 className="text-xl text-center text-black-600">
                Verification <span className="text-pink-600 font-bold">KYC</span>
              </h2>
              <p className="text-gray-500 mt-2 text-sm text-center">
                Confirming your identity to ensure security, trust and a smooth experience.
              </p>

              <div>
                <h3 className="font-semibold text-blue-900 mb-2">
                  Upload any of the following Documents
                </h3>
                <div className="space-y-2 text-sm">
                  {['Aadhaar Card', 'Election ID Card', 'Driving License', 'Passport', 'PAN Card'].map((doc) => (
                    <label key={doc} className="flex items-center space-x-2">
                      <input
                        type="radio"
                        value={doc}
                        checked={selectedDoc === doc}
                        onChange={handleDocChange}
                      />
                      <span>{doc}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="border-dashed border-2 border-gray-300 rounded-md p-6 text-center">
                <div className="text-gray-400 text-sm mb-2">Drag & drop file here</div>
                <div className="text-xs text-gray-500 mb-4">JPEG, PNG, PDF, and JPG formats, up to 5MB</div>
                <input type="file" accept=".jpg,.jpeg,.png,.pdf" onChange={handleFileChange} className="block mx-auto" />
              </div>

              <button
                onClick={handleSubmit}
                className="w-full bg-pink-600 hover:bg-pink-700 text-white py-2 rounded-md text-lg font-semibold"
              >
                Continue
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
