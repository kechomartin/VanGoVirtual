import { useState, useEffect, useRef } from "react";
import "./App.css";

// Components
import Navbar from "./components/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import Gallery from "./components/Gallery.jsx";
import Lightbox from "./components/Lightbox.jsx";
import Noise from "./components/Noise.jsx";
import Footer from "./components/Footer.jsx";

// Data
import { ARTWORKS, CATEGORIES } from "./data/artwork.js";

export default function VanGoVirtual() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightbox, setLightbox] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const galleryRef = useRef(null);

  // Dynamic state to hold artwork data so live bids persist during browsing
  const [galleryData, setGalleryData] = useState(ARTWORKS || []);

  // 1. Navigation Logic: Detect scroll to change Navbar background style
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // 2. Filtering Logic: Syncs smoothly with selected gallery categories
  const filtered = activeCategory === "All"
    ? galleryData
    : galleryData.filter((a) => a.category === activeCategory);

  // 3. Lightbox Navigation Logic (Looping left/right inside the active category)
  const navigateLightbox = (direction) => {
    const currentIndex = filtered.findIndex((art) => art.id === lightbox);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;

    if (nextIndex >= filtered.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filtered.length - 1;

    setLightbox(filtered[nextIndex].id);
  };

  // 4. Dynamic Live Bidding Handler
  const handlePlaceBid = (artworkId, newBidAmount) => {
    setGalleryData((prevData) =>
      prevData.map((art) =>
        art.id === artworkId
          ? { ...art, currentBid: newBidAmount, totalBids: art.totalBids + 1 }
          : art
      )
    );
  };

  // 5. Keyboard Support for premium Lightbox navigation (Arrow keys + Esc)
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (!lightbox) return;
      if (e.key === "ArrowRight") navigateLightbox(1);
      if (e.key === "ArrowLeft") navigateLightbox(-1);
      if (e.key === "Escape") setLightbox(null);
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [lightbox, filtered]);

  // 6. Find the open artwork details from our live state array
  const currentArtwork = lightbox 
    ? galleryData.find((a) => a.id === lightbox) 
    : null;

  return (
    <div className="app-container">
      {/* Background grain effects overlay */}
      <Noise />
      
      <Navbar scrolled={scrolled} galleryRef={galleryRef} />
      
      <Hero galleryRef={galleryRef} />
      
      <main>
        {galleryData.length > 0 ? (
          <Gallery 
            artworks={filtered} 
            categories={CATEGORIES || ["All"]} 
            activeCategory={activeCategory} 
            setActiveCategory={setActiveCategory} 
            setLightbox={setLightbox}
            ref={galleryRef}
          />
        ) : (
          <div style={{ color: "white", textAlign: "center", padding: "5rem" }} className="mono">
            Loading dynamic collection...
          </div>
        )}
      </main>

      {/* Stay-In-Place Overlay with active bidding injection */}
      {currentArtwork && (
        <Lightbox 
          artwork={currentArtwork} 
          onClose={() => setLightbox(null)} 
          onNext={() => navigateLightbox(1)}
          onPrev={() => navigateLightbox(-1)}
          onPlaceBid={handlePlaceBid}
        />
      )}
      
      <Footer />
    </div>
  );
}