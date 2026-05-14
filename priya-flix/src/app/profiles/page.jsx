'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Profiles() {
  const router = useRouter();

  const handleProfileSelect = () => {
    // 1. Trigger the romantic background music
    const audio = new Audio('/bg-music.mp3'); // Ensure this file is in your public/ folder
    audio.volume = 0.5; // Set volume to 50% so it's not too loud
    audio.loop = true;
    audio.play().catch(error => console.log("Audio play failed:", error));

    // 2. Route to the main browse page
    router.push('/browse');
  };

  return (
    <div className="min-h-screen bg-dark flex flex-col items-center justify-center">
      {/* Page transition animation */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        className="flex flex-col items-center"
      >
        <h1 className="text-white text-3xl sm:text-5xl mb-10 font-medium">
          Who's watching?
        </h1>
        
        <div className="flex gap-8">
          {/* Priya's Profile Card */}
          <motion.div 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="flex flex-col items-center cursor-pointer group"
            onClick={handleProfileSelect}
          >
            <div className="w-32 h-32 sm:w-40 sm:h-40 rounded-md border-2 border-transparent group-hover:border-white overflow-hidden transition-all duration-300">
              {/* Replace with a cute square crop photo of Priya */}
              <img 
                src="/priya.jpg" 
                alt="Priya" 
                className="w-full h-full object-cover"
              />
            </div>
            <span className="text-gray-400 group-hover:text-white mt-4 text-xl sm:text-2xl transition-colors">
              Priya
            </span>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
