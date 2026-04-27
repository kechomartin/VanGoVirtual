// src/components/Gallery.jsx
import { forwardRef } from "react";
import ArtCard from "./ArtCard";

const Gallery = forwardRef(({ artworks, categories, activeCategory, setActiveCategory, setLightbox }, ref) => {
  return (
    <section ref={ref} className="gallery-section">
      {/* Category Filter Buttons */}
      <div className="filter-container">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActiveCategory(cat)}
            className={`filter-btn mono ${activeCategory === cat ? "active" : ""}`}
          >
            {cat}
            {activeCategory === cat && <span className="active-dot"></span>}
          </button>
        ))}
      </div>

      <div className="masonry-grid">
        {artworks.map((art, i) => (
          <ArtCard key={art.id} artwork={art} index={i} onClick={() => setLightbox(art.id)} />
        ))}
      </div>
    </section>
  );
});

export default Gallery;