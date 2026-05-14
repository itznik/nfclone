'use client';
import { motion } from 'framer-motion';

export default function Row({ title, photos }) {
  return (
    <motion.div 
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="pl-4 md:pl-12 mt-10"
    >
      <h2 className="text-white text-xl md:text-2xl font-bold mb-4">{title}</h2>
      <div className="flex space-x-4 overflow-x-scroll scrollbar-hide pb-5">
        {photos.map((photo, i) => (
          <motion.div 
            key={i}
            whileHover={{ 
              scale: 1.1,
              transition: { duration: 0.3 }
            }}
            className="min-w-[200px] md:min-w-[300px] aspect-video relative rounded-md overflow-hidden cursor-pointer shadow-md hover:shadow-2xl"
          >
            <img src={photo.url} className="w-full h-full object-cover" />
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
}
