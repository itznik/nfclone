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

  const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 }
  }
};

const itemVariants = {
  hidden: { opacity: 0, scale: 0.5, y: 20 },
  visible: { opacity: 1, scale: 1, y: 0 }
};

return (
  <div className="min-h-screen bg-[#141414] flex items-center justify-center">
    <motion.div 
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="text-center"
    >
      <h1 className="text-white text-3xl sm:text-5xl mb-12">Who's watching?</h1>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
        {profiles.map((profile, i) => (
          <motion.div 
            key={i} 
            variants={itemVariants}
            whileHover={{ y: -10 }} // Subtle float up on hover
            className="flex flex-col items-center cursor-pointer group"
            onClick={() => handleProfileSelect(profile)}
          >
            <div className="w-32 h-32 md:w-40 md:h-40 rounded-md border-[3px] border-transparent group-hover:border-white transition-all overflow-hidden shadow-lg">
              <img src={profile.img} className="object-cover w-full h-full" />
            </div>
            <span className="text-gray-400 group-hover:text-white mt-4 text-xl">{profile.name}</span>
          </motion.div>
        ))}
      </div>
    </motion.div>
  </div>
);
}
