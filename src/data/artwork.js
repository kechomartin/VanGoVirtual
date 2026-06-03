// src/data/artwork.js

export const CATEGORIES = ["All", "Portraits", "Contemporary", "Wildlife", "Landscapes"];

export const ARTWORKS = [
  {
    id: 1,
    title: "Lin ♡",
    artist: "LIN",
    category: "Portraits",
    src: "/assets/images/", // Ensure this matches your actual image path in public/assets
    isAuction: true,
    startingPrice: 500,
    currentBid: 750,
    totalBids: 4
  },
  {
    id: 2,
    title: "Serengeti Majesty",
    artist: "Kechomartin",
    category: "Wildlife",
    src: "/assets/serengeti.jpg",
    isAuction: true,
    startingPrice: 1200,
    currentBid: 1450,
    totalBids: 7
  },
  {
    id: 3,
    title: "Neon Echoes",
    artist: "Amara Okereke",
    category: "Contemporary",
    src: "/assets/neon-echoes.jpg",
    isAuction: true,
    startingPrice: 800,
    currentBid: 950,
    totalBids: 3
  },
  {
    id: 4,
    title: "Rift Valley Dawn",
    artist: "Kwame Mensah",
    category: "Landscapes",
    src: "/assets/rift-valley.jpg",
    isAuction: false, // Set to false if you want some items to be view-only or buy-now
    startingPrice: 650,
    currentBid: 650,
    totalBids: 0
  },
  {
    id: 5,
    title: "Golden Grace",
    artist: "LIN",
    category: "Portraits",
    src: "/assets/golden-grace.jpg",
    isAuction: true,
    startingPrice: 700,
    currentBid: 1100,
    totalBids: 12
  },
  {
    id: 6,
    title: "Urban Rhythm",
    artist: "Chidi Evans",
    category: "Contemporary",
    src: "/assets/urban-rhythm.jpg",
    isAuction: true,
    startingPrice: 950,
    currentBid: 950,
    totalBids: 0
  }
];