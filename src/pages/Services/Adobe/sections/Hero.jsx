import React from 'react';

import styles from '../Adobe.module.css';

const Hero = () => {
  return (
    <section className={styles.adobeHero}>
      <div className={styles.adobeHeroContainer}>
        {/* LABEL */}
        <span className={styles.heroLabel}>
          ADOBE CERTIFIED RESELLER SOLUTIONS
        </span>

        {/* TITLE */}
        <h1 className={styles.heroTitle}>
          Adobe Certified
          <br />
          Reseller Solutions
          <br />
          for Business <span></span>
          <span>
            Licensing
            <br />
            Deployment &
            <br />
            Adoption
          </span>
        </h1>

        {/* DESCRIPTION */}
        <p className={styles.heroDescription}>
          Buying Adobe is easy. Managing it across teams, devices, compliance
          needs, renewals, and budgets is where most organisations struggle.
        </p>

        {/* SUB TEXT */}
        <p className={styles.heroSubText}>
          Teckonnect (Adobe Certified Reseller) helps you select the right Adobe
          plans, deploy them at scale, control access, and keep users productive
          across Creative Cloud for teams and Acrobat for business / eSign
          workflows. Adobe’s channel partner ecosystem includes resellers who
          provide expert sales and technical support for purchasing Adobe
          business solutions.
        </p>

        {/* RIGHT SIDE VISUAL */}
        <div className={styles.adobeRight}>
          <div className={styles.adobeVisualWrapper}>
            {/* OUTER RING */}
            <div className={styles.adobeRing}></div>

            {/* CENTER CARD */}
            <div className={styles.adobeCard}>
              <img
                src="/logos/adobe certified reseller.png"
                alt="Adobe"
                className={styles.adobeLogo}
              />
            </div>

            {/* FLOATING TAGS */}
            <div className={styles.adobeFloatOne}>Creative Cloud</div>

            <div className={styles.adobeFloatTwo}>Acrobat</div>

            <div className={styles.adobeFloatThree}>eSign</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
