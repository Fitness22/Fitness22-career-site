import { motion } from 'framer-motion';
import { Star } from 'lucide-react';
import StoreBadges from './StoreBadges.jsx';

// One app on the Our Apps page: text on one side, three phone screenshots
// that fan out when scrolled into view on the other.
// Screenshots are stacked in list order — the last one (the full phone) sits on top,
// and the ones behind it peek out to the upper-left.
export default function AppSection({ app, reversed }) {
  const className = ['app-section', app.theme === 'light' && 'app-section--light', reversed && 'app-section--reversed']
    .filter(Boolean)
    .join(' ');
  const last = app.screenshots.length - 1;

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

      {/* The whole group is watched, so all phones animate together once it's on screen */}
      <motion.div
        className="app-phones"
        initial="stacked"
        whileInView="fanned"
        viewport={{ once: true, amount: 0.3 }}
      >
        {app.screenshots.map((src, i) => {
          const step = last - i; // 0 for the front phone, bigger for phones further back
          return (
            <motion.img
              key={src}
              src={src}
              alt=""
              variants={{
                stacked: { x: 0, y: 0, opacity: 0 },
                fanned: { x: `${-step * 25}%`, y: -step * 30, opacity: 1 },
              }}
              transition={{ duration: 1, ease: 'easeOut' }}
            />
          );
        })}
      </motion.div>
    </section>
  );
}
