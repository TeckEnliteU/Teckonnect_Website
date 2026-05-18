import React from 'react';
import {
  FaSearch,
  FaDraftingCompass,
  FaExchangeAlt,
  FaPlayCircle,
  FaChartLine,
} from 'react-icons/fa';

import styles from '../Ibm.module.css';

const workflowSteps = [
  {
    number: '01',
    title: 'Assess',
    icon: <FaSearch />,
    desc: 'Current state analysis, infrastructure review, security posture validation, and business goal alignment.',
  },

  {
    number: '02',
    title: 'Design',
    icon: <FaDraftingCompass />,
    desc: 'Target operating model, cloud architecture planning, governance structure, and scalability roadmap.',
  },

  {
    number: '03',
    title: 'Transition',
    icon: <FaExchangeAlt />,
    desc: 'Knowledge transfer, onboarding workflows, tooling setup, automation, SLAs, and migration execution.',
  },

  {
    number: '04',
    title: 'Run',
    icon: <FaPlayCircle />,
    desc: 'Continuous operations, monitoring, incident management, reporting, compliance, and optimisation support.',
  },

  {
    number: '05',
    title: 'Optimise',
    icon: <FaChartLine />,
    desc: 'Performance tuning, AI-driven improvements, cost reduction, security enhancement, and innovation scaling.',
  },
];

export default function SolutionJourney() {
  return (
    <section className={styles.solutionSection}>
      <div className={styles.solutionGridBg}></div>

      <div className={styles.solutionGlowOne}></div>
      <div className={styles.solutionGlowTwo}></div>

      <div className={styles.solutionContainer}>
        {/* HEADING */}

        <div className={styles.solutionHeading}>
          <span className={styles.solutionSubTitle}>HOW WE WORK</span>

          <h2 className={styles.solutionTitle}>
            Assess Design Transition Run
            <span> Optimise</span>
          </h2>

          <p className={styles.solutionDescription}>
            A structured enterprise delivery framework designed for scalability,
            operational excellence, automation, and continuous improvement.
          </p>
        </div>

        {/* TIMELINE */}

        <div className={styles.solutionTimeline}>
          <div className={styles.solutionTimelineLine}></div>

          {workflowSteps.map((item, index) => (
            <div
              className={styles.solutionItem}
              key={index}
            >
              {/* ICON */}

              <div className={styles.solutionIconWrapper}>
                <div className={styles.solutionIconBox}>
                  <div className={styles.solutionIcon}>{item.icon}</div>

                  <span className={styles.solutionStep}>{item.number}</span>
                </div>
              </div>

              {/* CONTENT */}

              <div className={styles.solutionContent}>
                <h3>{item.title}</h3>

                <p>{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
