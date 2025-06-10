import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import Login from './pages/Login';
import Register from './pages/Register';
import RegistrationSuccess from './pages/RegistrationSuccess';
import Kycverify from './pages/Kycverify';
import Dashboard from './pages/Dashboard';
import Declaration from './pages/Declaration';
import KycSuccess from './pages/KycSuccess';
import KycPassportUpload from './pages/KycPassportUpload';
import PassportVerification from './pages/PassportVerification';
import DocumentSuccess from './pages/DocumentSuccess';
import OtherDocument from './pages/OtherDocument';

function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} /> 
         <Route path="/register" element={<Register />} />
         <Route path="/registration-success" element={<RegistrationSuccess />} />
        <Route path="/kycverify" element={<Kycverify />} /> 
        <Route path="/declaration" element={<Declaration />} />
        <Route path="/kyc-success" element={<KycSuccess />} />     
         <Route path="/kyc-passportupload" element={<KycPassportUpload />} />   
         <Route path="/passportverification" element={<PassportVerification />} />
         <Route path="/document-success" element={<DocumentSuccess />} />
         <Route path="/other-document" element={<OtherDocument />} />
      </Routes>
    </Router>
  );
  
}

export default App
