import { useEffect, useRef } from 'react';
import createGlobe from 'cobe';
import { downloadsByRegion as REGIONS } from '../data/content.js';

// Spinning 3D globe with a green dot per region (bigger dot = more downloads) and a floating
// label above each dot. Same as the fitness22.com home page (built with the `cobe` library).
// Drag it to spin it. The labels follow their dots using CSS Anchor Positioning: cobe sets
// --cobe-<id> anchors and --cobe-visible-<id> (0–1, hidden when the dot is on the far side).

const GREEN = [11 / 255, 249 / 255, 71 / 255]; // brand green
const MAX = Math.max(...REGIONS.map((r) => r.value));
const SPIN_SPEED = 0.003;

// Dot size grows with downloads (by area, so a region with 4× the downloads gets 2× the width)
const markerSize = (value) => 0.025 + 0.07 * Math.sqrt(value / MAX);

export default function GlobeUsers() {
  const canvasRef = useRef(null);
  const drag = useRef(null); // where the current drag started, or null
  const dragOffset = useRef({ phi: 0, theta: 0 }); // rotation from the current drag
  const savedOffset = useRef({ phi: 0, theta: 0 }); // rotation from earlier drags

  // Dragging: remember the start point, rotate while moving, keep the rotation on release
  function onPointerDown(e) {
    drag.current = { x: e.clientX, y: e.clientY };
    canvasRef.current.style.cursor = 'grabbing';
  }

  useEffect(() => {
    const onMove = (e) => {
      if (!drag.current) return;
      dragOffset.current = {
        phi: (e.clientX - drag.current.x) / 300,
        theta: (e.clientY - drag.current.y) / 1000,
      };
    };
    const onUp = () => {
      if (!drag.current) return;
      savedOffset.current.phi += dragOffset.current.phi;
      savedOffset.current.theta += dragOffset.current.theta;
      dragOffset.current = { phi: 0, theta: 0 };
      drag.current = null;
      canvasRef.current.style.cursor = 'grab';
    };
    window.addEventListener('pointermove', onMove, { passive: true });
    window.addEventListener('pointerup', onUp, { passive: true });
    return () => {
      window.removeEventListener('pointermove', onMove);
      window.removeEventListener('pointerup', onUp);
    };
  }, []);

  // Create the globe and keep it spinning
  useEffect(() => {
    const canvas = canvasRef.current;
    let globe;
    let frame;
    let phi = 1.2; // start facing the Atlantic: North America and Europe (the biggest markets)

    function start() {
      const width = canvas.offsetWidth;
      globe = createGlobe(canvas, {
        devicePixelRatio: Math.min(window.devicePixelRatio || 1, 2),
        width,
        height: width,
        phi,
        theta: 0.25,
        dark: 1,
        diffuse: 1.2,
        mapSamples: 16000,
        mapBrightness: 6,
        baseColor: [0.3, 0.33, 0.34],
        markerColor: GREEN,
        glowColor: [0.08, 0.22, 0.12],
        markerElevation: 0.02,
        markers: REGIONS.map((r) => ({ location: r.location, size: markerSize(r.value), id: r.id })),
        opacity: 0.9,
      });

      const spin = () => {
        if (!drag.current) phi += SPIN_SPEED; // pause the spin while dragging
        globe.update({
          phi: phi + savedOffset.current.phi + dragOffset.current.phi,
          theta: 0.25 + savedOffset.current.theta + dragOffset.current.theta,
        });
        frame = requestAnimationFrame(spin);
      };
      spin();
      canvas.style.opacity = '1'; // fade in (CSS transition)
    }

    // Wait until the canvas has a size (it can be 0 wide right after the page renders)
    const resizeObserver = new ResizeObserver(([entry]) => {
      if (entry.contentRect.width > 0 && !globe) {
        resizeObserver.disconnect();
        start();
      }
    });
    resizeObserver.observe(canvas);

    return () => {
      resizeObserver.disconnect();
      cancelAnimationFrame(frame);
      globe?.destroy();
    };
  }, []);

  return (
    <div className="globe">
      <canvas ref={canvasRef} onPointerDown={onPointerDown} role="img" aria-label="Globe showing app downloads by region" />

      {REGIONS.map((r) => (
        <div
          key={r.id}
          className="globe-label"
          style={{
            positionAnchor: `--cobe-${r.id}`,
            opacity: `var(--cobe-visible-${r.id}, 0)`,
            filter: `blur(calc((1 - var(--cobe-visible-${r.id}, 0)) * 8px))`,
          }}
        >
          <span className="globe-label-name">{r.name}</span>
          <span className="globe-label-value">{r.label}</span>
        </div>
      ))}

      {/* For screen readers, and shown under the globe in browsers that can't place the labels */}
      <ul className="globe-list">
        {REGIONS.map((r) => (
          <li key={r.id}>
            {r.name}: <strong>{r.label}</strong>
          </li>
        ))}
      </ul>
    </div>
  );
}
