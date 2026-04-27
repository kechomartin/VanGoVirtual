export default function Noise() {
  return (
    <svg
      style={{ position: "fixed", inset: 0, width: "100%", height: "100%", opacity: 0.06, pointerEvents: "none", zIndex: 0 }}
      xmlns="http://www.w3.org/2000/svg"
    >
      <filter id="noise">
        <feTurbulence type="fractalNoise" baseFrequency="0.65" numOctaves="3" stitchTiles="stitch" />
        <feColorMatrix type="saturate" values="0" />
      </filter>
      <rect width="100%" height="100%" filter="url(#noise)" />
    </svg>
  );
}