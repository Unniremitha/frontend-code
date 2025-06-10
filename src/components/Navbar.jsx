import { LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Navbar() {
 const navigate = useNavigate();

  const handleLogout = () => {
    // Optional: Clear localStorage/sessionStorage
    localStorage.clear();

    // Navigate to login page
    navigate('/');
  };

  return (
    <header className="w-full h-16 bg-white shadow flex items-center justify-between px-6">
      <h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600">Welcome, Admin</span>
        <img
          className="w-8 h-8 rounded-full object-cover"
          src="https://i.pravatar.cc/40"
          alt="Avatar"
        />
        <button
          onClick={handleLogout}
          className="p-2 hover:bg-gray-100 rounded-full transition"
          title="Logout"
        >
          <LogOut size={20} className="text-gray-600 hover:text-pink-600" />
        </button>
      </div>
    </header>
  );
}