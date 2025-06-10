import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa';

export default function BackButton({ label = 'Back', className = '' }) {
  const navigate = useNavigate();

  return (
    <button
      className={`flex items-center text-sm text-gray-500 mb-4 ${className}`}
      onClick={() => navigate(-1)}
    >
      <FaArrowLeft className="mr-2" />

    </button>
  );
}
 