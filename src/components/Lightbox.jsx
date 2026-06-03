import { useState } from "react";

export default function Lightbox({ artwork, onClose, onNext, onPrev, onPlaceBid }) {
  const [bidAmount, setBidAmount] = useState("");
  const [error, setError] = useState("");

  const handleSubmitBid = (e) => {
    e.preventDefault();
    const numericBid = parseFloat(bidAmount);

    if (isNaN(numericBid) || numericBid <= artwork.currentBid) {
      setError(`Bid must be higher than $${artwork.currentBid}`);
      return;
    }

    setError("");
    onPlaceBid(artwork.id, numericBid);
    setBidAmount(""); // Reset input
  };

  return (
    <div className="lightbox-container" onClick={onClose}>
      <div className="lightbox-stage" onClick={(e) => e.stopPropagation()}>
        
        <button className="nav-arrow prev-btn" onClick={onPrev}>&#8249;</button>
        
        <div className="art-display">
          <img src={artwork.src} alt={artwork.title} className="focused-image" />
          
          <div className="art-meta-grid">
            <div className="art-meta-left">
              <h2 className="serif">{artwork.title}</h2>
              <p className="mono">{artwork.artist}</p>
            </div>

            {/* Bidding System Panel */}
            {artwork.isAuction && (
              <div className="bidding-panel mono">
                <div className="bid-stats">
                  <div>
                    <span className="label">Live Bid</span>
                    <span className="amount">${artwork.currentBid}</span>
                  </div>
                  <div>
                    <span className="label">Total Bids</span>
                    <span className="count">{artwork.totalBids}</span>
                  </div>
                </div>

                <form onSubmit={handleSubmitBid} className="bid-form">
                  <input 
                    type="number" 
                    placeholder={`Min $${artwork.currentBid + 50}`} 
                    value={bidAmount}
                    onChange={(e) => setBidAmount(e.target.value)}
                  />
                  <button type="submit" className="place-bid-btn">Place Bid</button>
                </form>
                {error && <p className="bid-error">{error}</p>}
              </div>
            )}
          </div>
        </div>

        <button className="nav-arrow next-btn" onClick={onNext}>&#8250;</button>
        <button className="close-x" onClick={onClose}>&times;</button>
      </div>
    </div>
  );
}