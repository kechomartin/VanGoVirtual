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

  // Navigation Logic
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Filtering Logic
  const galleryData = ARTWORKS || [];
  
  const filtered = activeCategory === "All"
    ? galleryData
    : galleryData.filter((a) => a.category === activeCategory);

  // Lightbox Navigation Logic (Left/Right)
  const navigateLightbox = (direction) => {
    // We find the index within the CURRENTLY FILTERED list
    const currentIndex = filtered.findIndex((art) => art.id === lightbox);
    if (currentIndex === -1) return;

    let nextIndex = currentIndex + direction;

    // Loop logic
    if (nextIndex >= filtered.length) nextIndex = 0;
    if (nextIndex < 0) nextIndex = filtered.length - 1;

    setLightbox(filtered[nextIndex].id);
  };

  //(Arrow Keys)
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

  // Find the specific piece to display
  const currentArtwork = lightbox 
    ? galleryData.find((a) => a.id === lightbox) 
    : null;

  return (
    <div className="app-container">
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
          <div style={{ color: "white", textAlign: "center", padding: "5rem" }}>
            Loading collection...
          </div>
        )}
      </main>

      {currentArtwork && (
        <Lightbox 
          artwork={currentArtwork} 
          onClose={() => setLightbox(null)} 
          onNext={() => navigateLightbox(1)}
          onPrev={() => navigateLightbox(-1)}
        />
      )}
      
      <Footer />
    </div>
  );
}