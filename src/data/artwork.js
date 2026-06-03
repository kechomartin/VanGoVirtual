// src/data/artwork.js

export const CATEGORIES = ["All", "Portraits", "Contemporary", "Wildlife", "Landscapes"];

export const ARTWORKS = [
  {
    id: 1,
    title: "Lin ♡",
    artist: "LIN",
    category: "Portraits",
    src: "public/images/Gary by Lin.jpg", // Ensure this matches your actual image path in public/assets
    isAuction: true,
    startingPrice: 500,
    currentBid: 750,
    totalBids: 4
  },
  {
    id: 2,
    title: "Songbird",
    artist: "Kechomartin",
    category: "Wildlife",
    src: "public/images/Songbird by Lin.jpg",
    isAuction: true,
    startingPrice: 1200,
    currentBid: 1450,
    totalBids: 7
  },
  {
    id: 3,
    title: "Sunset",
    artist: "Lin",
    category: "Contemporary",
    src: "public/images/Sunset by Lin.jpg",
    isAuction: true,
    startingPrice: 800,
    currentBid: 950,
    totalBids: 3
  },
  {
    id: 4,
    title: "Tom Ellis",
    artist: "Martin Kecho",
    category: "Landscapes",
    src: "public/images/Tom Ellis by Martin.jpg",
    isAuction: false, // Set to false if you want some items to be view-only or buy-now
    startingPrice: 650,
    currentBid: 650,
    totalBids: 0
  },
  {
    id: 5,
    title: "Wrickling Hair",
    artist: "Martin Kecho",
    category: "Portraits",
    src: "public/images/Wrickling Hair.jpg",
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
    src: "public/images/Urban Rhythm.jpg",
    isAuction: true,
    startingPrice: 950,
    currentBid: 950,
    totalBids: 0
  }
];