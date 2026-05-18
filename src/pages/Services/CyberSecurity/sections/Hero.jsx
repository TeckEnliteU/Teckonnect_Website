import React, { useEffect, useState } from 'react';

import { FaShieldAlt, FaLock, FaServer } from 'react-icons/fa';

import styles from '../CyberSecurity.module.css';
import { Link } from 'react-router-dom';
/* =========================================
   COUNT UP COMPONENT
========================================= */

const Counter = ({ end, suffix = '', duration = 2000 }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;

    const increment = end / (duration / 16);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [end, duration]);

  return (
    <>
      {count}
      {suffix}
    </>
  );
};

const Hero = () => {
  return (
    <section className={styles.cyberHero}>
      {/* BACKGROUND */}

      <div className={styles.cyberGrid}></div>

      <div className={styles.cyberGlowOne}></div>
      <div className={styles.cyberGlowTwo}></div>

      {/* CONTAINER */}

      <div className={styles.cyberContainer}>
        {/* LEFT */}

        <div className={styles.cyberContent}>
          {/* LABEL */}

          <div className={styles.cyberLabel}>
            <span></span>
            TECKONNECT CYBERSECURITY SOLUTIONS
          </div>

          {/* TITLE */}

          <h1 className={styles.cyberTitle}>
            Secure Your Digital Future with
            <span> Intelligent Cybersecurity</span>
          </h1>

          {/* DESCRIPTION */}

          <p className={styles.cyberDescription}>
            In today's rapidly evolving threat landscape, businesses face
            increasing risks from ransomware, phishing attacks, data breaches,
            and advanced persistent threats.
          </p>

          <p className={styles.cyberDescription}>
            Teckonnect delivers enterprise-grade cybersecurity solutions that
            safeguard infrastructure, cloud environments, applications, and
            critical business assets through proactive security operations and
            strategic risk management.
          </p>

          {/* BUTTONS */}

          <div className={styles.cyberButtons}>
            <Link
              to="/services"
              className={styles.primaryBtn}
            >
              Explore Services
            </Link>

            <Link
              to="/contact"
              className={styles.secondaryBtn}
            >
              Security Consultation
            </Link>
          </div>

          {/* STATS */}

          <div className={styles.cyberStats}>
            <div className={styles.statItem}>
              <h3>
                <Counter
                  end={24}
                  suffix="/7"
                />
              </h3>

              <p>Security Monitoring</p>
            </div>

            <div className={styles.statItem}>
              <h3>
                <Counter
                  end={99}
                  suffix=".9%"
                />
              </h3>

              <p>Threat Detection Accuracy</p>
            </div>

            <div className={styles.statItem}>
              <h3>
                <Counter
                  end={100}
                  suffix="+"
                />
              </h3>

              <p>Protected Enterprise Assets</p>
            </div>
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.cyberVisual}>
          {/* MAIN CARD */}

          <div className={styles.visualCard}>
            <div className={styles.visualTop}>
              <div className={styles.visualIcon}>
                <FaShieldAlt />
              </div>

              <div className={styles.liveBadge}>LIVE SECURITY</div>
            </div>

            <h3>Advanced Threat Protection</h3>

            <p>
              Intelligent cybersecurity monitoring and real-time enterprise
              protection powered by modern security operations.
            </p>

            {/* MINI BOXES */}

            <div className={styles.visualGrid}>
              <div className={styles.visualMini}>
                <FaLock />
                <span>Identity Security</span>
              </div>

              <div className={styles.visualMini}>
                <FaServer />
                <span>Cloud Protection</span>
              </div>
            </div>

            {/* BOTTOM */}

            <div className={styles.securityBar}>
              <div className={styles.securityFill}></div>
            </div>

            <div className={styles.securityInfo}>
              <span>Threat Protection</span>

              <strong>
                <Counter
                  end={98}
                  suffix="%"
                />
              </strong>
            </div>
          </div>

          {/* FLOATING CARD */}

          <div className={styles.floatingCard}>
            <span className={styles.pulse}></span>

            <h4>Threats Blocked</h4>

            <strong>
              <Counter
                end={12480}
                suffix="+"
                duration={2500}
              />
            </strong>

            <p>Real-time security events prevented</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
