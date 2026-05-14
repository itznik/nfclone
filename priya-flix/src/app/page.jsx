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
      // Smooth route transition
      router.push('/profiles');
    } else {
      setError('Incorrect details. Hint: What day is it?');
    }
  };

  return (
    <div className="relative h-screen w-full flex items-center justify-center overflow-hidden">
      {/* Background Image - Replace with a collage or a nice dark image of you two */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40"
        style={{ backgroundImage: `url('https://assets.nflxext.com/ffe/siteui/vlv3/a73c4363-1dcd-4719-b3b1-3725418fd91d/fe1147dd-78be-44aa-a0e5-2d2994305a13/IN-en-20231016-popsignuptwoweeks-perspective_alpha_website_large.jpg')` }}
      />
      
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-black/60 sm:bg-transparent sm:bg-gradient-to-b sm:from-black/80 sm:via-black/40 sm:to-black/80"></div>

      {/* Netflix Logo Top Left */}
      <div className="absolute top-4 left-4 sm:top-8 sm:left-12 z-20">
        <h1 className="text-netflix text-4xl sm:text-5xl font-black tracking-tighter">
          PRIYAFLIX
        </h1>
      </div>

      {/* Login Form Container with Framer Motion */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="relative z-10 w-full max-w-md bg-black/80 sm:bg-black/75 p-10 sm:p-16 rounded-md"
      >
        <h2 className="text-white text-3xl font-bold mb-8">Sign In</h2>
        
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
            className="w-full bg-[#333] text-white px-4 py-3 rounded focus:outline-none focus:bg-[#454545] transition-colors"
            value={id}
            onChange={(e) => setId(e.target.value)}
          />
          <input 
            type="password" 
            placeholder="Password" 
            className="w-full bg-[#333] text-white px-4 py-3 rounded focus:outline-none focus:bg-[#454545] transition-colors"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button 
            type="submit" 
            className="w-full bg-netflix text-white py-3 rounded font-bold mt-4 hover:bg-[#f40612] transition-colors"
          >
            Sign In
          </button>
        </form>
      </motion.div>
    </div>
  );
}
