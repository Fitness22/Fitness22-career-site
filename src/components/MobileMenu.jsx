import { useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { navItems } from '../data/content.js';

// Animation settings: the drawer slides in from the left, then the links fade in one after another.
const EASE = [0.32, 0.72, 0, 1];

const drawer = {
  hidden: { x: '-100%' },
  visible: { x: 0, transition: { duration: 0.4, ease: EASE, when: 'beforeChildren', staggerChildren: 0.06 } },
  exit: { x: '-100%', transition: { duration: 0.3, ease: EASE } },
};

const item = {
  hidden: { opacity: 0, x: -16 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.3, ease: EASE } },
};

// Side drawer navigation for phones (opened by the ☰ button in the header).
export default function MobileMenu({ open, onClose }) {
  // While open: stop the page behind from scrolling, and close on Esc
  useEffect(() => {
    if (!open) return;
    const onKey = (e) => e.key === 'Escape' && onClose();
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose]);

  return (
    <AnimatePresence>
      {open && (
        <>
          <motion.div
            className="mobile-menu-backdrop"
            onClick={onClose}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          />

          <motion.nav
            className="mobile-menu"
            aria-label="Menu"
            variants={drawer}
            initial="hidden"
            animate="visible"
            exit="exit"
          >
            {navItems.map((navItem) => (
              <motion.div key={navItem.label} variants={item}>
                <NavLink to={navItem.to} end={navItem.to === '/'} className="mobile-menu-link">
                  {navItem.label}
                </NavLink>

                {navItem.subMenu && (
                  <ul className="mobile-menu-sub">
                    {navItem.subMenu.map((sub) => (
                      <li key={sub.label}>
                        <Link to={sub.to}>
                          <img src={sub.icon} alt="" />
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                )}
              </motion.div>
            ))}

            <motion.div variants={item} className="mobile-menu-footer">
              <Link to="/#jobs" className="btn btn--outline">Job openings</Link>
            </motion.div>
          </motion.nav>
        </>
      )}
    </AnimatePresence>
  );
}
