import React from 'react';

import {
  FaSearch,
  FaDraftingCompass,
  FaTools,
  FaShieldAlt,
  FaChartLine,
} from 'react-icons/fa';

import styles from '../CyberSecurity.module.css';

const processSteps = [
  {
    number: '01',
    icon: <FaSearch />,
    title: 'Assess',

    description:
      'Identify vulnerabilities, infrastructure gaps, operational risks, and compliance exposure across your enterprise ecosystem.',
  },

  {
    number: '02',
    icon: <FaDraftingCompass />,
    title: 'Design',

    description:
      'Build a scalable cybersecurity roadmap aligned with business objectives, governance policies, and risk management.',
  },

  {
    number: '03',
    icon: <FaTools />,
    title: 'Implement',

    description:
      'Deploy modern cybersecurity solutions with minimal disruption using structured onboarding and secure integration.',
  },

  {
    number: '04',
    icon: <FaShieldAlt />,
    title: 'Monitor',

    description:
      'Enable continuous threat monitoring, real-time incident response, SOC operations, and intelligent security visibility.',
  },

  {
    number: '05',
    icon: <FaChartLine />,
    title: 'Optimise',

    description:
      'Continuously strengthen security posture through analytics, automation, AI-driven insights, and proactive improvements.',
  },
];

const Solutions = () => {
  return (
    <section className={styles.cyberSolution}>
      {/* BACKGROUND */}

      <div className={styles.cyberSolutionGrid}></div>

      <div className={styles.cyberSolutionGlowOne}></div>
      <div className={styles.cyberSolutionGlowTwo}></div>

      {/* CONTAINER */}

      <div className={styles.cyberSolutionContainer}>
        {/* TOP */}

        <div className={styles.cyberSolutionTop}>
          <span className={styles.cyberSolutionLabel}>METHODOLOGY</span>

          <h2 className={styles.cyberSolutionTitle}>
            Our Approach to
            <span> Cybersecurity</span>
          </h2>

          <p className={styles.cyberSolutionText}>
            A modern enterprise cybersecurity framework focused on resilience,
            proactive protection, operational continuity, and continuous
            security improvement.
          </p>
        </div>

        {/* TIMELINE */}

        <div className={styles.cyberTimeline}>
          {/* LINE */}

          <div className={styles.cyberTimelineLine}></div>

          {/* ITEMS */}

          {processSteps.map((item, index) => (
            <div
              className={styles.cyberTimelineItem}
              key={index}
            >
              {/* LEFT */}

              <div className={styles.cyberTimelineLeft}>
                <div className={styles.cyberTimelineCircle}>
                  <span>{item.number}</span>

                  <div className={styles.cyberTimelineIcon}>{item.icon}</div>
                </div>
              </div>

              {/* RIGHT */}

              <div className={styles.cyberTimelineContent}>
                <div className={styles.cyberStepBadge}>STEP {item.number}</div>

                <h3>{item.title}</h3>

                <p>{item.description}</p>

                <div className={styles.cyberTimelineGlow}></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Solutions;
