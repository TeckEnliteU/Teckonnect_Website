// import React from 'react';
// import styles from '../Microsoft365.module.css';
// import { Link } from 'react-router-dom';
// const Microsoft365Hero = () => {
//   return (
//     <section className={styles.microsoftHero}>
//       {/* BACKGROUND IMAGE */}
//       <div className={styles.heroBg}></div>

//       {/* DARK OVERLAY */}
//       <div className={styles.heroOverlay}></div>

//       {/* BLUE GRADIENT */}
//       <div className={styles.heroGradient}></div>

//       {/* CONTENT */}
//       <div className={styles.heroContent}>
//         <div className={styles.heroBadge}>
//           <span className={styles.badgeDot}></span>
//           MICROSOFT MODERN WORKPLACE SERVICES
//         </div>

//         <h1 className={styles.heroTitle}>
//           Transform Your<span> </span>
//           <span className={styles.highlight}> Workplace </span>
//           <br />
//           into a Secure Intelligent Hub
//         </h1>

//         <p className={styles.heroSubtitle}>
//           Empower teams with modern tools, seamless collaboration, and
//           enterprise-grade security with Teckonnect. We help organizations
//           accelerate enterprise cloud transformation through scalable, secure,
//           and productivity-driven solutions. Boost productivity, strengthen
//           security, and enable hybrid work at scale with a modern approach
//           designed for growing businesses.
//         </p>

//         {/* <p className={styles.heroDescription}>
//           Teckonnect helps organizations accelerate enterprise cloud
//           transformation with scalable,
//           <br /> secure, and productivity-driven solutions.
//         </p>

//         <p className={styles.heroItalic}>
//           Boost productivity. Strengthen security. Enable hybrid work at scale.
//         </p> */}

//         <div className={styles.heroButtons}>
//           <Link
//             to="/contact"
//             className={styles.primaryBtn}
//           >
//             Book a Consultation
//           </Link>

//           <Link
//             to="/contact"
//             className={styles.secondaryBtn}
//           >
//             Talk to Our Experts
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Microsoft365Hero;
import React from 'react';
import styles from '../Microsoft365.module.css';
import { Link } from 'react-router-dom';

const Microsoft365Hero = () => {
  return (
    <section className={styles.microsoftHero}>
      {/* BACKGROUND */}
      <div className={styles.heroGradient}></div>

      <div className={styles.heroWrapper}>
        {/* LEFT SIDE */}
        <div className={styles.heroContent}>
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            MICROSOFT MODERN WORKPLACE SERVICES
          </div>

          <h1 className={styles.heroTitle}>
            Transform Your
            <span className={styles.highlight}> Workplace </span>
            <br />
            into a Secure Intelligent Hub
          </h1>

          <p className={styles.heroSubtitle}>
            Empower teams with modern tools, seamless collaboration, and
            enterprise-grade security with Teckonnect. We help organizations
            accelerate enterprise cloud transformation through scalable, secure,
            and productivity-driven solutions.
          </p>

          <div className={styles.heroButtons}>
            <Link
              to="/contact"
              className={styles.primaryBtn}
            >
              Book a Consultation
            </Link>

            <Link
              to="/contact"
              className={styles.secondaryBtn}
            >
              Talk to Our Experts
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.heroRight}>
          <div className={styles.microsoftGlow}></div>

          <div className={styles.microsoftCard}>
            <img
              src="/logos/Modern work.png"
              alt="Microsoft 365"
              className={styles.microsoftImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Microsoft365Hero;
