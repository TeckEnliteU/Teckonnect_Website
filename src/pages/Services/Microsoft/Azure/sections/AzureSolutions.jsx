import React from 'react';

import styles from '../Azure.module.css';

const solutionsData = [
  {
    number: '01',
    title: 'Assess',
    description:
      'Estate discovery, readiness assessment, and cloud business case development.',

    tag: 'Azure Migrate',
  },

  {
    number: '02',
    title: 'Foundation',
    description:
      'Landing zone design, governance baselines, identity, and network topology.',

    tag: 'CAF / Landing Zone',
  },

  {
    number: '03',
    title: 'Migrate / Modernise',
    description:
      'Phased migration waves with controlled cutover, testing, and rollback planning.',

    tag: 'Migrate & Modernise',
  },

  {
    number: '04',
    title: 'Secure',
    description:
      'Policy enforcement, Defender for Cloud onboarding, and posture improvements.',

    tag: 'Security Posture',
  },

  {
    number: '05',
    title: 'Run',
    description:
      'Managed operations, monthly governance cadence, cost control, and optimisation roadmap.',

    tag: 'Managed Services',
  },
];

const AzureSolutions = () => {
  return (
    <section className={styles.azureSolutions}>
      <div className={styles.solutionsContainer}>
        {/* TOP */}
        <div className={styles.solutionsTop}>
          <div className={styles.solutionsBadge}>HOW WE WORK</div>

          <h2 className={styles.solutionsTitle}>
            Our Azure <span></span>
            <span>delivery model</span>
          </h2>

          <p className={styles.solutionsDescription}>
            A structured five-phase approach from estate discovery through to
            continuous managed operations built around Microsoft's Cloud
            Adoption Framework.
          </p>
        </div>

        {/* FLOW */}
        <div className={styles.solutionsFlow}>
          {solutionsData.map((item, index) => (
            <div
              className={styles.solutionCard}
              key={index}
            >
              {/* NUMBER */}
              <div className={styles.solutionNumber}>{item.number}</div>

              {/* TITLE */}
              <h3>{item.title}</h3>

              {/* DESCRIPTION */}
              <p>{item.description}</p>

              {/* TAG */}
              <div className={styles.solutionTag}>{item.tag}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AzureSolutions;
