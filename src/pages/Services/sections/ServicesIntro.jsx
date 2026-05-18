// 'use client';

// import React, { useEffect, useRef, useState } from 'react';
// import styles from '../Services.module.css';

// import ms from '/icons/MicrosoftN.svg';
// import aws from '/icons/aws.svg';
// import ibm from '/icons/ibm.svg';
// import adobe from '/icons/adobeN.svg';
// import centerLogo from '/icons/log.svg';

// const ServicesFinal = () => {
//   const sectionRef = useRef(null);
//   const [active, setActive] = useState(false);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       ([entry]) => {
//         if (entry.isIntersecting) {
//           setActive(true);
//         }
//       },
//       { threshold: 0.4 },
//     );

//     if (sectionRef.current) {
//       observer.observe(sectionRef.current);
//     }

//     return () => observer.disconnect();
//   }, []);

//   return (
//     <section
//       ref={sectionRef}
//       className={styles.section}
//     >
//       {/* TEXT */}
//       <div className={`${styles.text} ${active ? styles.show : ''}`}>
//         <div className={styles.textMask}>
//           <h2>
//             Integrated <span>Services</span> Across Global
//             <br />
//             Technology Platforms
//           </h2>

//           <p>
//             Most organisations operate across Microsoft, AWS, IBM, and Adobe—
//             unified under one managed service model.
//           </p>
//         </div>
//       </div>

//       {/* VISUAL */}
//       <div className={styles.container}>
//         {/* LINES */}
//         <div
//           className={`${styles.lineWrapper} ${active ? styles.lineShow : ''}`}
//         >
//           {[0, 1, 2, 3].map((_, i) => (
//             <div
//               key={i}
//               className={styles.line}
//             />
//           ))}
//         </div>

//         {/* CENTER */}
//         <div className={styles.center}>
//           <img
//             src={centerLogo}
//             alt=""
//           />
//         </div>

//         {/* LOGOS */}
//         <img
//           src={ms}
//           className={`${styles.logo} ${active ? styles.l1 : ''}`}
//         />
//         <img
//           src={aws}
//           className={`${styles.logo} ${active ? styles.l2 : ''}`}
//         />
//         <img
//           src={ibm}
//           className={`${styles.logo} ${active ? styles.l3 : ''}`}
//         />
//         <img
//           src={adobe}
//           className={`${styles.logo} ${active ? styles.l4 : ''}`}
//         />
//       </div>
//     </section>
//   );
// };

// export default ServicesFinal;
'use client';

import React, { useEffect, useRef, useState } from 'react';

import { Link } from 'react-router-dom';

import styles from '../Services.module.css';

import ms from '/icons/MicrosoftN.svg';
import aws from '/icons/aws.svg';
import ibm from '/icons/ibm.svg';
import adobe from '/icons/adobeN.svg';
import centerLogo from '/icons/log.svg';

const ServicesFinal = () => {
  const sectionRef = useRef(null);

  const [active, setActive] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setActive(true);
        }
      },
      { threshold: 0.4 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className={styles.section}
    >
      {/* TEXT */}

      <div className={`${styles.text} ${active ? styles.show : ''}`}>
        <div className={styles.textMask}>
          <h2>
            Integrated <span>Services</span>
            Across Global
            <br />
            Technology Platforms
          </h2>

          <p>
            Most organisations operate across Microsoft, AWS, IBM, and Adobe—
            unified under one managed service model.
          </p>
        </div>
      </div>

      {/* VISUAL */}

      <div className={styles.container}>
        {/* LINES */}

        <div
          className={`${styles.lineWrapper} ${active ? styles.lineShow : ''}`}
        >
          {[0, 1, 2, 3].map((_, i) => (
            <div
              key={i}
              className={styles.line}
            />
          ))}
        </div>

        {/* CENTER */}

        <div className={styles.center}>
          <img
            src={centerLogo}
            alt=""
          />
        </div>

        {/* LOGOS */}

        <Link to="/services/microsoft">
          <img
            src={ms}
            alt="Microsoft"
            className={`${styles.logo} ${active ? styles.l1 : ''}`}
          />
        </Link>

        <Link to="/services/aws">
          <img
            src={aws}
            alt="AWS"
            className={`${styles.logo} ${active ? styles.l2 : ''}`}
          />
        </Link>

        <Link to="/services/ibm">
          <img
            src={ibm}
            alt="IBM"
            className={`${styles.logo} ${active ? styles.l3 : ''}`}
          />
        </Link>

        <Link to="/services/adobe">
          <img
            src={adobe}
            alt="Adobe"
            className={`${styles.logo} ${active ? styles.l4 : ''}`}
          />
        </Link>
      </div>
    </section>
  );
};

export default ServicesFinal;
