import React from 'react';
import { FaShieldAlt, FaCloud, FaCog, FaClipboardCheck } from 'react-icons/fa';

import styles from '../Microsoft.module.css';

const MicrosoftOverview = () => {
  const overviewData = [
    {
      icon: <FaCloud />,
      title:
        'Microsoft 365 rollout aligned to your org structure and compliance needs',
      description:
        'Structured implementation designed around governance, security, and scalable collaboration.',
      // number: '01',
    },
    {
      icon: <FaShieldAlt />,
      title:
        'Secure-by-design configuration across identity, email, devices, and data',
      description:
        'Advanced protection and compliance-first setup for modern Microsoft environments.',
      // number: '02',
    },
    {
      icon: <FaCog />,
      title:
        'Dynamics 365 consulting that maps business processes into scalable systems',
      description:
        'Connected CRM and ERP workflows that improve operational efficiency and visibility.',
      // number: '03',
    },
    {
      icon: <FaClipboardCheck />,
      title:
        'Clear project execution with documentation, training, and ongoing support',
      description:
        'End-to-end delivery with onboarding, optimization, and long-term support services.',
      // number: '04',
    },
  ];

  return (
    <section className={styles.microsoftOverviewSection}>
      <div className={styles.microsoftOverviewGlowOne}></div>
      <div className={styles.microsoftOverviewGlowTwo}></div>

      <div className={styles.microsoftOverviewContainer}>
        {/* TOP CONTENT */}
        <div className={styles.microsoftOverviewTop}>
          <div className={styles.microsoftOverviewBadge}>
            <span></span>
            WHY TECKONNECT
          </div>

          <h2>
            Why Teckonnect for <span>Microsoft?</span>
          </h2>

          <p>
            Working with a partner should feel simple clear scope fast delivery
            and long term value. We focus on deployment adoption security and
            optimization not just setup.
          </p>
        </div>

        {/* OVERVIEW LIST */}
        <div className={styles.microsoftOverviewList}>
          {overviewData.map((item, index) => (
            <div
              className={styles.microsoftOverviewCard}
              key={index}
            >
              <div className={styles.microsoftOverviewLeft}>
                <div className={styles.microsoftOverviewIcon}>{item.icon}</div>

                <div className={styles.microsoftOverviewLine}></div>

                <div className={styles.microsoftOverviewContent}>
                  <h4>{item.title}</h4>
                  <p>{item.description}</p>
                </div>
              </div>

              {/* <div className={styles.microsoftOverviewNumber}>
                {item.number}
              </div> */}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default MicrosoftOverview;
