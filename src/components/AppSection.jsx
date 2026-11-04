import { Star } from 'lucide-react';
import StoreBadges from './StoreBadges.jsx';
import useInView from '../hooks/useInView.js';

// One app on the Our Apps page: text on one side, three phone screenshots on the other.
// Same animation as fitness22.com: the phones start stacked in the middle, and when the section
// is 70% up the screen they fan out (CSS, see "Our Apps" in index.css) — the first phone moves
// up to one side on top, the last one down to the other side behind. Every second app mirrors it.
// fadeTop / fadeBottom: smooth fade into the light section above / below (dark sections only)
export default function AppSection({ app, reversed, fadeTop, fadeBottom }) {
  const [phonesRef, inView] = useInView({ rootMargin: '0px 0px -30% 0px' });
  const className = [
    'app-section',
    app.theme === 'light' && 'app-section--light',
    reversed && 'app-section--reversed',
    fadeTop && 'fade-top',
    fadeBottom && 'fade-bottom',
  ]
    .filter(Boolean)
    .join(' ');

  return (
    <section id={app.id} className={className}>
      <div className="app-section-text">
        <div className="app-icons">
          {app.icons.map((icon) => (
            <img key={icon} src={icon} alt="" />
          ))}
        </div>
        <h2 className="app-name">{app.name}</h2>
        <h3 className="app-tagline">{app.tagline}</h3>
        <p>{app.description}</p>

        <div className="app-rating">
          {[1, 2, 3, 4, 5].map((n) => (
            <Star key={n} size={20} fill="currentColor" strokeWidth={0} />
          ))}
          <span>{app.rating}</span>
        </div>

        <StoreBadges appStore={app.appStore} googlePlay={app.googlePlay} />
      </div>

      <div ref={phonesRef} className={inView ? 'app-phones in-view' : 'app-phones'}>
        {app.screenshots.map((src) => (
          <img key={src} src={src} alt="" loading="lazy" />
        ))}
      </div>
    </section>
  );
}
