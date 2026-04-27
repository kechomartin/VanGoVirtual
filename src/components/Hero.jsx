export default function Hero({ galleryRef }) {
  return (
    <section className="hero-section">
      <h1 className="hero-title serif">
        VanGo<br />
        <span className="hero-subtitle">Virtual</span>
      </h1>
      <button 
        className="explore-btn mono"
        onClick={() => galleryRef.current?.scrollIntoView({ behavior: "smooth" })}
      >
        Explore Collection
      </button>
    </section>
  );
}