import { useMemo } from 'react';
import { motion } from 'framer-motion';
import DottedMap from 'dotted-map/without-countries';
import { MapPin } from 'lucide-react';
import Accent from './Accent.jsx';
import { offices } from '../data/content.js';
import mapDots from '../data/map-dots.json';

// The data comes from src/data/map-dots.json: the land dots of the Eastern Mediterranean, plus the
// border outlines of the countries we have offices in (drawn in green). To change the area or the
// outlined countries, edit scripts/generate-map.js and run `npm run map`.

// Builds the dotted map once: an SVG image of the land, plus each office's position on it.
function buildMap() {
  const map = new DottedMap({ map: mapDots.map });
  const svg = map.getSVG({ radius: 0.22, color: 'rgba(37, 37, 37, 0.28)', shape: 'circle', backgroundColor: 'transparent' });
  const [, , width, height] = svg.match(/viewBox="([^"]+)"/)[1].split(' ').map(Number);
  const pins = offices.map((office) => ({ ...office, ...map.getPin({ lat: office.lat, lng: office.lng }) }));

  return { image: `data:image/svg+xml;utf8,${encodeURIComponent(svg)}`, width, height, pins };
}

// A gentle arc between two points, for the line connecting offices.
// The curve's control point sits beside the straight line, at 30% of its length.
function curve(a, b) {
  const midX = (a.x + b.x) / 2;
  const midY = (a.y + b.y) / 2;
  const bend = 0.3;
  const controlX = midX - (b.y - a.y) * bend;
  const controlY = midY + (b.x - a.x) * bend;
  return `M ${a.x} ${a.y} Q ${controlX} ${controlY} ${b.x} ${b.y}`;
}

const googleMapsUrl = (office) =>
  `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(office.address)}`;

export default function OfficesMap() {
  const { image, width, height, pins } = useMemo(buildMap, []);

  return (
    <section id="offices" className="section">
      <h2 className="section-title"><Accent text="Our *Offices*" /></h2>

      <div className="offices-map" style={{ aspectRatio: `${width} / ${height}` }}>
        <img src={image} alt="" className="offices-map-dots" />

        <svg viewBox={`0 0 ${width} ${height}`} className="offices-map-overlay" aria-hidden="true">
          {/* Green border outlines of Israel and Cyprus, traced in when the map scrolls into view */}
          {mapDots.borders.map((border) => (
            <motion.path
              key={border.id}
              d={border.d}
              className="offices-map-border"
              initial={{ pathLength: 0, fillOpacity: 0 }}
              whileInView={{ pathLength: 1, fillOpacity: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut' }}
            />
          ))}

          {/* Lines between the offices, drawn in when the map scrolls into view */}
          {pins.slice(1).map((pin, i) => (
            <motion.path
              key={pin.name}
              d={curve(pins[i], pin)}
              initial={{ pathLength: 0 }}
              whileInView={{ pathLength: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, ease: 'easeInOut', delay: 0.3 }}
            />
          ))}
        </svg>

        {pins.map((pin) => (
          <a
            key={pin.name}
            href={googleMapsUrl(pin)}
            target="_blank"
            rel="noreferrer"
            className={`office-pin office-pin--${pin.label || 'top'}`}
            style={{ left: `${(pin.x / width) * 100}%`, top: `${(pin.y / height) * 100}%` }}
          >
            <span className="office-pin-dot" />
            <span className="office-pin-label">
              <MapPin size={16} />
              <span>
                <strong>{pin.name}</strong>
                <small>{pin.address}</small>
              </span>
            </span>
          </a>
        ))}
      </div>
    </section>
  );
}
