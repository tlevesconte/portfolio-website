export default function GrainyBackground() {
  return (
    <svg
      className="pointer-events-none fixed isolate z-50 opacity-70 mix-blend-soft-light"
      height="100%"
      width="100%"
    >
      <filter id="noise">
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.80"
          numOctaves="4"
          stitchTiles="stitch"
        />
      </filter>
      <rect height="100%" width="100%" filter="url(#noise)"></rect>
    </svg>
  );
}
