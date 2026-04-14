import React, { useEffect, useRef } from 'react';
import styles from '../Services.module.css';

import {
  FaShieldAlt,
  FaSyncAlt,
  FaCloud,
  FaServer,
  FaLock,
} from 'react-icons/fa';

import msLogo from '/icons/microsoft.png';
import awsLogo from '/icons/AWS.png';
import ibmLogo from '/icons/ibm.png';
const icons = [
  { type: 'img', src: msLogo },
  { type: 'img', src: awsLogo },
  { type: 'img', src: ibmLogo },
  { type: 'icon', comp: <FaCloud /> },
  { type: 'icon', comp: <FaServer /> },
  { type: 'icon', comp: <FaShieldAlt /> },
  { type: 'icon', comp: <FaLock /> },
  { type: 'icon', comp: <FaSyncAlt /> },
];

const ServicesIntroBlast = () => {
  const iconRefs = useRef([]);

  useEffect(() => {
    const animate = () => {
      // BLAST UP
      iconRefs.current.forEach((el, i) => {
        if (!el) return;

        const spread = (i - icons.length / 2) * 45;
        const height = -200 - Math.random() * 80;

        el.style.transition =
          'transform 1s cubic-bezier(0.22,1,0.36,1), opacity 0.4s';

        el.style.transform = `
          translate(-50%, -50%)
          translate(${spread}px, ${height}px)
          scale(1)
        `;
        el.style.opacity = 1;
      });

      // RETURN
      setTimeout(() => {
        iconRefs.current.forEach((el) => {
          if (!el) return;

          el.style.transition = 'transform 0.8s ease, opacity 0.3s';
          el.style.transform = 'translate(-50%, -50%) scale(0.5)';
          el.style.opacity = 0;
        });
      }, 2000);
    };

    animate();
    const loop = setInterval(animate, 3500);

    return () => clearInterval(loop);
  }, []);

  return (
    <section className={styles.servicesintroBlastSection}>
      <div className={styles.servicesintroBlastCard}>
        {/* TEXT */}
        <div className={styles.servicesintroBlastText}>
          <h2>
            <span className={styles.highlight}>Powerful</span> Integration
          </h2>
          <p>
            Connect seamlessly with your cloud ecosystem for a unified, secure,
            and scalable workflow.
          </p>
        </div>

        {/* MAIL BOX */}
        <div className={styles.servicesintroBlastBox}>
          <div className={styles.servicesintroLid}></div>

          {icons.map((item, i) => (
            <div
              key={i}
              ref={(el) => (iconRefs.current[i] = el)}
              className={styles.servicesintroBlastIcon}
            >
              {item.type === 'img' ? (
                <img
                  src={item.src}
                  alt=""
                />
              ) : (
                item.comp
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesIntroBlast;
