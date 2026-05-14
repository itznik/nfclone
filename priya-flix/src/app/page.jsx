'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const router = useRouter();

  const handleLogin = (e) => {
    e.preventDefault();
    if (id.toLowerCase() === 'happy birthday' && password.toLowerCase() === 'love') {
      router.push('/profiles');
    } else {
      setError('Incorrect details. Hint: Try "happy birthday" and "love"');
    }
  };

  return (
    <div className="relative min-h-screen w-full flex items-center justify-center overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}
      />
      
      {/* Gradient Overlay for Netflix Vibe */}
      <div className="absolute inset-0 bg-black/60 sm:bg-transparent sm:bg-gradient-to-b sm:from-black/80 sm:via-black/40 sm:to-black/80"></div>

      {/* Netflix Logo - Exact Hex Color and responsive positioning */}
      <div className="absolute top-4 left-4 sm:top-6 sm:left-10 z-20">
        <h1 className="text-[#E50914] text-3xl sm:text-5xl font-black tracking-tighter">
          PRIYAFLIX
        </h1>
      </div>

      {/* Login Form Container */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="relative z-10 w-full max-w-[90%] sm:max-w-md bg-black/80 sm:bg-black/75 p-8 sm:p-16 rounded-md shadow-2xl mt-12 sm:mt-0"
      >
        <h2 className="text-white text-2xl sm:text-3xl font-bold mb-6 sm:mb-8">Sign In</h2>
        
        {error && (
          <motion.div 
            initial={{ opacity: 0 }} 
            animate={{ opacity: 1 }} 
            className="bg-[#e87c03] p-3 rounded mb-4 text-sm text-white"
          >
            {error}
          </motion.div>
        )}

        <form onSubmit={handleLogin} className="flex flex-col gap-4">
          <input 
            type="text" 
            placeholder="Email or phone number" 
            className="w-full bg-[#333] text-white px-4 py-3 sm:py-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm sm:text-base"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-[#333] text-white px-4 py-3 sm:py-4 rounded focus:outline-none focus:ring-2 focus:ring-gray-500 transition-all text-sm sm:text-base"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            /* Fixed standard red background, slightly darker red on hover */
            className="w-full bg-[#E50914] text-white py-3 sm:py-4 rounded font-bold mt-4 hover:bg-[#C11119] transition-colors duration-300 text-sm sm:text-base"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
}
