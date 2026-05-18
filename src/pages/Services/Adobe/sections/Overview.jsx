import React from 'react';

import styles from '../Adobe.module.css';

const Overview = () => {
  const steps = [
    {
      number: '01',
      title: 'Assess ',

      points: [
        'User groups, app needs, device landscape',
        'Current licences, renewal dates, procurement rules',
        'Security/compliance constraints',
      ],
    },

    {
      number: '02',
      title: 'Design ',

      points: [
        'Plan recommendation + rollout plan',
        'Admin model (who manages what)',
        'Adoption plan (training + enablement)',
      ],
    },

    {
      number: '03',
      title: 'Deploy ',

      points: [
        'Provisioning guidance + rollout checklist',
        'Team enablement sessions',
      ],
    },

    {
      number: '04',
      title: 'Run ',

      points: [
        'Adds/moves/changes support',
        'Licence hygiene + renewal readiness',
        'Adoption check-ins to increase usage and ROI',
      ],
    },
  ];

  return (
    <section className={styles.adobeOverview}>
      <div className={styles.overviewContainer}>
        {/* TOP */}
        <div className={styles.overviewTop}>
          <span className={styles.overviewLabel}>HOW WE WORK</span>

          <h2 className={styles.overviewTitle}>Our Delivery Approach</h2>

          <p className={styles.overviewText}>
            Most competitor pages say “we sell Adobe.” High-ranking pages win
            because they show how outcomes are delivered.
          </p>
        </div>

        {/* TIMELINE */}
        <div className={styles.timeline}>
          {steps.map((item, index) => (
            <div
              key={index}
              className={styles.timelineItem}
            >
              {/* LEFT */}
              <div className={styles.timelineLeft}>
                <span className={styles.stepNumber}>{item.number}</span>
              </div>

              {/* RIGHT */}
              <div className={styles.timelineRight}>
                <h3>{item.title}</h3>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* LINE */}
              {index !== steps.length - 1 && (
                <div className={styles.timelineLine}></div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Overview;
