'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';
import { siteConfig } from '../../lib/config';

export default function Profiles() {
  const router = useRouter();

  const handleProfileSelect = async (profile) => {
    if (profile.isMain) {
      try {
        const audio = new Audio('/bg-music.mp3'); 
        audio.volume = 0.5;
        audio.loop = true;
        // ERROR HANDLING: Await the play promise to catch browser autoplay blocks
        await audio.play();
      } catch (error) {
        console.warn("Audio was blocked by the browser, continuing without it.", error);
      }
    }
    
    router.push('/browse');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.8, y: 20 },
    visible: { opacity: 1, scale: 1, y: 0 }
  };

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center px-4">
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="flex flex-col items-center w-full max-w-4xl"
      >
        <motion.h1 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-white text-3xl sm:text-5xl mb-8 sm:mb-12 font-medium text-center"
        >
          Who's watching?
        </motion.h1>
        
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full px-8 sm:px-0 justify-items-center">
          {/* Mapped from our central config file */}
          {siteConfig.profiles.map((profile) => (
            <motion.div 
              key={profile.id}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -5 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleProfileSelect(profile)}
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-md border-[3px] border-transparent group-hover:border-white overflow-hidden transition-all duration-300 shadow-lg relative bg-[#333]">
                <img 
                  src={profile.img} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                  onError={(e) => e.target.src = siteConfig.placeholderImage}
                />
              </div>
              <span className="text-gray-400 group-hover:text-white mt-4 text-sm sm:text-lg md:text-xl transition-colors font-medium">
                {profile.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        <motion.button 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1 }}
          className="mt-12 sm:mt-16 px-6 py-2 border border-gray-500 text-gray-500 hover:text-white hover:border-white transition-colors duration-300 tracking-widest text-sm sm:text-base"
        >
          MANAGE PROFILES
        </motion.button>
      </motion.div>
    </div>
  );
}
