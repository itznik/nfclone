// src/lib/config.js

export const siteConfig = {
  // Login Details
  auth: {
    username: "happy birthday",
    password: "darling",
    errorMessage: "Incorrect details. Hint: Try 'happy birthday' and 'darling'"
  },

  // Fallback Placeholder Image (if any of your real images fail to load)
  placeholderImage: "https://images.unsplash.com/photo-1618365908648-e71bd5716cba?q=80&w=600&auto=format&fit=crop", // A nice dark aesthetic placeholder

  // Profiles
  profiles: [
    { id: 1, name: "Priya 🌸", img: "https://i.postimg.cc/jqDJBKZf/20250930-111215.jpg", isMain: true },
    { id: 2, name: "Nikunj 😉", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", isMain: false },
    { id: 3, name: "Couple 🧿", img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg", isMain: false },
    { id: 4, name: "Niya 🫂", img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqhqnc3ntd0.jpg", isMain: false }
  ],

  // Browse Page - Billboard
  billboard: {
    title: "Pilu's 21st",
    description: "A critically acclaimed celebration of the most amazing girl in the world. Starring Priya and Nikunj, featuring unforgettable memories, lots of love, and a very special birthday surprise.",
    bgImage: "https://i.postimg.cc/fLdbbq6P/20251227-162144.jpg"
  },

  // Browse Page - Memory Rows
  categories: {
    trending: [
      { url: "https://i.postimg.cc/FshDjY9m/Snapchat-122300930.jpg", caption: "Pizza date at domino's" },
      { url: "https://i.postimg.cc/N0tMMv67/Snapchat-716177674.jpg", caption: "Valentine's Day"},
      { url: "https://i.postimg.cc/3wGXMhKc/Snapchat-19086038.jpg", caption: "First time head on shoulder" },
    ],
    adventures: [
      { url: "https://i.postimg.cc/0N7wWCnv/Snapchat-1884616157.jpg", caption: "The snow mountain" },
      { url: "https://i.postimg.cc/dQ5Tx32w/20250930-105508-(2).jpg", caption: "2nd Navratri" },
    ]
  },

  // Celebration Page
  celebration: {
    videoPlaceholder: "https://i.postimg.cc/28YX2Hxm/IMG-3056.avif",
    letter: [
      "Every great show has a star, and in the story of my life, it has always been you.",
      "I wanted to build something completely unique for you this year. Because a standard card just isn't enough for someone who means this much to me.",
      "Here is to all our past seasons together, and to the hundreds of episodes we still have left to shoot."
    ]
  }
};
