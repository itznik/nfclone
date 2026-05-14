// src/components/Row.jsx
'use client';

import { motion } from 'framer-motion';

export default function Row({ title, photos }) {
  return (
    <div className="pl-4 sm:pl-10 md:pl-12 mt-6 sm:mt-10 mb-8">
      <h2 className="text-white text-lg sm:text-xl md:text-2xl font-bold mb-3 sm:mb-4 drop-shadow-md">
        {title}
      </h2>
      
      {/* Horizontal scrolling container */}
      <div className="flex space-x-3 sm:space-x-4 overflow-x-scroll scrollbar-hide pb-4 snap-x">
        {photos.map((photo, index) => (
          <motion.div 
            key={index} 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.2 }}
            className="snap-center shrink-0 w-[160px] sm:w-[220px] md:w-[280px] aspect-video relative cursor-pointer group rounded-md overflow-hidden"
          >
            <img 
              src={photo.url} 
              alt={`Memory ${index}`} 
              className="w-full h-full object-cover rounded-md"
            />
            {/* Hover Caption Overlay */}
            <div className="absolute inset-0 bg-black/60 opacity-0 md:group-hover:opacity-100 transition-opacity duration-300 flex items-end p-3 sm:p-4">
              <p className="text-white text-xs sm:text-sm font-semibold">{photo.caption}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
