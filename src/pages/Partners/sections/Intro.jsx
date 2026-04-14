import React from 'react';
import styles from '../Partners.module.css';

const Intro = () => {
  return (
    <section className={styles.partnersIntro}>
      <div className={styles.partnersIntroContainer}>
        {/* LEFT */}
        <div className={styles.partnersIntroContent}>
          <div className={styles.partnersIntroBadge}>Strategic Alliances</div>

          <h2 className={styles.partnersIntroTitle}>
            Powering Innovation Through Partnerships
          </h2>

          <p className={styles.partnersIntroText}>
            By leveraging our strategic partnerships, we enable organizations to
            access cutting-edge technologies, proven methodologies, and
            industry-leading platforms that accelerate innovation, strengthen
            security, and drive long-term business success.
          </p>
        </div>

        {/* RIGHT */}
        <div className={styles.partnersIntroVisual}>
          <div className={styles.partnersIntroImageCard}>
            <img
              src="/images/partnership.jpg"
              alt="Partnership"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Intro;
