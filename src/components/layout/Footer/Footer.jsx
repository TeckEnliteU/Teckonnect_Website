// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import {
//   FaLinkedin,
//   FaTwitter,
//   FaInstagram,
//   FaYoutube,
//   FaMapMarkerAlt,
//   FaEnvelope,
//   FaPhone,
// } from 'react-icons/fa';

// import styles from '../Footer/Footer.module.css';

// const Footer = () => {
//   return (
//     <footer className={styles.footer}>
//       {/* BACKGROUND LOGO */}
//       <img
//         // src="/images/footer icon (1).svg" // 👈 your SVG
//         src={`${import.meta.env.BASE_URL}images/footer icon (1).svg`}
//         alt="bg"
//         className={styles.footer_bg}
//       />

//       <div className={styles.footer_container}>
//         {/* BRAND */}
//         <div className={styles.footer_col}>
//           <img
//             // src="/images/logo-white.png"
//             src={`${import.meta.env.BASE_URL}images/logo-white.png`}
//             alt="Teckonnect Logo"
//             className={styles.footer_logo}
//           />

//           <p>
//             Delivering secure, governed technology outcomes with clarity and
//             accountability. A trusted Managed Service Provider supporting
//             organisations with reliable, outcome driven IT services.
//           </p>

//           <div className={styles.footer_socials}>
//             <a
//               href="https://www.linkedin.com/company/teckonnect/"
//               target="_blank"
//               rel="noopener noreferrer"
//               aria-label="LinkedIn"
//             >
//               <FaLinkedin />
//             </a>
//             {/* <FaInstagram />
//             <FaTwitter /> */}

//             {/* <FaYoutube /> */}
//           </div>
//         </div>

//         {/* QUICK LINKS */}
//         <div className={styles.footer_col}>
//           <h4>Quick Links</h4>
//           <NavLink to="/">Home</NavLink>
//           <NavLink to="/about">About Us</NavLink>
//           <NavLink to="/services">Services</NavLink>
//           <NavLink to="/industries">Industries</NavLink>
//           <NavLink to="/partners">Partners</NavLink>
//           <NavLink to="/contact">Contact</NavLink>
//         </div>

//         {/* SERVICES */}
//         <div className={styles.footer_col}>
//           <h4>Our Services</h4>
//           <NavLink to="/services/microsoft">Microsoft</NavLink>
//           <NavLink to="/services/aws">AWS</NavLink>
//           <NavLink to="/services/adobe">Adobe</NavLink>
//           <NavLink to="/services/ibm">IBM</NavLink>
//           <NavLink to="/services/cybersecurity">Cybersecurity</NavLink>
//         </div>

//         {/* CONTACT */}
//         <div className={styles.footer_col}>
//           <h4>Contact Us</h4>

//           <div className={styles.footer_contactItem}>
//             <FaMapMarkerAlt />
//             <span>1 Denison St, North Sydney NSW 2060, Australia</span>
//           </div>

//           {/* <div className={styles.footer_contactItem}>
//             <FaEnvelope />
//             <span>info@teckonnect.com</span>
//           </div>

//           <div className={styles.footer_contactItem}>
//             <FaPhone />
//             <span>1800549639</span> */}

//           <div className={styles.footer_contactItem}>
//             <FaEnvelope />
//             <a href="mailto:info@teckonnect.com">info@teckonnect.com</a>
//           </div>

//           <div className={styles.footer_contactItem}>
//             <FaPhone />
//             <a href="tel:1800549639">1800549639</a>
//           </div>
//         </div>
//       </div>

//       {/* BOTTOM */}
//       <div className={styles.footer_bottom}>
//         <p>© 2026 Teckonnect. All rights reserved.</p>

//         <div>
//           <NavLink to="/terms">Terms</NavLink>
//           <NavLink to="/privacy">Privacy</NavLink>
//           <NavLink to="/cookies">Cookies</NavLink>
//         </div>
//       </div>
//     </footer>
//   );
// };

// export default Footer;
import React from 'react';
import { NavLink } from 'react-router-dom';
import {
  FaLinkedin,
  FaMapMarkerAlt,
  FaEnvelope,
  FaPhoneAlt,
} from 'react-icons/fa';
import { LuPhone } from 'react-icons/lu';
import styles from '../Footer/Footer.module.css';

const Footer = () => {
  const handleScrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className={styles.footer}>
      {/* BACKGROUND LOGO */}
      <img
        src={`${import.meta.env.BASE_URL}images/footer icon (1).svg`}
        alt="bg"
        className={styles.footer_bg}
      />

      <div className={styles.footer_container}>
        {/* BRAND */}
        <div className={styles.footer_col}>
          <img
            src={`${import.meta.env.BASE_URL}images/logo-white.png`}
            alt="Teckonnect Logo"
            className={styles.footer_logo}
          />

          <p>
            Delivering secure, governed technology outcomes with clarity and
            accountability. A trusted Managed Service Provider supporting
            organisations with reliable, outcome driven IT services.
          </p>

          <div className={styles.footer_socials}>
            <a
              href="https://www.linkedin.com/company/teckonnect/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* QUICK LINKS */}
        <div className={styles.footer_col}>
          <h4>Quick Links</h4>

          <NavLink
            to="/"
            onClick={handleScrollTop}
          >
            Home
          </NavLink>

          <NavLink
            to="/about"
            onClick={handleScrollTop}
          >
            About Us
          </NavLink>

          <NavLink
            to="/services"
            onClick={handleScrollTop}
          >
            Services
          </NavLink>

          <NavLink
            to="/industries"
            onClick={handleScrollTop}
          >
            Industries
          </NavLink>

          <NavLink
            to="/insights"
            onClick={handleScrollTop}
          >
            Insights
          </NavLink>
          <NavLink
            to="/partners"
            onClick={handleScrollTop}
          >
            Partners
          </NavLink>

          <NavLink
            to="/contact"
            onClick={handleScrollTop}
          >
            Contact
          </NavLink>
        </div>

        {/* SERVICES */}
        <div className={styles.footer_col}>
          <h4>Our Services</h4>

          <NavLink
            to="/services/microsoft"
            onClick={handleScrollTop}
          >
            Microsoft
          </NavLink>

          <NavLink
            to="/services/aws"
            onClick={handleScrollTop}
          >
            AWS
          </NavLink>

          <NavLink
            to="/services/adobe"
            onClick={handleScrollTop}
          >
            Adobe
          </NavLink>

          <NavLink
            to="/services/ibm"
            onClick={handleScrollTop}
          >
            IBM
          </NavLink>

          <NavLink
            to="/services/cybersecurity"
            onClick={handleScrollTop}
          >
            Cybersecurity
          </NavLink>
        </div>

        {/* CONTACT */}
        <div className={styles.footer_col}>
          <h4>Contact Us</h4>

          <div className={styles.footer_contactItem}>
            <FaMapMarkerAlt />
            <span>1 Denison St, North Sydney NSW 2060, Australia</span>
          </div>

          <div className={styles.footer_contactItem}>
            <FaEnvelope />
            <a href="mailto:info@teckonnect.com">info@teckonnect.com</a>
          </div>

          <div className={styles.footer_contactItem}>
            <FaPhoneAlt className={styles.phoneIcon} />
            <a href="tel:1800549639">1800549639</a>
          </div>
        </div>
      </div>

      {/* BOTTOM */}
      <div className={styles.footer_bottom}>
        <p>© 2026 Teckonnect. All rights reserved.</p>

        <div>
          <NavLink
            to="/terms"
            onClick={handleScrollTop}
          >
            Terms
          </NavLink>

          <NavLink
            to="/privacy"
            onClick={handleScrollTop}
          >
            Privacy
          </NavLink>

          <NavLink
            to="/cookies"
            onClick={handleScrollTop}
          >
            Cookies
          </NavLink>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
