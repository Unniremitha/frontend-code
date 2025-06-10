import { Home, Settings, User } from 'lucide-react';

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-white shadow-md px-4 py-6 space-y-6">
      <h2 className="text-2xl font-bold text-pink-600 mb-4">KSMART</h2>
      <nav className="flex flex-col space-y-4">
        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
          <Home size={18} /> Dashboard
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
          <User size={18} /> Users
        </a>
        <a href="#" className="flex items-center gap-2 text-gray-700 hover:text-pink-600 transition">
          <Settings size={18} /> Settings
        </a>
      </nav>
    </div>
  );
}
