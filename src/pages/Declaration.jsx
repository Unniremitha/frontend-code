import { useState } from "react";
import { useNavigate } from "react-router-dom";


const Declaration = ({ closeModal }) => {
  const [language, setLanguage] = useState("eng");
  const [agreed, setAgreed] = useState(true);
  const navigate = useNavigate(); // <-- for navigation


  const handleProceed = () => {
    if (agreed) {
        closeModal(); 
      navigate("/register"); // Navigate to the route
    }
  };

  return (
   
    <div className="max-w-xl mx-auto bg-white rounded-lg shadow p-6 mt-10">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">Declaration</h2>

      {/* Language Tabs */}
      <div className="flex border-b mb-4">
        <button
          onClick={() => setLanguage("eng")}
          className={`px-4 py-2 font-medium ${
            language === "eng"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-500"
          }`}
        >
          Eng (US)
        </button>
        <button
          onClick={() => setLanguage("mal")}
          className={`px-4 py-2 font-medium ${
            language === "mal"
              ? "text-pink-600 border-b-2 border-pink-600"
              : "text-gray-500"
          }`}
        >
          Malayalam
        </button>
      </div>

      {/* Consent Text */}
      <p className="text-gray-700 mb-6 text-sm leading-relaxed">
        I hereby give my consent to K-SMART Kerala to obtain my Aadhaar number
        and name for authentication with UIDAI. Ksmart Kerala has informed me
        that my identity information will only be used for authentication
        purpose. In case of a child below 18 years, parent/legal guardian have
        the responsibility for giving the consent for sharing information of the
        child.
      </p>

      {/* Checkbox */}
      <label className="flex items-center text-sm mb-6">
        <input
          type="checkbox"
          checked={agreed}
          onChange={(e) => setAgreed(e.target.checked)}
          className="form-checkbox text-pink-600 mr-2"
        />
        <span className="text-gray-800 font-medium">I Agree</span>
      </label>

      {/* Buttons */}
      <div className="flex justify-end space-x-4"> 
        <button 
        onClick={closeModal}
        //  onClick={() => navigate("/")} 
        className="border border-pink-500 text-pink-600 px-6 py-2 rounded-md hover:bg-pink-50">
         
          Close
        </button>
        <button
          disabled={!agreed}
          onClick={handleProceed}
          className={`px-6 py-2 rounded-md text-white ${
            agreed
              ? "bg-pink-600 hover:bg-pink-700"
              : "bg-pink-300 cursor-not-allowed"
          }`}
        >
          Proceed
        </button>
      </div>
    </div>
  );
};
 

export default Declaration;