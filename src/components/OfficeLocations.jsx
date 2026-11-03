import { useEffect, useRef, useState } from 'react';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { offices } from '../data/content.js';

// Standard OpenStreetMap tiles (free, no API key); CSS turns them light gray like the old site's map
const TILES = 'https://tile.openstreetmap.org/{z}/{x}/{y}.png';
const ATTRIBUTION = '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>';

const OFFICE_ZOOM = 12; // zoom level when an office is picked from the list

// Map pin marker (gray, like the old career site)
const pinIcon = L.divIcon({
  className: 'office-marker',
  html: `<svg viewBox="0 0 384 512" width="24" height="32" aria-hidden="true">
    <path fill="currentColor" d="M192 0C86 0 0 84.4 0 188.6 0 307.9 120.2 450.9 170.4 505.4a29.4 29.4 0 0 0 43.2 0C263.8 450.9 384 307.9 384 188.6 384 84.4 298 0 192 0zm0 256a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"/>
  </svg>`,
  iconSize: [24, 32],
  iconAnchor: [12, 32], // the pin's tip points at the location
});

const directionsUrl = (office) => `https://www.google.com/maps?q=${office.lat},${office.lng}`;

// "Select location" panel + map with all offices, like the old careers.fitness22.com.
// The map starts zoomed out to show every office; picking one zooms in on it.
export default function OfficeLocations() {
  const [selected, setSelected] = useState(offices[0]);
  const mapElement = useRef(null);
  const map = useRef(null);

  // Create the map once
  useEffect(() => {
    // scrollWheelZoom off: scrolling the page over the map shouldn't zoom it
    const leafletMap = L.map(mapElement.current, { scrollWheelZoom: false, zoomControl: false });
    L.control.zoom({ position: 'topright' }).addTo(leafletMap);
    L.tileLayer(TILES, { attribution: ATTRIBUTION, maxZoom: 19 }).addTo(leafletMap);
    leafletMap.attributionControl.setPrefix(false);

    const points = offices.map((office) => [office.lat, office.lng]);
    points.forEach((point) => L.marker(point, { icon: pinIcon }).addTo(leafletMap));
    leafletMap.fitBounds(points, { padding: [60, 60] });

    map.current = leafletMap;
    return () => leafletMap.remove();
  }, []);

  function selectOffice(name) {
    const office = offices.find((o) => o.name === name);
    setSelected(office);
    map.current.flyTo([office.lat, office.lng], OFFICE_ZOOM, { duration: 1.2 });
  }

  return (
    <section id="offices" className="split locations">
      <div className="split-text locations-panel">
        <label htmlFor="location-select" className="sr-only">Select location</label>
        <select
          id="location-select"
          className="location-select"
          value={selected.name}
          onChange={(e) => selectOffice(e.target.value)}
        >
          {offices.map((office) => (
            <option key={office.name}>{office.name}</option>
          ))}
        </select>

        <div className="location-details">
          <div>
            {selected.address.map((line, i) => (
              <p key={i}>{line}</p>
            ))}
          </div>
          <a href={directionsUrl(selected)} target="_blank" rel="noreferrer">Directions</a>
          {selected.email && <a href={`mailto:${selected.email}`}>{selected.email}</a>}
          {selected.phone && <a href={`tel:${selected.phone}`}>{selected.phone}</a>}
        </div>
      </div>

      <div ref={mapElement} className="locations-map" />
    </section>
  );
}
