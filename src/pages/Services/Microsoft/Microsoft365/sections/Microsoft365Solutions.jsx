import React, { useEffect, useRef, useState } from 'react';
import styles from '../Microsoft365.module.css';

import { FaShieldAlt, FaChartLine, FaCloud, FaRocket } from 'react-icons/fa';

/* =========================================
   COUNT ANIMATION
========================================= */

const CountUp = ({ end, suffix }) => {
  const [count, setCount] = useState(0);

  const countRef = useRef(null);

  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
        }
      },
      {
        threshold: 0.4,
      },
    );

    if (countRef.current) {
      observer.observe(countRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!visible) return;

    let start = 0;

    const duration = 2200;

    const step = end / (duration / 16);

    const timer = setInterval(() => {
      start += step;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [visible, end]);

  return (
    <span ref={countRef}>
      {count}
      {suffix}
    </span>
  );
};

/* =========================================
   COMPONENT
========================================= */

const WhyTeckonnect = () => {
  return (
    <section className={styles.whyTeckSection}>
      <div className={styles.whyTeckContainer}>
        {/* LEFT SIDE */}
        <div className={styles.whyTeckLeft}>
          <span className={styles.whyTeckLabel}>WHY TECKONNECT</span>

          <div className={styles.whyTeckLine}></div>

          <h2 className={styles.whyTeckTitle}>
            A Trusted Partner for Enterprise
            <br />
            <span>Cloud Transformation</span>
          </h2>

          <p className={styles.whyTeckDescription}>
            Certified experts helping organizations improve productivity,
            collaboration, and operational efficiency with tailored strategies
            and a proven delivery model.
          </p>

          {/* STATS */}
          <div className={styles.statsGrid}>
            <div className={styles.statCard}>
              <h3>
                <CountUp
                  end={500}
                  suffix="+"
                />
              </h3>

              <p>Enterprises Served</p>
            </div>

            <div className={styles.statCard}>
              <h3>
                <CountUp
                  end={98}
                  suffix="%"
                />
              </h3>

              <p>Client Satisfaction</p>
            </div>

            <div className={styles.statCard}>
              <h3>
                <CountUp
                  end={8}
                  suffix="+"
                />
              </h3>

              <p>Years of Excellence</p>
            </div>

            <div className={styles.statCard}>
              <h3>
                <CountUp
                  end={50}
                  suffix="+"
                />
              </h3>

              <p>Certified Experts</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.whyTeckRight}>
          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>
              <FaCloud />
            </div>

            <div>
              <h3>End-to-End Solutions</h3>

              <p>
                From assessment and migration to deployment and ongoing support.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>
              <FaShieldAlt />
            </div>

            <div>
              <h3>Security-First Approach</h3>

              <p>
                Advanced threat protection and compliance built into every
                solution.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>
              <FaChartLine />
            </div>

            <div>
              <h3>Cost Optimization</h3>

              <p>
                Reduce complexity and maximize ROI on every Microsoft
                investment.
              </p>
            </div>
          </div>

          <div className={styles.featureBox}>
            <div className={styles.featureIcon}>
              <FaRocket />
            </div>

            <div>
              <h3>Business Outcomes</h3>

              <p>
                Clear KPIs and structured roadmaps that deliver measurable
                growth.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyTeckonnect;
