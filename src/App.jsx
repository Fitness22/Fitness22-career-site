import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import JobPage from './pages/JobPage.jsx';
import WhoWeAre from './pages/WhoWeAre.jsx';
import OurApps from './pages/OurApps.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// On every navigation: jump to the #anchor if there is one, otherwise to the top.
function useScrollOnNavigate() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1));
    if (target) target.scrollIntoView();
    else window.scrollTo(0, 0);
  }, [pathname, hash]);
}

export default function App() {
  useScrollOnNavigate();

  return (
    <>
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/jobs/:slug" element={<JobPage />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/our-apps" element={<OurApps />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
