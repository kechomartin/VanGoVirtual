import { useState } from "react";

export default function ArtCard({ artwork, index, onClick }) {
  const [hovered, setHovered] = useState(false);

  return (
    <div 
      onClick={onClick}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        position: "relative", borderRadius: "8px", overflow: "hidden", cursor: "pointer",
        transition: "transform 0.3s ease", transform: hovered ? "scale(1.02)" : "scale(1)",
        boxShadow: hovered ? "0 10px 30px rgba(168, 85, 247, 0.3)" : "none"
      }}
    >
      <img src={artwork.thumb} alt={artwork.title} style={{ width: "100%", display: "block" }} />
      <div style={{
        position: "absolute", bottom: 0, left: 0, right: 0, padding: "1rem",
        background: "linear-gradient(transparent, rgba(10, 5, 16, 0.9))",
        opacity: hovered ? 1 : 0, transition: "opacity 0.3s ease"
      }}>
        <p className="serif" style={{ color: "white", margin: 0 }}>{artwork.title}</p>
        <p className="mono" style={{ fontSize: "0.7rem", color: "var(--accent-purple)" }}>{artwork.category}</p>
      </div>
    </div>
  );
}