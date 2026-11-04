import Cover from '../components/Cover.jsx';
import AppSection from '../components/AppSection.jsx';
import Stats from '../components/Stats.jsx';
import Reviews from '../components/Reviews.jsx';
import { pages } from '../data/content.js';
import { apps, appLinks } from '../data/apps.js';
import Accent from '../components/Accent.jsx';

export default function OurApps() {
  return (
    <>
      <title>Our Apps - Fitness22</title>

      <Cover image={pages.ourApps.image} variant="banner">
        <h1 className="cover-title">{pages.ourApps.title}</h1>
      </Cover>

      <section className="section">
        <div className="narrow-wide">
          <h2 className="section-title"><Accent text={pages.ourApps.intro} /></h2>
          <ul className="app-shortcuts">
            {appLinks.map((app) => (
              <li key={app.name}>
                <a href={`#${app.sectionId}`}>
                  <img src={app.icon} alt="" />
                  <span>{app.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {apps.map((app, i) => {
        // Dark sections fade smoothly into light neighbours (the intro above the first app is light,
        // and the dark numbers section below the last app fades in by itself)
        const dark = (a) => a && a.theme !== 'light';
        const lightAbove = i === 0 || !dark(apps[i - 1]);
        const lightBelow = i < apps.length - 1 && !dark(apps[i + 1]);
        return (
          <AppSection
            key={app.id}
            app={app}
            reversed={i % 2 === 1}
            fadeTop={dark(app) && lightAbove}
            fadeBottom={dark(app) && lightBelow}
          />
        );
      })}

      <Stats />
      <Reviews />
    </>
  );
}
