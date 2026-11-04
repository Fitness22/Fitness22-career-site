import DottedMap from 'dotted-map';
import { motion } from 'framer-motion';
import { downloadsByRegion as REGIONS, headquarters } from '../data/content.js';
import useInView from '../hooks/useInView.js';

// Dotted world map: arcs fly out from our HQ in Israel to each region,
// with a pulsing green dot (bigger = more downloads) and a label per region.

// Built once: the dot grid (as an image) and each location's position on it
const map = new DottedMap({ height: 60, grid: 'diagonal' }); // fewer rows = more space between dots
const mapImage = `data:image/svg+xml;utf8,${encodeURIComponent(
  map.getSVG({ radius: 0.22, color: 'rgba(255,255,255,0.35)', shape: 'circle' }),
)}`;
const { width: W, height: H } = map.image; // map size in the SVG's units
const toPoint = ([lat, lng]) => map.getPin({ lat, lng }); // snaps to the nearest dot

const SCALE = H / 100; // keeps the dots the same on-screen size whatever the grid height
const HQ = toPoint(headquarters.location);
const MAX = Math.max(...REGIONS.map((r) => r.value));
const points = REGIONS.map((r) => ({
  ...r,
  ...toPoint(r.location),
  // Dot size grows with downloads (by area, so 4× the downloads = 2× the width)
  r: (0.9 + 2.1 * Math.sqrt(r.value / MAX)) * SCALE,
}));

// A curve that bows upward between two points (higher for longer distances)
function arc(from, to) {
  const lift = Math.hypot(to.x - from.x, to.y - from.y) * 0.35;
  const midX = (from.x + to.x) / 2;
  const midY = Math.min(from.y, to.y) - lift;
  return `M ${from.x} ${from.y} Q ${midX} ${midY} ${to.x} ${to.y}`;
}

const DRAW_SECONDS = 1.6;
const STAGGER_SECONDS = 0.25;

export default function DownloadsMap() {
  const [ref, inView] = useInView({ threshold: 0.4 });
  const percent = (p) => ({ left: `${(p.x / W) * 100}%`, top: `${(p.y / H) * 100}%` });

  return (
    <div ref={ref} className={`downloads-map ${inView ? 'in-view' : ''}`}>
      <div className="downloads-map-canvas" style={{ aspectRatio: `${W} / ${H}` }}>
        <img src={mapImage} alt="" draggable="false" />

        <svg viewBox={`0 0 ${W} ${H}`} aria-hidden="true">
          {points.map((p, i) => (
            <motion.path
              key={p.id}
              d={arc(HQ, p)}
              className="downloads-map-arc"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: inView ? 1 : 0 }}
              transition={{ duration: DRAW_SECONDS, delay: i * STAGGER_SECONDS, ease: 'easeInOut' }}
            />
          ))}

          {[{ ...HQ, id: 'hq', r: 1.2 * SCALE }, ...points].map((p, i) => (
            <g
              key={p.id}
              className={`downloads-map-dot ${p.id === 'hq' ? 'downloads-map-dot--hq' : ''}`}
              style={{ '--delay': `${i * 0.3}s` }}
            >
              <circle className="downloads-map-pulse" cx={p.x} cy={p.y} r={p.r} />
              <circle cx={p.x} cy={p.y} r={p.r} />
            </g>
          ))}
        </svg>

        <div className="downloads-map-label downloads-map-label--hq" style={percent(HQ)}>
          {headquarters.name}
        </div>
        {points.map((p, i) => (
          <div
            key={p.id}
            className={`downloads-map-label ${p.labelBelow ? 'downloads-map-label--below' : ''}`}
            style={{ ...percent(p), transitionDelay: `${i * STAGGER_SECONDS + DRAW_SECONDS * 0.8}s` }}
          >
            <span className="downloads-map-name">{p.name}</span>
            <span className="downloads-map-value">{p.label}</span>
          </div>
        ))}
      </div>

      {/* For screen readers, and shown under the map on phones where the labels would overlap */}
      <ul className="downloads-map-list">
        {REGIONS.map((r) => (
          <li key={r.id}>
            {r.name}: <strong>{r.label}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
