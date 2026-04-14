// import { useEffect, useRef } from 'react';
// import styles from '../about.module.css';
// import { gsap } from 'gsap';

// const Hero = () => {
//   const heroRef = useRef(null);

//   useEffect(() => {
//     const ctx = gsap.context(() => {
//       // TEXT ANIMATION
//       gsap.from(`.${styles.text} > *`, {
//         y: 40,
//         opacity: 0,
//         duration: 0.8,
//         stagger: 0.15,
//         ease: 'power3.out',
//       });

//       // CARD ENTRY (DIFFERENT DIRECTIONS)
//       gsap.from(`.${styles.card1}`, {
//         x: 80,
//         y: 50,
//         opacity: 0,
//         rotate: 8,
//         duration: 1,
//       });

//       gsap.from(`.${styles.card2}`, {
//         x: -60,
//         y: 80,
//         opacity: 0,
//         rotate: -10,
//         duration: 1.2,
//       });

//       gsap.from(`.${styles.card3}`, {
//         y: 100,
//         opacity: 0,
//         scale: 0.9,
//         duration: 1.3,
//       });

//       // FLOATING
//       gsap.to(`.${styles.card1}`, {
//         y: 20,
//         rotate: -4,
//         repeat: -1,
//         yoyo: true,
//         duration: 3,
//       });

//       gsap.to(`.${styles.card2}`, {
//         y: -20,
//         rotate: 6,
//         repeat: -1,
//         yoyo: true,
//         duration: 4,
//       });

//       gsap.to(`.${styles.card3}`, {
//         y: 15,
//         repeat: -1,
//         yoyo: true,
//         duration: 2.5,
//       });
//     }, heroRef);

//     return () => ctx.revert();
//   }, []);

//   return (
//     <section
//       className={styles.hero}
//       ref={heroRef}
//     >
//       <div className={styles.container}>
//         {/* LEFT TEXT */}
//         <div className={styles.text}>
//           <span className={styles.badge}>About Teckonnect</span>

//           <h1>
//             Driving Business Performance <br />
//             Through <span>Technology</span> and <span>People</span>
//           </h1>

//           <p>
//             Transforming IT infrastructure with secure, scalable, and
//             high-performance solutions that drive real business growth.
//           </p>
//         </div>

//         {/* RIGHT STACK CARDS */}
//         <div className={styles.visual}>
//           <div className={`${styles.card} ${styles.card1}`}>
//             <img
//               src="/images/about1.jpg"
//               alt=""
//             />
//           </div>

//           <div className={`${styles.card} ${styles.card2}`}>
//             <img
//               src="/images/about2.jpg"
//               alt=""
//             />
//           </div>

//           <div className={`${styles.card} ${styles.card3}`}>
//             <img
//               src="/images/about3.jpg"
//               alt=""
//             />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Hero;
import { useEffect, useRef } from 'react';
import styles from '../about.module.css';
import { gsap } from 'gsap';
import { FaBolt } from 'react-icons/fa';

const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // TEXT ANIMATION
      gsap.from(`.${styles.text} > *`, {
        y: 40,
        opacity: 0,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
      });

      // CARD ENTRY
      gsap.from(`.${styles.card}`, {
        y: 60,
        opacity: 0,
        stagger: 0.2,
        duration: 0.8,
        ease: 'power3.out',
      });

      // FLOATING
      gsap.to(`.${styles.card1}`, {
        y: 20,
        rotate: -4,
        repeat: -1,
        yoyo: true,
        duration: 3,
      });

      gsap.to(`.${styles.card2}`, {
        y: -20,
        rotate: 6,
        repeat: -1,
        yoyo: true,
        duration: 4,
      });

      gsap.to(`.${styles.card3}`, {
        y: 15,
        repeat: -1,
        yoyo: true,
        duration: 2.5,
      });
    }, heroRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      className={styles.hero}
      ref={heroRef}
    >
      <div className={styles.container}>
        {/* LEFT CONTENT */}
        <div className={styles.text}>
          {/* BADGE */}
          <div className={styles.badge}>
            <FaBolt />
            <span>About Teckonnect</span>
          </div>

          {/* TITLE */}
          <h1 className={styles.title}>
            Driving Business Performance <br />
            Through <span>Technology</span> and <span>People</span>
          </h1>

          {/* YOUR CONTENT */}
          <p className={styles.subtitle}>
            Teckonnect is a leading Managed Service Provider (MSP) delivering
            end-to-end IT solutions across Microsoft, AWS, IBM Cloud, and
            Acronis platforms. We empower organizations to transform their IT
            infrastructure, optimize performance, and secure critical data while
            aligning technology with business goals.
          </p>
        </div>

        {/* RIGHT VISUAL CARDS */}
        <div className={styles.visual}>
          <div className={`${styles.card} ${styles.card1}`}>
            <img
              src="/images/about1.jpg"
              alt=""
            />
          </div>

          <div className={`${styles.card} ${styles.card2}`}>
            <img
              src="/images/about2.jpg"
              alt=""
            />
          </div>

          <div className={`${styles.card} ${styles.card3}`}>
            <img
              src="/images/about3.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
