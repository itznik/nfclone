'use client';

import { useRouter } from 'next/navigation';
import { motion } from 'framer-motion';

export default function Profiles() {
  const router = useRouter();

  // 4 Profiles mapped out
  const profiles = [
    { name: "Priya 👑", img: "/priya.jpg", isMain: true },
    { name: "Nikunj", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", isMain: false },
    { name: "Guests", img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg", isMain: false },
    { name: "Kids", img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqhqnc3ntd0.jpg", isMain: false }
  ];

  const handleProfileSelect = (profile) => {
    // Only play music if it's the birthday girl's profile, or you can remove the IF block to play it for anyone
    if (profile.isMain) {
      const audio = new Audio('/bg-music.mp3'); 
      audio.volume = 0.5;
      audio.loop = true;
      audio.play().catch(error => console.log("Audio play failed:", error));
    }
    
    router.push('/browse');
  };

  return (
    <div className="min-h-screen bg-[#141414] flex flex-col items-center justify-center px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4 }}
        className="flex flex-col items-center w-full max-w-4xl"
      >
        <h1 className="text-white text-3xl sm:text-5xl mb-8 sm:mb-12 font-medium text-center">
          Who's watching?
        </h1>
        
        {/* Grid: 2 columns on small screens, 4 columns on medium/large screens */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 md:gap-10 w-full px-8 sm:px-0 justify-items-center">
          {profiles.map((profile, index) => (
            <motion.div 
              key={index}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="flex flex-col items-center cursor-pointer group"
              onClick={() => handleProfileSelect(profile)}
            >
              <div className="w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 rounded-md border-[3px] border-transparent group-hover:border-white overflow-hidden transition-all duration-300">
                <img 
                  src={profile.img} 
                  alt={profile.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-gray-400 group-hover:text-white mt-4 text-sm sm:text-lg md:text-xl transition-colors font-medium">
                {profile.name}
              </span>
            </motion.div>
          ))}
        </div>
        
        {/* Authentic Netflix 'Manage Profiles' button */}
        <button className="mt-12 sm:mt-16 px-6 py-2 border border-gray-500 text-gray-500 hover:text-white hover:border-white transition-colors duration-300 tracking-widest text-sm sm:text-base">
          MANAGE PROFILES
        </button>
      </motion.div>
    </div>
  );
}
