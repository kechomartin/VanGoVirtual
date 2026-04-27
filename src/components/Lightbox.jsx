export default function Lightbox({ artwork, onClose, onNext, onPrev }) {
  return (
    <div className="lightbox-container" onClick={onClose}>
      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        
        <button className="nav-arrow prev-btn" onClick={onPrev}>&#8249;</button>
        
        <div className="art-display">
          <img src={artwork.src} alt={artwork.title} className="focused-image" />
          <div className="art-meta">
            <h2 className="serif">{artwork.title}</h2>
            <p className="mono">{artwork.artist}</p>
          </div>
        </div>

        <button className="nav-arrow next-btn" onClick={onNext}>&#8250;</button>
        
        <button className="close-x" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}