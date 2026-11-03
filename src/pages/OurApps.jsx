import Cover from '../components/Cover.jsx';
import AppSection from '../components/AppSection.jsx';
import { pages } from '../data/content.js';
import { apps } from '../data/apps.js';
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
            {apps.map((app) => (
              <li key={app.id}>
                <a href={`#${app.id}`}>
                  <img src={app.icons[0]} alt="" />
                  <span>{app.name}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {apps.map((app, i) => (
        <AppSection key={app.id} app={app} reversed={i % 2 === 1} />
      ))}
    </>
  );
}
