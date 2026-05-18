import { NavLink, useNavigate, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import { FiSearch, FiMenu, FiX } from 'react-icons/fi';

import './navbar.css';

function Navbar() {
  /* STATES */

  const [scrolled, setScrolled] = useState(false);

  const [openSearch, setOpenSearch] = useState(false);

  const [query, setQuery] = useState('');
  const [showAnnouncement, setShowAnnouncement] = useState(true);
  /* 🔥 SEPARATE STATES */

  const [servicesOpen, setServicesOpen] = useState(false);

  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const [activeService, setActiveService] = useState('microsoft');
  const [industriesOpen, setIndustriesOpen] = useState(false);

  const [activeIndustry, setActiveIndustry] = useState('healthcare');

  /* REFS */

  const searchRef = useRef(null);

  const navigate = useNavigate();

  const location = useLocation();

  const isHome = location.pathname === '/';

  /* SEARCH DATA */

  const searchData = [
    { name: 'Services', path: '/services' },

    { name: 'Industries', path: '/industries' },

    { name: 'Partners', path: '/partners' },

    { name: 'About Us', path: '/about' },

    { name: 'Contact', path: '/contact' },
  ];

  /* SCROLL EFFECT */

  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;

      if (isHome) {
        setScrolled(currentScroll > 20);
      } else {
        setScrolled(true);
      }
    };

    window.addEventListener('scroll', handleScroll);

    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, [isHome]);

  /* CLICK OUTSIDE SEARCH */

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
      if (e.key === 'Escape') {
        setOpenSearch(false);
      }
    };

    document.addEventListener('keydown', handleEsc);

    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  /* SEARCH FILTER */

  const filtered = searchData.filter((item) =>
    item.name.toLowerCase().includes(query.toLowerCase()),
  );

  /* NAVIGATE */

  const handleNavigate = (path) => {
    navigate(path);

    setOpenSearch(false);

    setServicesOpen(false);

    setMobileMenuOpen(false);

    setQuery('');
  };
  // industries
  const handleIndustryNavigate = (path) => {
    handleNavigate(path);
    setIndustriesOpen(false);
  };

  return (
    <>
      <header className={`navbar ${scrolled ? 'scrolled' : ''}`}>
        {showAnnouncement && (
          <div className="announcement-bar">
            <div className="announcement-content">
              Our website is currently under development; certain features may
              be limited — please{' '}
              <NavLink
                to="/contact"
                className="announcement-link"
                onClick={() => {
                  setShowAnnouncement(false);
                }}
              >
                contact us
              </NavLink>
              {'   '}
              for further assistance.
            </div>

            <button
              className="announcement-close"
              onClick={() => setShowAnnouncement(false)}
            >
              ✕
            </button>
          </div>
        )}
        <motion.div
          className="nav-container"
          initial={{ y: -30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {/* LEFT */}

          <div className="nav-left">
            <NavLink
              to="/"
              onClick={(e) => {
                if (location.pathname === '/') {
                  e.preventDefault();

                  window.scrollTo({
                    top: 0,
                    behavior: 'smooth',
                  });
                }

                setServicesOpen(false);

                setMobileMenuOpen(false);

                setOpenSearch(false);

                setQuery('');
              }}
            >
              <img
                className="logo-img"
                src={
                  scrolled
                    ? `${import.meta.env.BASE_URL}images/logo-dark.svg`
                    : `${import.meta.env.BASE_URL}images/logo-white.png`
                }
                alt="logo"
              />
            </NavLink>
          </div>

          {/* CENTER */}

          <nav className="nav-center">
            {/* SERVICES */}

            <div
              className="services-dropdown"
              onMouseLeave={() => setServicesOpen(false)}
            >
              {/* BUTTON */}

              <button
                className="services-trigger"
                onMouseEnter={() => setServicesOpen(true)}
              >
                {/* <NavLink to="/services">Services</NavLink> */}
                <NavLink
                  to="/services"
                  onClick={() => {
                    setServicesOpen(false);
                  }}
                >
                  Services
                </NavLink>
                <svg
                  className="dropdown-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* MEGA MENU */}

              {servicesOpen && (
                <div className="services-menu">
                  {/* SIDEBAR */}

                  <div className="services-sidebar">
                    <p>OVERVIEW</p>

                    {/* MICROSOFT */}

                    <button
                      className={
                        activeService === 'microsoft' ? 'active-service' : ''
                      }
                      onMouseEnter={() => setActiveService('microsoft')}
                      onClick={() => handleNavigate('/services/microsoft')}
                    >
                      <span>Microsoft Solutions</span>

                      <span>›</span>
                    </button>

                    {/* AWS */}

                    <button
                      className={
                        activeService === 'aws' ? 'active-service' : ''
                      }
                      onMouseEnter={() => setActiveService('aws')}
                      onClick={() => handleNavigate('/services/aws')}
                    >
                      <span>AWS Solutions</span>

                      <span>›</span>
                    </button>

                    {/* IBM */}

                    <button
                      className={
                        activeService === 'ibm' ? 'active-service' : ''
                      }
                      onMouseEnter={() => setActiveService('ibm')}
                      onClick={() => handleNavigate('/services/ibm')}
                    >
                      <span>IBM Solutions</span>

                      <span>›</span>
                    </button>

                    {/* ADOBE */}

                    <button
                      className={
                        activeService === 'adobe' ? 'active-service' : ''
                      }
                      onMouseEnter={() => setActiveService('adobe')}
                      onClick={() => handleNavigate('/services/adobe')}
                    >
                      <span>Adobe Solutions</span>

                      <span>›</span>
                    </button>

                    {/* CYBER */}

                    <button
                      className={
                        activeService === 'cybersecurity'
                          ? 'active-service'
                          : ''
                      }
                      onMouseEnter={() => setActiveService('cybersecurity')}
                      onClick={() => handleNavigate('/services/cybersecurity')}
                    >
                      <span>Cybersecurity Solutions</span>

                      <span>›</span>
                    </button>
                  </div>

                  {/* CONTENT */}

                  <div className="services-content">
                    {/* MICROSOFT */}

                    {activeService === 'microsoft' && (
                      <>
                        {/* LEFT LINKS */}

                        <div className="services-links">
                          <h3>Explore Our Microsoft Service Platforms</h3>

                          <NavLink
                            to="/services/microsoft/microsoft-365"
                            onClick={() => setServicesOpen(false)}
                          >
                            Microsoft 365 & Modern Workplace
                          </NavLink>

                          <NavLink
                            to="/services/microsoft/azure"
                            onClick={() => setServicesOpen(false)}
                          >
                            Azure Cloud Services
                          </NavLink>

                          <NavLink
                            to="/services/microsoft/dynamics-365"
                            onClick={() => setServicesOpen(false)}
                          >
                            Dynamics 365 & Power Platform
                          </NavLink>
                        </div>

                        {/* RIGHT CONTENT */}

                        <div className="services-description">
                          <h2>Microsoft Solution Designation Partner</h2>

                          <p>
                            As a certified Microsoft Solutions Designation
                            Partner, Teckonnect brings validated expertise
                            across Microsoft’s most critical solution areas. Our
                            designation reflects our proven ability to deliver
                            secure, scalable, and outcome-driven solutions that
                            help organisations modernise operations, strengthen
                            governance, and drive innovation.
                          </p>

                          <p>
                            We specialise in delivering end-to-end Microsoft
                            services tailored to enterprise, government, and
                            growing businesses.
                          </p>

                          <img
                            src="/logos/Microsoftcert.svg"
                            alt="Microsoft Partner"
                          />

                          <div
                            className="bottomExplore"
                            onClick={() =>
                              handleNavigate('/services/microsoft')
                            }
                          >
                            Explore Our Microsoft Solutions →
                          </div>
                        </div>
                      </>
                    )}
                    {/* AWS */}

                    {activeService === 'aws' && (
                      <div className="services-description full-width">
                        <h2>AWS Select Tier Partner</h2>

                        <p>
                          As a certified AWS Select Tier Partner, Teckonnect
                          brings deep expertise in cloud transformation,
                          migration, and optimisation. Our credentials reflect
                          our capability to deliver secure, scalable, and
                          cost-efficient
                        </p>

                        <p>
                          cloud environments that enable organisations to
                          innovate faster and operate with greater agility. We
                          specialise in delivering end-to-end AWS solutions
                          tailored to enterprise, government, and high-growth
                          organisations
                        </p>

                        <img
                          src="/logos/awscert.svg"
                          alt=""
                        />

                        <div
                          className="bottomExplore"
                          onClick={() => handleNavigate('/services/aws')}
                        >
                          Explore Our AWS Solutions →
                        </div>
                      </div>
                    )}

                    {/* IBM */}

                    {activeService === 'ibm' && (
                      <div className="services-description full-width">
                        <h2>IBM Silver Partner</h2>

                        <p>
                          As a IBM Silver Partner, Teckonnect helps
                          organisations modernise and secure their critical
                          business operations. Our expertise is built on strong
                          governance, intelligent automation, and data-driven
                          strategies
                        </p>

                        <p>
                          that support complex and regulated environments. We
                          specialise in delivering end-to-end IBM solutions
                          tailored to enterprise, government, and
                          compliance-driven industries.
                        </p>

                        <img
                          src="/logos/IBMcert.svg"
                          alt=""
                        />
                        <div
                          className="bottomExplore"
                          onClick={() => handleNavigate('/services/ibm')}
                        >
                          Explore Our IBM Solutions →
                        </div>
                      </div>
                    )}

                    {/* ADOBE */}

                    {activeService === 'adobe' && (
                      <div className="services-description full-width">
                        <h2>Adobe Certified Reseller Partner</h2>

                        <p>
                          As a Adobe Certified Reseller partner , Teckonnect
                          enables organisations to deliver impactful digital
                          experiences and streamlined document workflows. Our
                          expertise supports businesses in creating connected,
                        </p>

                        <p>
                          engaging, and scalable customer journeys across every
                          touchpoint. We specialise in delivering end-to-end
                          Adobe services tailored to enterprise, government, and
                          digital-first organisations.
                        </p>

                        <img
                          src="/logos/adobe certified reseller.png"
                          alt=""
                        />

                        <div
                          className="bottomExplore"
                          onClick={() => handleNavigate('/services/adobe')}
                        >
                          Explore Our Adobe Solutions →
                        </div>
                      </div>
                    )}

                    {/* {cybersecurity } */}

                    {activeService === 'cybersecurity' && (
                      <div className="services-description full-width">
                        <h2>Cybersecurity Solution </h2>

                        <p>
                          Teckonnect delivers advanced cybersecurity services
                          that help organisations strengthen resilience, secure
                          infrastructure, and manage evolving digital threats
                          across enterprise environments.
                        </p>

                        <p>
                          We specialise in delivering end-to-end cybersecurity
                          services tailored to enterprise, government, and
                          compliance-driven industries
                        </p>
                        <div className="service-spacer"></div>
                        <div
                          className="bottomExplore"
                          onClick={() =>
                            handleNavigate('/services/cybersecurity')
                          }
                        >
                          Explore Our Cyber Security Solutions →
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              )}
            </div>

            {/* OTHER LINKS */}

            {/* <NavLink to="/industries">Industries</NavLink> */}
            {/* industries inner page  */}

            <div
              className="industries-dropdown"
              onMouseLeave={() => setIndustriesOpen(false)}
            >
              {/* BUTTON */}

              <button
                className="industries-trigger"
                onMouseEnter={() => setIndustriesOpen(true)}
              >
                <NavLink
                  to="/industries"
                  onClick={() => {
                    setIndustriesOpen(false);
                  }}
                >
                  Industries
                </NavLink>

                <svg
                  className="industries-icon"
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M6 9L12 15L18 9"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>

              {/* MENU */}

              {industriesOpen && (
                <div className="industries-menu">
                  {/* LEFT */}

                  <div className="industries-sidebar">
                    <p>INDUSTRIES</p>

                    <div className="industries-grid">
                      <button
                        className={
                          activeIndustry === 'healthcare'
                            ? 'active-industry'
                            : ''
                        }
                        onMouseEnter={() => setActiveIndustry('healthcare')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/healthcare')
                        }
                      >
                        <span>Healthcare</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'public-sector'
                            ? 'active-industry'
                            : ''
                        }
                        onMouseEnter={() => setActiveIndustry('public-sector')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/publicsector')
                        }
                      >
                        <span>Public Sector</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'manufacturing'
                            ? 'active-industry'
                            : ''
                        }
                        onMouseEnter={() => setActiveIndustry('manufacturing')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/manufacturing')
                        }
                      >
                        <span>Manufacturing</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'retail' ? 'active-industry' : ''
                        }
                        onMouseEnter={() => setActiveIndustry('retail')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/retail')
                        }
                      >
                        <span>Retail</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'education'
                            ? 'active-industry'
                            : ''
                        }
                        onMouseEnter={() => setActiveIndustry('education')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/education')
                        }
                      >
                        <span>Education</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'logistics'
                            ? 'active-industry'
                            : ''
                        }
                        onMouseEnter={() => setActiveIndustry('logistics')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/logistics')
                        }
                      >
                        <span>Logistics</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'oil-gas' ? 'active-industry' : ''
                        }
                        onMouseEnter={() => setActiveIndustry('oil-gas')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/oilgas')
                        }
                      >
                        <span>Oil & Gas</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'mining' ? 'active-industry' : ''
                        }
                        onMouseEnter={() => setActiveIndustry('mining')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/mining')
                        }
                      >
                        <span>Mining</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'non-profit'
                            ? 'active-industry'
                            : ''
                        }
                        onMouseEnter={() => setActiveIndustry('non-profit')}
                        onClick={() =>
                          handleIndustryNavigate('/industries/nonprofit')
                        }
                      >
                        <span>Non-Profit</span>
                        <span>›</span>
                      </button>

                      <button
                        className={
                          activeIndustry === 'business' ? 'active-industry' : ''
                        }
                        onMouseEnter={() => setActiveIndustry('business')}
                        onClick={() =>
                          handleIndustryNavigate(
                            '/industries/SmallEnterpriseBusiness',
                          )
                        }
                      >
                        <span>Business</span>
                        <span>›</span>
                      </button>
                    </div>
                  </div>

                  {/* RIGHT */}

                  <div className="industries-content">
                    <h2>Explore Industry Solutions</h2>

                    <p>
                      Teckonnect delivers secure, scalable, and future-ready IT
                      solutions tailored to unique industry environments —
                      helping organisations modernise operations, improve
                      efficiency, and scale with confidence.
                    </p>

                    <div
                      className="industryExplore"
                      onClick={() => handleIndustryNavigate('/industries')}
                    >
                      Explore All Industries →
                    </div>
                  </div>
                </div>
              )}
            </div>

            <NavLink to="/partners">Partners</NavLink>

            <NavLink to="/about">About Us</NavLink>
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

            {/* MOBILE */}

            <div
              className="menu-toggle"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? <FiX /> : <FiMenu />}
            </div>
          </div>
        </motion.div>

        {/* MOBILE MENU */}

        {mobileMenuOpen && (
          <div className="mobile-menu">
            <NavLink
              to="/services/microsoft"
              onClick={() => setMobileMenuOpen(false)}
            >
              Services
            </NavLink>

            <NavLink
              to="/industries"
              onClick={() => setMobileMenuOpen(false)}
            >
              Industries
            </NavLink>

            <NavLink
              to="/partners"
              onClick={() => setMobileMenuOpen(false)}
            >
              Partners
            </NavLink>

            <NavLink
              to="/about"
              onClick={() => setMobileMenuOpen(false)}
            >
              About Us
            </NavLink>

            <NavLink
              to="/contact"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </NavLink>
          </div>
        )}
      </header>
    </>
  );
}

export default Navbar;
