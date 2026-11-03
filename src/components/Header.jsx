import { useCallback, useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';
import { navItems } from '../data/content.js';
import MobileMenu from './MobileMenu.jsx';

// Minimal transparent header that sits on top of the page's cover video/image:
// navigation on the left, logo on the right.
// Gets a subtle dark background once the page is scrolled.
export default function Header() {
  const [hovered, setHovered] = useState(null); // label of the hovered nav item
  const [mobileOpen, setMobileOpen] = useState(false);
  const scrolled = useScrolled(40);
  const { pathname, hash } = useLocation();
  const closeMobileMenu = useCallback(() => setMobileOpen(false), []);

  // Close menus after navigating
  useEffect(() => {
    setHovered(null);
    setMobileOpen(false);
  }, [pathname, hash]);

  const className = ['header', scrolled && 'header--scrolled', mobileOpen && 'header--open']
    .filter(Boolean)
    .join(' ');

  return (
    <>
      <header className={className}>
        <nav className="nav" onMouseLeave={() => setHovered(null)}>
          <ul className="nav-list">
            {navItems.map((item) => (
              <li key={item.label} className="nav-item" onMouseEnter={() => setHovered(item.label)}>
                <NavLink to={item.to} end={item.to === '/'} className="nav-link">
                  {item.label}
                  {item.subMenu && <ChevronDown size={16} className="nav-chevron" />}
                  {hovered === item.label && (
                    <motion.span layoutId="nav-hover" className="nav-hover-bg" style={{ borderRadius: 99 }} />
                  )}
                </NavLink>

                <AnimatePresence>
                  {item.subMenu && hovered === item.label && (
                    <div className="nav-dropdown">
                      <motion.ul
                        className="nav-dropdown-panel"
                        initial={{ opacity: 0, y: -6 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -6 }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.subMenu.map((sub) => (
                          <li key={sub.label}>
                            <Link to={sub.to} className="nav-dropdown-item">
                              <img src={sub.icon} alt="" />
                              <span>
                                <strong>{sub.label}</strong>
                                <small>{sub.description}</small>
                              </span>
                            </Link>
                          </li>
                        ))}
                      </motion.ul>
                    </div>
                  )}
                </AnimatePresence>
              </li>
            ))}
          </ul>
        </nav>

        {/* Phone menu button: three lines that morph into an X (CSS) */}
        <button
          className={mobileOpen ? 'nav-toggle is-open' : 'nav-toggle'}
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileOpen}
        >
          <span />
          <span />
          <span />
        </button>

        <Link to="/" className="header-logo" aria-label="Fitness22 careers home">
          <img src="/logo.svg" alt="Fitness22" />
        </Link>
      </header>

      {/* Outside <header>: its blur effect would otherwise trap the fixed drawer inside it */}
      <MobileMenu open={mobileOpen} onClose={closeMobileMenu} />
    </>
  );
}

function useScrolled(offset) {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > offset);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, [offset]);

  return scrolled;
}
