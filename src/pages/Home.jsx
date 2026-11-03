import Cover from '../components/Cover.jsx';
import TextSection from '../components/TextSection.jsx';
import Workplace from '../components/Workplace.jsx';
import JobList from '../components/JobList.jsx';
import Gallery from '../components/Gallery.jsx';
import About from '../components/About.jsx';
import { hero, whatYouDo } from '../data/content.js';
import Accent from '../components/Accent.jsx';

export default function Home() {
  return (
    <>
      <Cover video={hero.video} videoMobile={hero.videoMobile} poster={hero.poster} variant="low" scrollTo="workplace">
        <h1 className="cover-title"><Accent text={hero.title} /></h1>
        <a href="#jobs" className="btn btn--outline">Job openings</a>
      </Cover>

      <Workplace />
      <JobList />
      <TextSection {...whatYouDo} />
      <Gallery />
      <About />
    </>
  );
}
