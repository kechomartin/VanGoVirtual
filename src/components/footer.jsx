// src/components/Footer.jsx
export default function Footer() {
  return (
    <footer className="footer-main">
      <div className="footer-container">
        <div className="footer-brand">
          <h2 className="serif footer-logo">
            VanGo<span className="accent">Virtual</span>
          </h2>
          <p className="serif footer-tagline">
            Bridging the gap between contemporary African talent and the global stage.
          </p>
        </div>
        
        <div className="footer-socials">
          <span className="mono social-label">Connect</span>
          <div className="social-icons-gap">
            {/* WhatsApp Icon */}
            <a href="https://wa.me/254748905258" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="WhatsApp">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="currentColor">
                <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.438 9.889-9.886.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.894 4.44-9.897 9.89-.001 2.15.613 3.974 1.627 5.445l-.994 3.635 3.864-.984z"/>
              </svg>
            </a>

            {/* Instagram Icon */}
            <a href="https://instagram.com/your-handle" target="_blank" rel="noopener noreferrer" className="social-icon-link" aria-label="Instagram">
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
          </div>
        </div>
      </div>
      
      <div className="footer-bottom mono">
        © {new Date().getFullYear()} VanGoVirtual Gallery. All Rights Reserved.
      </div>
    </footer>
  );
}