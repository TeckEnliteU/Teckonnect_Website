// import React from 'react';
// import styles from '../Aws.module.css';

// const Hero = () => {
//   return (
//     <section className={styles.awsHero}>
//       {/* GLOW EFFECTS */}
//       <div className={styles.heroGlowOne}></div>
//       <div className={styles.heroGlowTwo}></div>

//       <div className={styles.awsHeroContainer}>
//         {/* TOP LABEL */}
//         <div className={styles.awsTopLabel}>
//           <span></span>
//           SELECT TIER AWS PARTNER
//         </div>

//         {/* TITLE */}
//         <h1 className={styles.awsTitle}>
//           AWS <span>Cloud Services</span>
//         </h1>

//         {/* DESCRIPTION */}
//         <p className={styles.awsDescription}>
//           Accelerate enterprise transformation with scalable, secure, and
//           cost-optimized AWS cloud solutions. We help organisations modernise
//           infrastructure, automate operations, improve governance, and deliver
//           high-performance cloud environments.
//         </p>

//         {/* TAGS */}
//         <div className={styles.awsTags}>
//           <span>Cloud Migration</span>
//           <span>DevOps</span>
//           <span>Security</span>
//           <span>FinOps</span>
//           <span>Hybrid Cloud</span>
//           <span>Managed Services</span>
//         </div>

//         {/* STATS */}
//         <div className={styles.heroStats}>
//           <div className={styles.statCard}>
//             <h3>99.99%</h3>
//             <p>Cloud Availability</p>
//           </div>

//           <div className={styles.statCard}>
//             <h3>24/7</h3>
//             <p>Enterprise Support</p>
//           </div>

//           <div className={styles.statCard}>
//             <h3>Secure</h3>
//             <p>AWS Infrastructure</p>
//           </div>
//         </div>

//       </div>

//     </section>
//   );
// };

// export default Hero;
import React from 'react';
import styles from '../Aws.module.css';

const Hero = () => {
  return (
    <section className={styles.awsHero}>
      {/* GLOW EFFECTS */}
      <div className={styles.heroGlowOne}></div>
      <div className={styles.heroGlowTwo}></div>

      <div className={styles.awsHeroContainer}>
        {/* LEFT CONTENT */}
        <div className={styles.awsHeroContent}>
          {/* TOP LABEL */}
          <div className={styles.awsTopLabel}>
            <span></span>
            SELECT TIER AWS PARTNER
          </div>

          {/* TITLE */}
          <h1 className={styles.awsTitle}>
            AWS Cloud Solutions for
            <span> Digital Transformation Migration & Scalability</span>
          </h1>

          {/* DESCRIPTION */}
          <p className={styles.awsDescription}>
            Accelerate enterprise transformation with scalable, secure, and
            cost-optimized AWS cloud solutions. We help organisations modernise
            infrastructure, automate operations, improve governance, and deliver
            high-performance cloud environments.
          </p>

          {/* TAGS */}
          <div className={styles.awsTags}>
            <span>Cloud Migration</span>
            <span>DevOps</span>
            <span>Security</span>
            <span>FinOps</span>
            <span>Hybrid Cloud</span>
            <span>Managed Services</span>
          </div>

          {/* STATS */}
          <div className={styles.heroStats}>
            <div className={styles.statCard}>
              <h3>99.99%</h3>
              <p>Cloud Availability</p>
            </div>

            <div className={styles.statCard}>
              <h3>24/7</h3>
              <p>Enterprise Support</p>
            </div>

            <div className={styles.statCard}>
              <h3>Secure</h3>
              <p>AWS Infrastructure</p>
            </div>
          </div>
        </div>

        {/* RIGHT SIDE IMAGE LOGO */}
        <div className={styles.awsRight}>
          <div className={styles.awsImageWrapper}>
            {/* ROTATING BORDER */}
            <div className={styles.awsRotateBorder}></div>

            {/* MAIN IMAGE BOX */}
            <div className={styles.awsImageBox}>
              <img
                src="/logos/awscert.svg"
                alt="AWS"
                className={styles.awsImage}
              />
            </div>

            {/* FLOATING CARDS */}
            <div className={styles.awsFloatingOne}>
              <span>Cloud</span>
            </div>

            <div className={styles.awsFloatingTwo}>
              <span>Security</span>
            </div>

            <div className={styles.awsFloatingThree}>
              <span>DevOps</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
