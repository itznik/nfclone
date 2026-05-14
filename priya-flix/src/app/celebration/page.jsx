'use client';

import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPlay, FaPause, FaVolumeMute, FaVolumeUp, FaArrowLeft } from 'react-icons/fa';
import { useRouter } from 'next/navigation';
import { siteConfig } from '../../lib/config';

export default function Celebration() {
  const [introFinished, setIntroFinished] = useState(false);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);
  const router = useRouter();

  // Handle the cinematic intro timing & Auto-play Audio
  useEffect(() => {
    // Start intro timer
    const timer = setTimeout(() => {
      setIntroFinished(true);
    }, 4500);

    // Attempt to play audio immediately
    if (audioRef.current) {
      audioRef.current.volume = 0.5; // 50% volume
      audioRef.current.play().catch(err => {
        console.log("Browser blocked autoplay. User must click play.", err);
        setIsPlaying(false); // Update state if browser blocks it
      });
    }

    return () => clearTimeout(timer);
  }, []);

  // Sync Play/Pause button with actual audio
  const togglePlay = () => {
    if (isPlaying) {
      audioRef.current.pause();
    } else {
      audioRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  // Sync Mute button with actual audio
  const toggleMute = () => {
    audioRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <div className="min-h-screen bg-black text-white overflow-hidden font-sans">
      
      {/* --- HIDDEN HTML5 AUDIO ELEMENT --- */}
      <audio ref={audioRef} src={siteConfig.celebration.audioSrc} loop className="hidden" />

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
                className="text-white/70 hover:text-white transition-colors flex items-center gap-2 text-lg drop-shadow-md"
              >
                <FaArrowLeft /> <span className="hidden md:inline font-medium">Back to Browse</span>
              </button>
            </div>

            {/* Simulated Video Player Section */}
            <div className="relative w-full h-[50vh] md:h-[70vh] bg-[#111] border-b border-[#333]">
              <div 
                className="absolute inset-0 bg-cover bg-center opacity-60"
                style={{ backgroundImage: `url('${siteConfig.celebration.videoPlaceholder}')` }}
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />

              {/* REAL Player Controls */}
              <div className="absolute bottom-0 left-0 w-full p-6 md:p-10 flex items-center justify-between z-20">
                <div className="flex items-center gap-6">
                  <button onClick={togglePlay} className="text-2xl md:text-3xl hover:scale-110 transition-transform">
                    {isPlaying ? <FaPause /> : <FaPlay />}
                  </button>
                  <button onClick={toggleMute} className="text-2xl md:text-3xl hover:scale-110 transition-transform">
                    {isMuted ? <FaVolumeMute /> : <FaVolumeUp />}
                  </button>
                  <span className="text-sm md:text-lg font-medium tracking-wide">
                    Pilu's 21st - The Final Episode
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <div className="hidden md:block w-48 h-1 bg-white/30 rounded overflow-hidden">
                    <div className={`w-3/4 h-full bg-[#E50914] ${isPlaying ? 'animate-pulse' : ''}`}></div>
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
                  <span className="text-green-500 font-bold text-lg md:text-xl">99% Match</span>
                  <span className="border border-white/40 text-white/80 px-2 py-0.5 text-xs md:text-sm rounded-sm">2026</span>
                  <span className="border border-white/40 text-white/80 px-2 py-0.5 text-xs md:text-sm rounded-sm">HD</span>
                </div>

                <h1 className="text-4xl md:text-6xl font-bold mb-10 text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">
                  Happy Birthday, Pilu.
                </h1>

                <div className="space-y-6 text-lg md:text-xl text-gray-300 leading-relaxed font-light">
                  {siteConfig.celebration.letter.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                  ))}
                  
                  <p className="font-bold text-white pt-8 text-2xl">
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
