'use client';

import { motion } from 'framer-motion';

export default function Row({ title, photos, speed = 40 }) {
  // We duplicate the photos array multiple times to ensure the loop never breaks, even on ultra-wide screens
  const loopPhotos = [...photos, ...photos, ...photos, ...photos];

  return (
    <div className="pl-4 sm:pl-10 md:pl-12 mt-8 sm:mt-12 mb-8 relative z-20 group/row">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 drop-shadow-md">
        {title}
      </h2>
      
      {/* Outer container to clip the hidden overflow */}
      <div className="overflow-hidden relative w-full">
        {/* 
          The inner container animates left infinitely. 
          group-hover/row pauses it when she interacts!
        */}
        <div 
          className="flex space-x-3 sm:space-x-4 pt-2 w-max animate-infinite-scroll group-hover/row:[animation-play-state:paused]"
          style={{ animationDuration: `${speed}s` }}
        >
          {loopPhotos.map((photo, index) => (
            <motion.div 
              key={index} 
              whileHover={{ 
                scale: 1.05,
                boxShadow: "0px 0px 20px rgba(229, 9, 20, 0.6)",
                y: -5,
                zIndex: 30
              }}
              transition={{ duration: 0.3 }}
              className="shrink-0 w-[160px] sm:w-[220px] md:w-[280px] aspect-video relative cursor-pointer rounded-md overflow-hidden bg-[#222]"
            >
              <img 
                src={photo.url} 
                alt={photo.caption || `Memory ${index}`} 
                className="w-full h-full object-cover rounded-md pointer-events-none"
              />
              
              {/* Premium Hover Caption Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
                <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-lg">
                  {photo.caption}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Injecting CSS directly for the seamless infinite scroll */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes infiniteScroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-infinite-scroll {
          animation: infiniteScroll linear infinite;
        }
      `}} />
    </div>
  );
}
