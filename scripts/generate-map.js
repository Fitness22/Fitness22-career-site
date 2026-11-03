// Generates the data for the offices map (src/data/map-dots.json):
//   - the gray land dots of the region
//   - green border outlines for the countries we have offices in
// Run with `npm run map` — only needed if you change the settings below.
// (The full world data is big, so we save just what the map needs instead of shipping it to the browser.)
import { readFileSync, writeFileSync } from 'node:fs';
import { getMapJSON } from 'dotted-map';
import { feature, merge } from 'topojson-client';
import proj4 from 'proj4';

const REGION = { lat: { min: 27.5, max: 38.5 }, lng: { min: 21, max: 47 } }; // Eastern Mediterranean
const ROWS = 64; // number of dot rows; more = finer dots

// Countries outlined in green. Each is a list of Natural Earth country names merged into one shape
// (Cyprus is split in two in the data, so we merge it back into the island's outline).
const BORDERS = {
  israel: ['Israel'],
  cyprus: ['Cyprus', 'N. Cyprus'],
};

// 1) Land dots
const map = JSON.parse(getMapJSON({ height: ROWS, grid: 'diagonal', region: REGION }));

// 2) Border outlines, converted to the same coordinates as the dots
// (the map uses the Mercator projection; this mirrors how dotted-map positions its points)
const topo = JSON.parse(readFileSync(new URL('../node_modules/world-atlas/countries-50m.json', import.meta.url)));
const countries = topo.objects.countries;

const toMap = ([lng, lat]) => {
  const [x, y] = proj4('+proj=merc +lon_0=0 +x_0=0 +y_0=0 +datum=WGS84 +units=m', [lng, lat]);
  return [
    ((map.width * (x - map.X_MIN)) / map.X_RANGE).toFixed(2),
    ((map.height * (map.Y_MAX - y)) / map.Y_RANGE).toFixed(2),
  ];
};

// GeoJSON polygon rings → SVG path ("M x y L x y ... Z" for each ring)
const toPath = (geometry) => {
  const polygons = geometry.type === 'Polygon' ? [geometry.coordinates] : geometry.coordinates;
  return polygons
    .flatMap((rings) => rings)
    .map((ring) => 'M' + ring.map((point) => toMap(point).join(' ')).join('L') + 'Z')
    .join('');
};

const borders = Object.entries(BORDERS).map(([id, names]) => {
  const parts = countries.geometries.filter((g) => names.includes(g.properties.name));
  const shape = parts.length > 1 ? merge(topo, parts) : feature(topo, parts[0]).geometry;
  return { id, d: toPath(shape) };
});

writeFileSync(new URL('../src/data/map-dots.json', import.meta.url), JSON.stringify({ map, borders }));
console.log('Wrote src/data/map-dots.json');
