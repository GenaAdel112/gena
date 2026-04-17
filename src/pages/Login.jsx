import React, { useState } from 'react';
import { HelpCircle, Globe } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import { loginWithEmployeeId } from '../services/authService';
import buildingBg from '../assets/building_bg.png';

const Login = () => {
  const [fullName, setFullName] = useState('');
  const [employeeId, setEmployeeId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    setLoading(true);
    
    // Simulate a quick loading effect for a premium feel
    setTimeout(() => {
      setLoading(false);
      navigate('/dashboard');
    }, 800);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col font-sans relative">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 w-full absolute top-0 left-0 z-20">
        <div className="flex items-center">
          <h1 className="text-xl font-bold font-serif tracking-tight text-[#06142e]">
            AASTMT <span className="font-normal text-gray-700">Room Management</span>
          </h1>
        </div>
        <div className="flex items-center gap-7 text-sm font-medium text-gray-800">
          <Link to="/login" className="font-bold cursor-pointer border-b-2 border-[#06142e]">Login</Link>
          <Link to="/dashboard/halls" className="text-gray-500 hover:text-gray-800 transition-colors">Explore Rooms</Link>
          <div className="flex items-center gap-4 ml-3">
            <HelpCircle size={20} className="text-gray-800 cursor-pointer hover:opacity-70 transition-opacity" />
            <Globe size={20} className="text-gray-800 cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20 mt-8">
        <div className="flex w-full max-w-5xl h-[640px] bg-white shadow-2xl rounded-sm overflow-hidden">
          
          {/* Left Side - Dark Overlay with Text */}
          <div className="w-[55%] relative flex flex-col justify-end p-16 text-white overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 z-0">
              <img 
                src={buildingBg} 
                alt="AASTMT Building" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#06142e]/85 mix-blend-multiply"></div>
              <div className="absolute inset-0 bg-gradient-to-t from-[#06142e] via-transparent to-transparent opacity-60"></div>
            </div>
            
            <div className="relative z-10 space-y-5">
              <p className="text-[10px] font-bold tracking-[0.3em] text-blue-300 uppercase">INSTITUTIONAL ACCESS</p>
              <h2 className="text-6xl font-serif leading-[1.1] max-w-lg">
                Securing the Future of Academic Space
              </h2>
              <p className="text-blue-100/80 text-base max-w-md pt-4 leading-relaxed font-light">
                The Arab Academy for Science, Technology and Maritime Transport central management portal for faculty and administrative scheduling.
              </p>
            </div>
          </div>

          {/* Right Side - Login Form */}
          <div className="w-[45%] flex flex-col justify-center px-16">
            <h3 className="text-3xl font-serif text-[#06142e] mb-2">Sign In</h3>
            <p className="text-sm text-gray-500 mb-8">Enter your credentials to access the room management dashboard.</p>
            
            {error && (
              <div className="bg-red-50 text-red-500 p-3 mb-6 text-sm rounded border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleLogin} className="space-y-5">
              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">FULL NAME</label>
                <input 
                  type="text" 
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  placeholder="Enter your name"
                  className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all"
                />
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2">EMPLOYEE ID</label>
                <input 
                  type="text" 
                  value={employeeId}
                  onChange={(e) => setEmployeeId(e.target.value)}
                  placeholder="AAST-00000"
                  className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all font-mono"
                  required
                />
              </div>

              <div>
                <div className="flex justify-between items-center mb-2">
                  <label className="block text-xs font-bold text-gray-700 tracking-wider">PASSWORD</label>
                  <a href="#" className="text-xs text-gray-500 hover:text-[#06142e]">Forgot?</a>
                </div>
                <input 
                  type="password" 
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all tracking-widest"
                  required
                />
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#06142e] text-white font-semibold rounded py-3.5 mt-4 hover:bg-[#0a1e45] transition-colors flex justify-center items-center gap-2"
              >
                {loading ? 'LOGGING IN...' : 'LOG IN'}
              </button>
            </form>

            <div className="mt-8 pt-8 border-t border-gray-100 text-center relative">
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-white px-4 text-[10px] font-bold text-gray-400 tracking-widest">
                SECURE ACCESS ONLY
              </span>
              <p className="text-xs text-gray-500">
                Having trouble? <a href="#" className="text-gray-800 font-bold hover:underline">Contact IT Support</a>
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full flex justify-between items-center px-10 py-6 border-t border-gray-200 mt-auto bg-[#f8fafc]">
        <div className="text-xs text-gray-500 flex-1">
          © 2024 Arab Academy for Science, Technology and Maritime Transport. All Rights Reserved.
        </div>
        <div className="flex gap-8 text-xs font-medium text-gray-500">
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy Policy</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Terms of Service</a>
          <a href="#" className="hover:text-gray-800 transition-colors">IT Support</a>
        </div>
      </footer>
    </div>
  );
};

export default Login;
