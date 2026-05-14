'use client';

import { useRouter } from 'next/navigation';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';
import Navbar from '../../components/Navbar'; 
import Row from '../../components/Row';
import { siteConfig } from '../../lib/config';

export default function Browse() {
  const router = useRouter();

  const handlePlay = () => {
    router.push('/celebration');
  };

  return (
    <div className="min-h-screen bg-[#141414] pb-20 overflow-x-hidden">
      <Navbar />

      {/* Cinematic Billboard / Hero Section */}
      <div className="relative w-full h-[70vh] sm:h-[80vh] md:h-[95vh] overflow-hidden">
        
        {/* Animated Background Image - Mapped from Config */}
        <motion.div 
          initial={{ scale: 1 }}
          animate={{ scale: 1.15 }}
          transition={{ duration: 20, ease: "linear", repeat: Infinity, repeatType: "reverse" }}
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('${siteConfig.billboard.bgImage}')` }}
        />
        
        <div className="absolute inset-0 bg-gradient-to-r from-black/95 via-black/50 to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-[#141414]/40 to-transparent z-10" />

        {/* Billboard Content */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 1.2, ease: "easeOut" }}
          className="absolute top-[35%] sm:top-[40%] left-4 sm:left-10 md:left-12 w-full max-w-[90%] sm:max-w-[60%] md:max-w-[45%] z-20"
        >
          <div className="flex items-center gap-2 mb-3 sm:mb-4">
            <motion.span 
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 1, duration: 0.5, type: "spring" }}
              className="text-[#E50914] text-xl sm:text-3xl font-black shadow-lg"
            >
              N
            </motion.span>
            <span className="text-gray-300 text-xs sm:text-sm font-bold tracking-[0.25em] drop-shadow-md">
              O R I G I N A L
            </span>
          </div>

          <h1 className="text-white text-5xl md:text-7xl lg:text-8xl font-bold drop-shadow-2xl mb-4 tracking-tight">
            {siteConfig.billboard.title}
          </h1>
          
          <p className="text-white text-sm sm:text-base md:text-lg lg:text-xl mb-8 drop-shadow-lg line-clamp-3 sm:line-clamp-none font-medium leading-relaxed">
            {siteConfig.billboard.description}
          </p>

          <div className="flex flex-row gap-3 sm:gap-4">
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(255, 255, 255, 0.8)" }}
              whileTap={{ scale: 0.95 }}
              onClick={handlePlay}
              className="flex items-center justify-center gap-2 sm:gap-3 bg-white text-black px-6 sm:px-8 py-2 sm:py-3 rounded md:rounded-md font-bold transition-all text-sm sm:text-lg md:text-xl w-auto shadow-xl"
            >
              <FaPlay className="text-sm sm:text-lg md:text-xl" />
              Play
            </motion.button>
            <motion.button 
              whileHover={{ scale: 1.05, backgroundColor: "rgba(109, 109, 110, 0.4)" }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center justify-center gap-2 sm:gap-3 bg-gray-500/60 text-white px-6 sm:px-8 py-2 sm:py-3 rounded md:rounded-md font-bold transition-all text-sm sm:text-lg md:text-xl w-auto shadow-xl backdrop-blur-sm"
            >
              <FaInfoCircle className="text-sm sm:text-lg md:text-xl" />
              More Info
            </motion.button>
          </div>
        </motion.div>
      </div>

      {/* Rows Section - Mapped from Config */}
      <div className="-mt-20 sm:-mt-32 md:-mt-40 relative z-20 pb-12">
        <Row title="Trending Memories" photos={siteConfig.categories.trending} speed={35} />
        <Row title="Because You Watched: 'Our Adventures'" photos={siteConfig.categories.adventures} speed={45} />
        {/* Reusing trending but reversed to make it look like a different row */}
        <Row title="Critically Acclaimed Dates" photos={[...siteConfig.categories.trending].reverse()} speed={40} />
      </div>
    </div>
  );
}
