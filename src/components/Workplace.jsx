import { useEffect, useState } from 'react';
import { workplace } from '../data/content.js';

const SLIDE_INTERVAL_MS = 5000;

export default function Workplace() {
  const { title, paragraphs, images } = workplace;
  const [current, setCurrent] = useState(0);

  // Auto-advance the slideshow. Restarts the timer whenever the slide changes.
  useEffect(() => {
    const timer = setTimeout(() => setCurrent((current + 1) % images.length), SLIDE_INTERVAL_MS);
    return () => clearTimeout(timer);
  }, [current, images.length]);

  return (
    <section id="workplace" className="split">
      <div className="split-text">
        <h2 className="section-title">{title}</h2>
        {paragraphs.map((text) => (
          <p key={text}>{text}</p>
        ))}
      </div>

      <div className="split-media slideshow">
        {images.map((src, i) => (
          <img key={src} src={src} alt="" className={i === current ? 'active' : ''} loading="lazy" />
        ))}

        <div className="slideshow-dots">
          {images.map((src, i) => (
            <button
              key={src}
              className={i === current ? 'active' : ''}
              onClick={() => setCurrent(i)}
              aria-label={`Show image ${i + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
