// src/app/browse/page.jsx
'use client';

import { useRouter } from 'next/navigation';
import { FaPlay, FaInfoCircle } from 'react-icons/fa';
import Navbar from '@components/Navbar'; // Ensure this path matches your setup
import Row from '@components/Row';

export default function Browse() {
  const router = useRouter();

  const handlePlay = () => {
    // This will route to the final birthday celebration page!
    router.push('/celebration');
  };

  // Sample data for your rows - replace with actual URLs of your photos
  const specialMoments = [
    { url: "https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?q=80&w=600&auto=format&fit=crop", caption: "Our first date" },
    { url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=600&auto=format&fit=crop", caption: "That trip to the mountains" },
    { url: "https://images.unsplash.com/photo-1518199266791-5375a83164ba?q=80&w=600&auto=format&fit=crop", caption: "Late night ice cream" },
    { url: "https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=600&auto=format&fit=crop", caption: "Just being silly" },
    { url: "https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&w=600&auto=format&fit=crop", caption: "Dressed up!" },
  ];

  const favoritePlaces = [
    { url: "https://images.unsplash.com/photo-1506157786151-b8491531f063?q=80&w=600&auto=format&fit=crop", caption: "The cafe" },
    { url: "https://images.unsplash.com/photo-1478827536114-da961b7f86d2?q=80&w=600&auto=format&fit=crop", caption: "Beach walk" },
    { url: "https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=600&auto=format&fit=crop", caption: "City lights" },
    { url: "https://images.unsplash.com/photo-1504609774668-dc1e355601ff?q=80&w=600&auto=format&fit=crop", caption: "Movie night" },
  ];

  return (
    <div className="min-h-screen bg-[#141414] pb-20">
      <Navbar />

      {/* Billboard / Hero Section */}
      <div className="relative w-full h-[60vh] sm:h-[80vh] md:h-[90vh]">
        {/* Replace this with a gorgeous photo of Priya or the two of you */}
        <div 
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop')` }}
        />
        
        {/* Netflix Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/30 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#141414] via-transparent to-transparent" />

        {/* Billboard Content */}
        <div className="absolute top-[30%] sm:top-[40%] left-4 sm:left-10 md:left-12 w-full max-w-[90%] sm:max-w-[60%] md:max-w-[40%]">
          {/* Netflix "N Series" badge */}
          <div className="flex items-center gap-2 mb-2 sm:mb-4">
            <span className="text-[#E50914] text-xl sm:text-2xl font-black">N</span>
            <span className="text-gray-300 text-xs sm:text-sm font-bold tracking-[0.2em]">O R I G I N A L</span>
          </div>

          <h1 className="text-white text-4xl sm:text-5xl md:text-7xl font-bold mb-2 sm:mb-4 drop-shadow-2xl">
            Priya's 24th
          </h1>
          
          <p className="text-white text-sm sm:text-base md:text-lg mb-6 sm:mb-8 drop-shadow-md line-clamp-3 sm:line-clamp-none">
            A celebration of the most amazing girl in the world. Starring Priya, featuring unforgettable memories, lots of love, and a very special birthday surprise.
          </p>

          <div className="flex flex-row gap-3 sm:gap-4">
            <button 
              onClick={handlePlay}
              className="flex items-center justify-center gap-2 bg-white text-black px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded md:rounded-md font-bold hover:bg-white/80 transition-all text-sm sm:text-base md:text-xl w-auto"
            >
              <FaPlay className="text-sm sm:text-base md:text-xl" />
              Play
            </button>
            <button className="flex items-center justify-center gap-2 bg-gray-500/70 text-white px-4 sm:px-6 md:px-8 py-2 sm:py-3 rounded md:rounded-md font-bold hover:bg-gray-500/50 transition-all text-sm sm:text-base md:text-xl w-auto">
              <FaInfoCircle className="text-sm sm:text-base md:text-xl" />
              More Info
            </button>
          </div>
        </div>
      </div>

      {/* Rows Section */}
      <div className="-mt-16 sm:-mt-24 md:-mt-32 relative z-20 pb-10">
        <Row title="Trending Memories" photos={specialMoments} />
        <Row title="Because You Watched: 'Our Adventures'" photos={favoritePlaces} />
        <Row title="Critically Acclaimed Dates" photos={specialMoments.slice().reverse()} />
      </div>
    </div>
  );
}
