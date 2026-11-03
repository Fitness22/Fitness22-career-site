import { about } from '../data/content.js';
import Accent from './Accent.jsx';

export default function About() {
  return (
    <section className="section section--light">
      <div className="narrow">
        <h2 className="section-title"><Accent text={about.title} /></h2>
        <p className="lead">{about.text}</p>
        <dl className="facts">
          {about.facts.map(({ label, value }) => (
            <div key={label}>
              <dt>{label}</dt> <dd>{value}</dd>
            </div>
          ))}
        </dl>
      </div>
    </section>
  );
}
