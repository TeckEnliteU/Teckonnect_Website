import React from 'react';
import styles from '../dynamics365.module.css';

const Dynamics365Benefits = () => {
  const phases = [
    {
      number: '01',
      title: 'Discovery & Fit',
      description:
        'Process mapping, role needs analysis, and reporting outcome definition.',
      tag: 'ALIGN',
    },
    {
      number: '02',
      title: 'Solution Design',
      description:
        'Data model, integration architecture, security roles, and governance blueprint.',
      tag: 'DESIGN',
    },
    {
      number: '03',
      title: 'Implementation',
      description:
        'Configuration and controlled customisation fit to standard first.',
      tag: 'BUILD',
    },
    {
      number: '04',
      title: 'Testing & Adoption',
      description:
        'UAT, role-based training, usage metrics, and change management support.',
      tag: 'VALIDATE',
    },
    {
      number: '05',
      title: 'Run & Optimise',
      description:
        'Managed support, KPI reporting, roadmap planning, and optimization.',
      tag: 'OPERATE',
    },
  ];

  return (
    <section className={styles.benefitsSection}>
      {/* GLOW */}
      <div className={styles.benefitsGlowOne}></div>
      <div className={styles.benefitsGlowTwo}></div>

      <div className={styles.benefitsContainer}>
        {/* TOP */}
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsBadge}>HOW WE WORK</span>

          <h2 className={styles.benefitsTitle}>
            Delivery
            <span> blueprint</span>
          </h2>

          <p className={styles.benefitsDescription}>
            A structured five-phase delivery model covering discovery,
            implementation, adoption, and long-term managed support.
          </p>
        </div>

        {/* TIMELINE */}
        <div className={styles.timelineWrapper}>
          {/* LINE */}
          <div className={styles.timelineLine}></div>

          {/* CARDS */}
          <div className={styles.timelineGrid}>
            {phases.map((phase, index) => (
              <div
                className={styles.timelineCard}
                key={index}
              >
                {/* DOT */}
                <div className={styles.timelineDot}>
                  <span></span>
                </div>

                {/* NUMBER */}
                <div className={styles.phaseNumber}>{phase.number}</div>

                {/* CONTENT */}
                <h3>{phase.title}</h3>

                <p>{phase.description}</p>

                <div className={styles.phaseTag}>{phase.tag}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dynamics365Benefits;
