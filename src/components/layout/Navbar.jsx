import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import './navbar.css';

const links = [
  'Home',
  'Services',
  'Industries',
  'Partners',
  'About Us',
  'Contact Us',
];

const paths = [
  '/',
  '/services',
  '/industries',
  '/partners',
  '/about',
  '/contact',
];

function Navbar() {
  const [show, setShow] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (currentScroll < 80) {
        setShow(true);
      } else if (currentScroll > lastScrollY.current) {
        setShow(false);
      } else {
        setShow(true);
      }

      lastScrollY.current = currentScroll;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`navbar ${show ? 'show' : 'hide'}`}>
      <motion.div
        className="nav-container"
        initial={{ y: -40, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* LEFT: LOGO INSIDE */}
        <div className="nav-left">
          <NavLink
            to="/"
            className="logo"
          >
            <img
              src="/images/logo.png"
              alt="logo"
            />
          </NavLink>
        </div>

        {/* CENTER: LINKS */}
        <nav className="nav-links">
          {links.map((item, i) => {
            if (paths[i] === '/') return null; // 🚫 hide Home

            return (
              <div
                key={i}
                className="nav-item"
              >
                <NavLink to={paths[i]}>{item}</NavLink>
              </div>
            );
          })}
        </nav>

        {/* RIGHT: CTA */}
        <div className="nav-right">
          {/* ENLITEU LOGO (LAST) */}
          <a
            href="https://enliteu.com" // 🔁 change if needed
            target="_blank"
            rel="noopener noreferrer"
            className="external-logo"
          >
            <img
              src="/images/enliteu.png"
              alt="Enliteu"
            />
          </a>
        </div>
      </motion.div>
    </header>
  );
}

export default Navbar;
