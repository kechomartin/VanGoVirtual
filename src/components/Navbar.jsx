export default function Navbar({ scrolled, galleryRef }) {
  return (
    <nav style={{
      position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
      padding: "1.2rem 2.5rem", display: "flex", alignItems: "center", justifyContent: "space-between",
      background: scrolled ? "rgba(10, 5, 16, 0.95)" : "transparent",
      backdropFilter: scrolled ? "blur(12px)" : "none",
      transition: "all 0.4s ease", 
      borderBottom: scrolled ? "1px solid var(--accent-primary)" : "1px solid transparent"
    }}>
      <div className="serif" style={{ color: "var(--text-main)", fontSize: "1.4rem", letterSpacing: "0.05em" }}>
        VanGo<span style={{ color: "var(--accent-primary)" }}>Virtual</span>
      </div>
      
      <div style={{ display: "flex", gap: "2rem", alignItems: "center" }}>
        <button 
          onClick={() => galleryRef.current?.scrollIntoView({ behavior: "smooth" })} 
          className="nav-link"
          style={{ background: "none", border: "none", cursor: "pointer", color: "inherit" }}
        >
          Gallery
        </button>
        
        {/* WhatsApp Button */}
        <a 
          href="https://wa.me/254748905258" 
          target="_blank" 
          rel="noopener noreferrer"
          className="whatsapp-btn mono"
        >
          <span>Chat</span>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.894 4.44-9.897 9.89-.001 2.15.613 3.974 1.627 5.445l-.994 3.635 3.864-.984z"/>
          </svg>
        </a>
      </div>
    </nav>
  );
}