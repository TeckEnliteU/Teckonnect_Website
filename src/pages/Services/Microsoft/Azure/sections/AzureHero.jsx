// import React from 'react';
// import styles from '../Azure.module.css';
// import { Link } from 'react-router-dom';

// const AzureHero = () => {
//   return (
//     <section className={styles.azureHero}>
//       <div className={styles.heroContainer}>
//         {/* BADGE */}
//         <div className={styles.heroBadge}>
//           MICROSOFT PARTNER · AZURE CLOUD SERVICES
//         </div>

//         {/* TITLE */}
//         <h1 className={styles.heroTitle}>
//           Microsoft Azure
//           <br />
//           <span>Cloud Services</span>
//         </h1>

//         {/* DESCRIPTION */}
//         <p className={styles.heroDescription}>
//           Migrate, modernise, and operate on Azure — with governance from day
//           one. We help organisations adopt Azure with a structured approach that
//           prioritises security, compliance, cost visibility, and operational
//           control.
//         </p>

//         {/* BUTTONS */}
//         <div className={styles.heroButtons}>
//           <Link
//             to="/contact"
//             className={styles.primaryBtn}
//           >
//             Talk to a specialist
//           </Link>

//           <Link
//             to="/services"
//             className={styles.secondaryBtn}
//           >
//             Explore services
//           </Link>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default AzureHero;
import React from 'react';
import styles from '../Azure.module.css';
import { Link } from 'react-router-dom';

const AzureHero = () => {
  return (
    <section className={styles.azureHero}>
      <div className={styles.heroWrapper}>
        {/* LEFT SIDE */}
        <div className={styles.heroContainer}>
          <div className={styles.heroBadge}>
            MICROSOFT PARTNER · AZURE CLOUD SERVICES
          </div>

          <h1 className={styles.heroTitle}>
            Microsoft Azure
            <br />
            <span>Cloud Services</span>
          </h1>

          <p className={styles.heroDescription}>
            Migrate, modernise, and operate on Azure — with governance from day
            one. We help organisations adopt Azure with a structured approach
            that prioritises security, compliance, cost visibility, and
            operational control.
          </p>

          <div className={styles.heroButtons}>
            <Link
              to="/contact"
              className={styles.primaryBtn}
            >
              Talk to a specialist
            </Link>

            <Link
              to="/services"
              className={styles.secondaryBtn}
            >
              Explore services
            </Link>
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className={styles.heroRight}>
          <div className={styles.azureGlow}></div>

          <div className={styles.azureCard}>
            <img
              src="/logos/Microsoft-Azure-logo.png"
              alt="Azure"
              className={styles.azureImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AzureHero;
