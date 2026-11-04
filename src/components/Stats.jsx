import { useEffect, useState } from 'react';
import { stats } from '../data/content.js';
import useInView from '../hooks/useInView.js';
import DownloadsMap from './DownloadsMap.jsx';

const COUNT_DURATION_MS = 3500;
const easeOut = (p) => 1 - Math.pow(1 - p, 4); // fast start, long gentle finish

// Counts from 0 up to `value` once `start` is true. Keeps the target's decimals ("2.4" → one).
function CountUp({ value, start }) {
  const target = parseFloat(value);
  const decimals = (value.split('.')[1] || '').length;
  const [shown, setShown] = useState(0);

  useEffect(() => {
    if (!start) return;
    let frame;
    const begin = performance.now();
    const step = (now) => {
      const progress = Math.min((now - begin) / COUNT_DURATION_MS, 1);
      setShown(target * easeOut(progress));
      if (progress < 1) frame = requestAnimationFrame(step);
    };
    frame = requestAnimationFrame(step);
    return () => cancelAnimationFrame(frame);
  }, [start, target]);

  // An invisible copy of the final number reserves its exact width, so nothing jitters while counting
  return (
    <span className="stat-number stat-count">
      <span aria-hidden="true">{value}</span>
      <span>{shown.toFixed(decimals)}</span>
    </span>
  );
}

// Dark section with the big green numbers (counting up when scrolled into view) and the downloads map.
export default function Stats() {
  const [rowRef, inView] = useInView({ threshold: 0.6 });

  return (
    <section className="stats fade-top fade-bottom">
      <div ref={rowRef} className="stats-row">
        {stats.map((stat) => (
          <div key={stat.label} className="stat">
            <CountUp value={stat.value} start={inView} />
            <span className="stat-number">{stat.unit}</span>
            <span className="stat-label">{stat.label}</span>
          </div>
        ))}
      </div>

      <DownloadsMap />
    </section>
  );
}
