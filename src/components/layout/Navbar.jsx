import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';
import './navbar.css';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [openSearch, setOpenSearch] = useState(false);
  const [query, setQuery] = useState('');
  const [menuOpen, setMenuOpen] = useState(false);

  const searchRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation(); // ✅ route detect

  const isHome = location.pathname === '/'; // ✅ check home

  const searchData = [
    { name: 'Services', path: '/services' },
    { name: 'Industries', path: '/industries' },
    { name: 'Partners', path: '/partners' },
    { name: 'About Us', path: '/about' },
    { name: 'Contact', path: '/contact' },
  ];

  /* 🔥 FINAL SCROLL + ROUTE FIX */
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (isHome) {
        // ✅ ONLY home behaves dynamically
        if (currentScroll > 20) {
          setScrolled(true);
        } else {
          setScrolled(false);
        }
      } else {
        // ✅ other pages always white
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    // ✅ run immediately when route changes
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  /* CLICK OUTSIDE CLOSE SEARCH */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        setOpenSearch(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  /* ESC CLOSE SEARCH */
  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') setOpenSearch(false);
    };

    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  /* SEARCH */
  const filtered = searchData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  const handleNavigate = (path) => {
    navigate(path);
    setOpenSearch(false);
    setMenuOpen(false);
    setQuery('');
  };

  return (
    <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <motion.div
        className="nav-container"
        initial={{ y: -30, opacity: 0 }}
        animate={{ y: 0, opacity: 10 }}
        transition={{ duration: 0.1 }}
      >
        {/* LEFT */}
        <div className="nav-left">
          <NavLink to="/">
            <img
              className="logo-img"
              src={
                scrolled ? '/images/logo-dark.svg' : '/images/logo-white.png'
              }
              alt="logo"
            />
          </NavLink>
        </div>

        {/* CENTER */}
        <nav className="nav-center">
          {/* <NavLink to="/services">Services</NavLink>
          <NavLink to="/industries">Industries</NavLink>
          <NavLink to="/partners">Partners</NavLink>
          <NavLink to="/about">About Us</NavLink> */}

          <NavLink
            to="/services"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Services
          </NavLink>

          <NavLink
            to="/industries"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Industries
          </NavLink>

          <NavLink
            to="/partners"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            Partners
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) => (isActive ? 'active' : '')}
          >
            About Us
          </NavLink>
        </nav>

        {/* RIGHT */}
        <div className="nav-right">
          {/* SEARCH */}
          <div
            className="search-wrapper"
            ref={searchRef}
          >
            <FiSearch
              className="search-icon"
              onClick={() => setOpenSearch(!openSearch)}
            />

            {openSearch && (
              <div className="search-box">
                <input
                  type="text"
                  placeholder="Search..."
                  value={query}
                  onChange={(e) => setQuery(e.target.value)}
                />

                {query && (
                  <div className="search-results">
                    {filtered.length > 0 ? (
                      filtered.map((item, i) => (
                        <div
                          key={i}
                          onClick={() => handleNavigate(item.path)}
                        >
                          {item.name}
                        </div>
                      ))
                    ) : (
                      <p>No results</p>
                    )}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* CONTACT */}
          <NavLink
            to="/contact"
            className="contact-btn"
          >
            Contact Us
          </NavLink>

          {/* MOBILE MENU */}
          <div
            className="menu-toggle"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <FiX /> : <FiMenu />}
          </div>
        </div>
      </motion.div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="mobile-menu">
          <NavLink
            to="/services"
            onClick={() => setMenuOpen(false)}
          >
            Services
          </NavLink>
          <NavLink
            to="/industries"
            onClick={() => setMenuOpen(false)}
          >
            Industries
          </NavLink>
          <NavLink
            to="/partners"
            onClick={() => setMenuOpen(false)}
          >
            Partners
          </NavLink>
          <NavLink
            to="/about"
            onClick={() => setMenuOpen(false)}
          >
            About Us
          </NavLink>
          <NavLink
            to="/contact"
            onClick={() => setMenuOpen(false)}
          >
            Contact
          </NavLink>
        </div>
      )}
    </header>
  );
}

export default Navbar;
