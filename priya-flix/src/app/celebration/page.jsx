'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';

export default function Celebration() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const router = useRouter();

  // Handle the cinematic intro timing
  useEffect(() => {
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 4500); // Intro lasts 4.5 seconds
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      <iframe 
        src="https://archive.org/embed/zehar-koshal-world.-com?autoplay=1" 
        width="0" 
        height="0" 
        frameBorder="0" 
        webkitallowfullscreen="true" 
        mozallowfullscreen="true" 
        allowFullScreen=""
        allow="autoplay"
        className="hidden"
      ></iframe>
      
      {/* --- CINEMATIC INTRO SEQUENCE --- */}
      <AnimatePresence>
        {!introFinished && (
          <motion.div 
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1.1 }}
              transition={{ duration: 2, ease: "easeInOut" }}
              className="flex flex-col items-center"
            >
              <span className="text-[#E50914] text-7xl md:text-9xl font-black mb-4 tracking-tighter">
                N
              </span>
              <span className="text-gray-400 tracking-[0.4em] text-sm md:text-xl font-medium">
                A NIKUNJ PRODUCTION
              </span>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* --- MAIN CELEBRATION CONTENT --- */}
      <AnimatePresence>
        {introFinished && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2, delay: 0.5 }}
            className="relative min-h-screen flex flex-col"
          >
            {/* Back Button */}
            <div className="absolute top-6 left-6 md:top-10 md:left-10 z-40">
              <button 
                onClick={() => router.push('/browse')}
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-lg"
              >
                <FaArrowLeft /> <span className="hidden md:inline font-medium">Back to Browse</span>
              </button>
            </div>

            {/* Simulated Video Player Section */}
            <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#111] border-b border-[#333]">
              {/* 
                Replace this image with an actual <video> tag if you have a birthday video! 
                Example: <video src="/birthday-video.mp4" autoPlay loop className="w-full h-full object-cover opacity-80" />
              */}
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url('https://i.postimg.cc/28YX2Hxm/IMG-3056.avif')` }}
              />
              
              {/* Bottom Gradient for Player Controls */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* Fake Player Controls to sell the Netflix illusion */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex items-center justify-between z-20">
                <div className="flex items-center gap-6">
                  <button onClick={() => setIsPlaying(!isPlaying)} className="text-2xl md:text-3xl hover:scale-110 transition-transform">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={() => setIsMuted(!isMuted)} className="text-2xl md:text-3xl hover:scale-110 transition-transform">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <span className="text-sm md:text-lg font-medium tracking-wide">Pilu's 21st - The Final Episode</span>
                </div>
                <div className="flex items-center gap-4">
                  {/* Fake Progress Bar */}
                  <div className="hidden md:block w-48 h-1 bg-white/30 rounded overflow-hidden">
                    <div className="w-3/4 h-full bg-[#E50914]"></div>
                  </div>
                </div>
              </div>
            </div>

            {/* The Heartfelt Letter Section */}
            <div className="flex-1 px-6 py-12 md:px-24 md:py-16 max-w-5xl mx-auto w-full">
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 1, duration: 1 }}
              >
                <div className="flex items-center gap-4 mb-6">
                  <span className="text-green-500 font-bold text-lg md:text-xl">100% Match</span>
                  <span className="border border-white/40 text-white/80 px-2 py-0.5 text-xs md:text-sm rounded-sm">2026</span>
                  <span className="border border-white/40 text-white/80 px-2 py-0.5 text-xs md:text-sm rounded-sm">HD</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-8 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Happy Birthday, Pilu.
                </h1>

                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  <p>
                    Every great show has a star, and in the story of my life, it has always been you. 
                  </p>
                  
                  {/* This is a great place to drop some lyrical flow or a deep poetic verse */}
                  <div className="pl-6 border-l-4 border-[#E50914] my-8 py-2 text-white italic">
                    <p>"Write a custom verse here, drop some lyrical wordplay, or just write out your favorite memories. This is your center stage to tell her exactly how you feel."</p>
                  </div>

                  <p>
                    I wanted to build something completely unique for you this year. Because a standard card just isn't enough for someone who means this much to me. Here is to all our past seasons together, and to the hundreds of episodes we still have left to shoot.
                  </p>
                  <p className="font-bold text-white pt-4">
                    Love always, <br/>
                    Nikunj
                  </p>
                </div>
              </motion.div>
            </div>

          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
