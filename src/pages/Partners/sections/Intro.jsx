import React from 'react';
import styles from '../Partners.module.css';

const Intro = () => {
  return (
    <section className={styles.partnersIntro}>
      <div className={styles.partnersIntroContainer}>
        <div className={styles.partnersIntroContent}>
          <div className={styles.partnersIntroBadge}>Strategic Alliances</div>

          <h2 className={styles.partnersIntroTitle}>
            Powering <span>Innovation</span>
            <br />
            Through <span>Partnerships</span>
          </h2>

          <p className={styles.partnersIntroText}>
            By leveraging our strategic partnerships, we enable organizations to
            access cutting-edge technologies, proven methodologies, and
            industry-leading platforms that accelerate innovation, strengthen
            security, and drive long-term business success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Intro;
