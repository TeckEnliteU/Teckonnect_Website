import React from 'react';
import styles from '../OilGas.module.css';

const Hero = () => {
  return (
    <section className={styles.publicHero}>
      {/* Background Image */}
      <div className={styles.heroBg}></div>

      {/* Left Gradient Overlay */}
      <div className={styles.heroOverlay}></div>

      <div className={styles.heroContainer}>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}> Utilities Industry Solutions</span>

          <h1>
            Powering Reliable, Secure
            {/* <span> ,</span> */}
            <span> and Always-On Utility Operations</span>
          </h1>

          <p>
            Utility organizations operate in environments where failure is not
            an option. Whether it’s electricity, water, gas, or environmental
            services—every system must remain secure, available, and responsive
            at all times.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
