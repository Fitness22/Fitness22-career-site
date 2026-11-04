import { Star } from 'lucide-react';
import { reviews } from '../data/content.js';
import useInView from '../hooks/useInView.js';

// Review section, same as the fitness22.com home page:
// big gray stars that fill up in green to the rating when scrolled into view,
// then three columns of real App Store reviews scrolling upward at different speeds.

// --- Rating stars ---

// Rounded 5-point star centred in a 100×100 box (the rounding comes from the round stroke join)
function starPoints(cx, cy, outer = 44, inner = 20) {
  return Array.from({ length: 10 }, (_, i) => {
    const r = i % 2 ? inner : outer;
    const angle = (Math.PI / 5) * i - Math.PI / 2;
    return `${(cx + r * Math.cos(angle)).toFixed(2)},${(cy + r * Math.sin(angle)).toFixed(2)}`;
  }).join(' ');
}

const CELL = 112; // width per star including the gap
const STAR = 100;
const WIDTH = CELL * 5 - (CELL - STAR);

function StarRow() {
  return (
    <svg viewBox={`0 0 ${WIDTH} ${STAR}`} aria-hidden="true">
      {Array.from({ length: 5 }, (_, i) => (
        <polygon key={i} points={starPoints(i * CELL + STAR / 2, STAR / 2 + 3)} />
      ))}
    </svg>
  );
}

// Gray stars, with a green copy on top that is revealed (left to right) up to the rating
function RatingStars({ rating }) {
  const [ref, inView] = useInView({ threshold: 0.6 });

  // Where the green fill ends, e.g. 4.9 → 4 full stars + 90% of the 5th
  const full = Math.floor(rating);
  const edge = full * CELL + (rating - full) * STAR;
  const hiddenPercent = inView ? 100 - (edge / WIDTH) * 100 : 100;

  return (
    <div ref={ref} className="rating-stars" role="img" aria-label={`${rating} out of 5 stars`}>
      <div className="rating-stars-empty">
        <StarRow />
      </div>
      <div className="rating-stars-fill" style={{ clipPath: `inset(0 ${hiddenPercent}% 0 0)` }}>
        <StarRow />
      </div>
    </div>
  );
}

// --- Scrolling review columns ---

// Each column shows every review, starting at a different one, and scrolls at its own speed
const COLUMNS = [
  { order: [0, 1, 2], seconds: 30 },
  { order: [1, 2, 0], seconds: 38 },
  { order: [2, 0, 1], seconds: 34 },
];

function ReviewCard({ review }) {
  return (
    <figure className="review-card">
      <span className="review-stars" aria-label="5 out of 5 stars">
        {Array.from({ length: 5 }, (_, i) => (
          <Star key={i} size={16} fill="currentColor" strokeWidth={0} aria-hidden="true" />
        ))}
      </span>
      <strong className="review-title">{review.title}</strong>
      <blockquote className="review-text">{review.text}</blockquote>
      <figcaption className="review-author">
        <img src={review.icon} alt="" width="40" height="40" />
        <span>
          <span className="review-name">{review.name}</span>
          <span className="review-app">for {review.app}</span>
        </span>
      </figcaption>
    </figure>
  );
}

export default function Reviews() {
  return (
    <section className="reviews section">
      <RatingStars rating={reviews.rating} />
      <h2 className="section-title reviews-title">{reviews.title}</h2>
      <p className="reviews-subtitle">{reviews.subtitle}</p>

      <div className="review-columns">
        {COLUMNS.map((column, c) => (
          <div key={c} className="review-column">
            {/* The list is rendered twice, so sliding up by exactly half loops seamlessly */}
            <div className="review-track" style={{ animationDuration: `${column.seconds}s` }}>
              {[0, 1].map((copy) =>
                column.order.map((i) => (
                  <div key={`${copy}-${i}`} aria-hidden={copy === 1 || undefined}>
                    <ReviewCard review={reviews.items[i]} />
                  </div>
                )),
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
