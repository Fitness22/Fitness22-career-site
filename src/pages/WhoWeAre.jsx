import { lazy, Suspense } from 'react';
import Cover from '../components/Cover.jsx';
import TextSection from '../components/TextSection.jsx';
import TeamCard from '../components/TeamCard.jsx';
import { pages, whoWeAre } from '../data/content.js';
import { team } from '../data/team.js';

// The map's data is fairly large, so it's only downloaded when this page is opened
const OfficesMap = lazy(() => import('../components/OfficesMap.jsx'));

export default function WhoWeAre() {
  return (
    <>
      <title>Who We Are - Fitness22</title>

      <Cover image={pages.whoWeAre.image} variant="banner">
        <h1 className="cover-title">{pages.whoWeAre.title}</h1>
      </Cover>

      <TextSection {...whoWeAre} />

      <section className="section">
        <ul className="team-grid">
          {team.map((person) => (
            <TeamCard key={person.name} {...person} />
          ))}
        </ul>
      </section>

      <Suspense fallback={null}>
        <OfficesMap />
      </Suspense>
    </>
  );
}
