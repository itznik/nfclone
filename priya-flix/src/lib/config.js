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
    { id: 1, name: "Priya 🌸", img: "/priya.jpg", isMain: true },
    { id: 2, name: "Nikunj 😉", img: "https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png", isMain: false },
    { id: 3, name: "Couple 🧿", img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-qo9h82134t9nv0j0.jpg", isMain: false },
    { id: 4, name: "Niya 🫂", img: "https://wallpapers.com/images/hd/netflix-profile-pictures-1000-x-1000-vnl1thqhqnc3ntd0.jpg", isMain: false }
  ],

  // Browse Page - Billboard
  billboard: {
    title: "Priya's 21st",
    description: "A critically acclaimed celebration of the most amazing girl in the world. Starring Priya and Nikunj, featuring unforgettable memories, lots of love, and a very special birthday surprise.",
    bgImage: "https://images.unsplash.com/photo-1469334031218-e382a71b716b?q=80&w=2000&auto=format&fit=crop"
  },

  // Browse Page - Memory Rows
  categories: {
    trending: [
      { url: "PLACEHOLDER_URL_1", caption: "Our first date" },
      { url: "PLACEHOLDER_URL_2", caption: "Trip to the mountains" },
      // ... add as many as you want, if the URL is broken, it will fall back gracefully!
    ],
    adventures: [
      { url: "PLACEHOLDER_URL_3", caption: "The cafe" },
      { url: "PLACEHOLDER_URL_4", caption: "Beach walk" },
    ]
  },

  // Celebration Page
  celebration: {
    videoPlaceholder: "https://images.unsplash.com/photo-1517457373958-b7bdd4587205?q=80&w=2000&auto=format&fit=crop",
    letter: [
      "Every great show has a star, and in the story of my life, it has always been you.",
      "I wanted to build something completely unique for you this year. Because a standard card just isn't enough for someone who means this much to me.",
      "Here is to all our past seasons together, and to the hundreds of episodes we still have left to shoot."
    ]
  }
};
