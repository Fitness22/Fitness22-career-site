import { gallery } from '../data/content.js';

// The photos repeated, so one row is always wider than the screen
const ROW = [...gallery, ...gallery];

// Endless strip of photo cards drifting from right to left (pauses on hover).
// The row is rendered twice side by side; the CSS animation slides the track by exactly one row,
// so when it restarts the second copy is where the first one began — a seamless loop.
export default function Gallery() {
  return (
    <section className="gallery" aria-label="Life at Fitness22">
      <div className="gallery-track">
        {[0, 1].map((copy) => (
          <div key={copy} className="gallery-row" aria-hidden={copy === 1}>
            {ROW.map((src, i) => (
              <img key={i} src={src} alt="" className="gallery-card" loading="lazy" />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
