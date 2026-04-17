import React, { useState } from 'react';
import { HelpCircle, Globe, ArrowLeft } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';
import buildingBg from '../assets/building_bg.png';

const SignUp = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    employeeId: '',
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }
    setError('');
    setLoading(true);
    
    // For demo purposes, we'll just simulate a successful registration
    setTimeout(() => {
      setLoading(false);
      navigate('/login');
    }, 1500);
  };

  return (
    <div className="min-h-screen bg-[#f4f7f9] flex flex-col font-sans relative">
      {/* Header */}
      <header className="flex justify-between items-center px-10 py-6 w-full absolute top-0 left-0 z-20">
        <div className="flex items-center">
          <Link to="/" className="text-xl font-bold font-serif tracking-tight text-[#06142e] flex items-center gap-2">
            AASTMT <span className="font-normal text-gray-700">Room Management</span>
          </Link>
        </div>
        <div className="flex items-center gap-7 text-sm font-medium text-gray-800">
          <Link to="/login" className="text-gray-500 hover:text-gray-800 transition-colors">Login</Link>
          <span className="font-bold cursor-pointer border-b-2 border-[#06142e]">Explore Rooms</span>
          <div className="flex items-center gap-4 ml-3">
            <HelpCircle size={20} className="text-gray-800 cursor-pointer hover:opacity-70 transition-opacity" />
            <Globe size={20} className="text-gray-800 cursor-pointer hover:opacity-70 transition-opacity" />
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-1 flex items-center justify-center px-4 py-20 mt-8">
        <div className="flex w-full max-w-6xl h-[720px] bg-white shadow-2xl rounded-sm overflow-hidden">
          
          {/* Left Side - Image with Text */}
          <div className="w-[45%] relative flex flex-col justify-end p-16 text-white overflow-hidden">
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
              <p className="text-[10px] font-bold tracking-[0.3em] text-blue-300 uppercase">JOIN THE INSTITUTION</p>
              <h2 className="text-5xl font-serif leading-[1.1]">
                Academic Excellence, Managed
              </h2>
              <p className="text-blue-100/80 text-base max-w-md pt-4 leading-relaxed font-light">
                Register to gain access to the unified scheduling and hall management system of the academy.
              </p>
            </div>
          </div>

          {/* Right Side - Sign Up Form */}
          <div className="w-[55%] flex flex-col justify-center px-20 overflow-y-auto pt-10 pb-10">
            <div className="mb-6">
               <Link to="/login" className="flex items-center gap-2 text-xs text-gray-400 hover:text-[#06142e] transition-colors mb-4 transform hover:-translate-x-1 duration-200">
                  <ArrowLeft size={14} /> Back to Login
               </Link>
               <h3 className="text-3xl font-serif text-[#06142e] mb-2">Create Account</h3>
               <p className="text-sm text-gray-500">Provide your official academic details to get started.</p>
            </div>
            
            {error && (
              <div className="bg-red-50 text-red-500 p-3 mb-6 text-sm rounded border border-red-200">
                {error}
              </div>
            )}

            <form onSubmit={handleSignUp} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Full Name</label>
                  <input 
                    type="text" 
                    name="fullName"
                    value={formData.fullName}
                    onChange={handleChange}
                    placeholder="Enter your name"
                    className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Employee ID</label>
                  <input 
                    type="text" 
                    name="employeeId"
                    value={formData.employeeId}
                    onChange={handleChange}
                    placeholder="AAST-00000"
                    className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all font-mono"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Professional Email</label>
                <input 
                  type="email" 
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="yourname@aastmt.edu"
                  className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all"
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Password</label>
                  <input 
                    type="password" 
                    name="password"
                    value={formData.password}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all tracking-widest"
                    required
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-gray-700 tracking-wider mb-2 uppercase">Confirm</label>
                  <input 
                    type="password" 
                    name="confirmPassword"
                    value={formData.confirmPassword}
                    onChange={handleChange}
                    placeholder="••••••••"
                    className="w-full bg-[#f0f2f5] text-gray-800 border-none outline-none rounded py-3 px-4 text-sm focus:ring-2 focus:ring-[#06142e]/20 transition-all tracking-widest"
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 pt-2">
                <input type="checkbox" id="terms" className="mt-1 accent-[#06142e]" required />
                <label htmlFor="terms" className="text-[11px] text-gray-500 leading-relaxed uppercase tracking-wide">
                  I agree to the <span className="text-[#06142e] font-bold cursor-pointer">Terms of Service</span> and <span className="text-[#06142e] font-bold cursor-pointer">Institutional Policy</span>.
                </label>
              </div>

              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#06142e] text-white font-semibold rounded py-3.5 mt-4 hover:bg-[#0a1e45] transition-colors flex justify-center items-center gap-2 shadow-lg shadow-blue-900/10"
              >
                {loading ? 'CREATING ACCOUNT...' : 'REGISTER'}
              </button>
            </form>

            <div className="mt-8 pt-6 border-t border-gray-100 text-center">
              <p className="text-xs text-gray-500 tracking-wide uppercase">
                Already have an account? <Link to="/login" className="text-gray-800 font-bold hover:underline">Log In</Link>
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
        <div className="flex gap-8 text-xs font-medium text-gray-500 uppercase tracking-wider">
          <a href="#" className="hover:text-gray-800 transition-colors">Privacy</a>
          <a href="#" className="hover:text-gray-800 transition-colors">Terms</a>
          <a href="#" className="hover:text-gray-800 transition-colors">IT Support</a>
        </div>
      </footer>
    </div>
  );
};

export default SignUp;
