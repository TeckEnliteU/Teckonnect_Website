import React from 'react';

import {
  FaPaintBrush,
  FaFileSignature,
  FaSyncAlt,
  FaArrowRight,
} from 'react-icons/fa';

import styles from '../Adobe.module.css';

const Solutions = () => {
  const solutions = [
    {
      icon: <FaPaintBrush />,
      number: '01',

      title: 'Creative & Design Enablement for Teams',

      description:
        'Equip creative, marketing, and brand teams with the apps they need — plus business capabilities that support collaboration and consistency.',

      points: [
        'Plan selection: single app vs all apps, teams vs larger org options',
        'Setup for teams: onboarding, account alignment, asset sharing practices',
        'Rollout support: quick-start guides for designers/marketers',
        'Admin support model: adds/moves/changes, access governance, best practices',
      ],

      note: "Adobe's Creative Cloud for teams offering includes business-focused plans and licensing for teams with apps and collaboration/admin features.",
    },

    {
      icon: <FaFileSignature />,
      number: '02',

      title: 'Document Productivity + eSign Workflows (Acrobat + eSign)',

      description:
        "Speed up approvals, reduce printing/scanning, and digitize agreement workflows using Adobe's business document capabilities.",

      points: [
        'Workflow discovery: identify top 3–5 document processes to digitize first',
        'Configuration guidance: templates, approval routing approach, usage enablement',
        'Adoption support: training for sending, signing & tracking',
        'Governance: operational readiness documentation and workflow controls',
      ],

      note: 'Adobe highlights business eSign capabilities with integrations, workflow automation, and secure digital approvals.',
    },

    {
      icon: <FaSyncAlt />,
      number: '03',

      title: 'Licensing, Renewals & Compliance Operational Support',

      description:
        'Avoid last-minute renewals, compliance gaps, and licence sprawl with structured lifecycle governance.',

      points: [
        'Licence lifecycle management: purchase → assign → reassign → retire',
        'Renewal calendar + stakeholder reminders',
        'Usage-based governance recommendations to reduce shelfware',
        'Procurement-ready documentation and approval routing support',
      ],

      note: "Adobe's reseller ecosystem is structured around licensing expertise, renewal management, and long-term customer engagement.",
    },
  ];

  return (
    <section className={styles.adobeSolutions}>
      {/* GLOW */}
      <div className={styles.solutionGlowOne}></div>
      <div className={styles.solutionGlowTwo}></div>

      <div className={styles.solutionsContainer}>
        {/* TOP */}
        <div className={styles.solutionsTop}>
          <span className={styles.solutionsLabel}>WHAT WE DELIVER</span>

          <h2 className={styles.solutionsTitle}>
            Adobe Solutions
            <span> We Deliver</span>
          </h2>
        </div>

        {/* GRID */}
        <div className={styles.solutionsGrid}>
          {solutions.map((item, index) => (
            <div
              key={index}
              className={styles.solutionCard}
            >
              {/* TOP */}
              <div className={styles.solutionHeader}>
                <div className={styles.solutionIcon}>{item.icon}</div>

                <span className={styles.solutionNumber}>{item.number}</span>
              </div>

              {/* CONTENT */}
              <h3>{item.title}</h3>

              <p className={styles.solutionDescription}>{item.description}</p>

              {/* DELIVER */}
              <div className={styles.deliverBox}>
                <span>What Teckonnect delivers</span>

                <ul>
                  {item.points.map((point, i) => (
                    <li key={i}>
                      <FaArrowRight />
                      {point}
                    </li>
                  ))}
                </ul>
              </div>

              {/* NOTE */}
              <p className={styles.solutionNote}>{item.note}</p>

              {/* LINE */}
              <div className={styles.solutionLine}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
