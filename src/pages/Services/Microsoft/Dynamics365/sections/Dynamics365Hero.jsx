// import React from 'react';
// import styles from '../dynamics365.module.css';

// import { Link } from 'react-router-dom';
// import { FaComments, FaArrowDown } from 'react-icons/fa';

// const Dynamics365Hero = () => {
//   return (
//     <section className={styles.dynamicsHero}>
//       <div className={styles.heroContainer}>
//         {/* TOP BADGE */}
//         <div className={styles.heroBadge}>
//           <span className={styles.badgeDot}></span>
//           Microsoft Partner · Dynamics 365
//         </div>

//         {/* TITLE */}
//         <h1 className={styles.heroTitle}>
//           Microsoft Dynamics
//           <br />
//           <span>365 Services</span>
//         </h1>

//         {/* DESCRIPTION */}
//         <p className={styles.heroDescription}>
//           Connect data, teams and processes with AI-ready CRM and ERP
//           <br />
//           We deliver tailored Dynamics 365 implementations and ongoing <br />
//           support designed around governance, adoption, and measurable <br />
//           outcomes.
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

// export default Dynamics365Hero;
import React from 'react';
import styles from '../dynamics365.module.css';

import { Link } from 'react-router-dom';

const Dynamics365Hero = () => {
  return (
    <section className={styles.dynamicsHero}>
      <div className={styles.heroWrapper}>
        {/* LEFT SIDE */}
        <div className={styles.heroContainer}>
          {/* TOP BADGE */}
          <div className={styles.heroBadge}>
            <span className={styles.badgeDot}></span>
            Microsoft Partner · Dynamics 365
          </div>

          {/* TITLE */}
          <h1 className={styles.heroTitle}>
            Microsoft Dynamics
            <br />
            <span>365 Services</span>
          </h1>

          {/* DESCRIPTION */}
          <p className={styles.heroDescription}>
            Connect data, teams and processes with AI-ready CRM and ERP
            <br />
            We deliver tailored Dynamics 365 implementations and ongoing
            <br />
            support designed around governance, adoption, and measurable
            <br />
            outcomes.
          </p>

          {/* BUTTONS */}
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
          <div className={styles.dynamicsGlow}></div>

          <div className={styles.dynamicsCard}>
            <img
              src="/logos/MicrosoftDynamics365.webp"
              alt="Dynamics 365"
              className={styles.dynamicsImage}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamics365Hero;
