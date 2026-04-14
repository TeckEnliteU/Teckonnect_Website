import React, { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';

import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

import { FaLinkedin, FaTwitter, FaInstagram, FaYoutube } from 'react-icons/fa';
import styles from '../Footer/Footer.module.css';

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const footerRef = useRef(null);
  const location = useLocation(); // ✅ detect route change

  useEffect(() => {
    const el = footerRef.current;

    const ctx = gsap.context(() => {
      gsap.from(el.querySelectorAll(`.${styles.footer_fade}`), {
        opacity: 0,
        y: 40,
        stagger: 0.08,
        duration: 0.8,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 90%',
        },
      });
    }, el);

    // ✅ refresh scroll after route change
    ScrollTrigger.refresh();

    return () => ctx.revert(); // cleanup
  }, [location.pathname]); // 🔥 KEY FIX

  return (
    <footer
      ref={footerRef}
      className={styles.footer}
    >
      {/* CTA */}
      <div className={`${styles.footer_ctaRow} ${styles.footer_fade}`}>
        <div className={styles.footer_ctaInput}>
          <input placeholder="Enter your email" />
          <button>Send Now</button>
        </div>
      </div>

      <div className={styles.footer_divider}></div>

      {/* GRID */}
      <div className={styles.footer_grid}>
        <div className={`${styles.footer_col} ${styles.footer_fade}`}>
          <h3 className={styles.footer_brand}>TECKONNECT</h3>

          <div className={styles.footer_socials}>
            <FaInstagram />
            <FaTwitter />
            <FaLinkedin />
            <FaYoutube />
          </div>

          <a className={styles.footer_email}>info@teckonnect.com</a>
        </div>

        <div className={`${styles.footer_col} ${styles.footer_fade}`}>
          <h4>Pages</h4>
          <a>Home</a>
          <a>Company</a>
          <a>Resources</a>
          <a>Pricing</a>
          <a>Careers</a>
        </div>

        <div className={`${styles.footer_col} ${styles.footer_fade}`}>
          <h4>Services</h4>
          <a>Microsoft</a>
          <a>AWS</a>
          <a>IBM</a>
          <a>Cybersecurity</a>
        </div>

        <div className={`${styles.footer_col} ${styles.footer_fade}`}>
          <h4>Company</h4>
          <a>Industries</a>
          <a>Partners</a>
          <a>Insights</a>
          <a>About</a>
        </div>

        <div className={`${styles.footer_col} ${styles.footer_fade}`}>
          <h4>Legal</h4>
          <a>Privacy Policy</a>
          <a>Terms</a>
          <a>Cookies</a>
        </div>
      </div>

      <div className={styles.footer_divider}></div>

      {/* BOTTOM */}
      <div className={`${styles.footer_bottom} ${styles.footer_fade}`}>
        <p>© 2025 Teckonnect. All rights reserved.</p>

        <div>
          <a>Terms & Condition</a>
          <a>Privacy Policy</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
