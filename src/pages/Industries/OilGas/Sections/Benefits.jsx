import React from 'react';
import styles from '../OilGas.module.css';

import { FaShieldAlt, FaCloud, FaEye, FaCogs } from 'react-icons/fa';

const benefits = [
  {
    icon: <FaShieldAlt />,
    title: 'Secure and Controlled Infrastructure',
    desc: 'We establish a strong foundation where every system, user, and workload operates within a secure and governed environment.',

    deliver: [
      'Security-first infrastructure aligned with operational needs',
      'Identity, device, and access control across environments',
      'Protection designed to support both IT and operational systems',
    ],

    result:
      'Reduced risk, improved visibility, and stronger control across critical systems',
  },

  {
    icon: <FaCloud />,
    title: 'Cloud Modernization Without Disruption',
    desc: 'We help utilities modernize at the right pace—without risking continuity of existing operations.',

    deliver: [
      'Cloud and hybrid infrastructure aligned to real workloads',
      'Migration strategies built around uptime and performance',
      'Flexible environments that scale as your operations evolve',
    ],

    result: 'Modern, scalable platforms without operational downtime',
  },

  {
    icon: <FaEye />,
    title: 'Real-Time Visibility and Operational Insight',
    desc: 'Utilities depend on fast decisions. We enable better control through improved system visibility.',

    deliver: [
      'Centralized monitoring across systems and environments',
      'Performance tracking and system health visibility',
      'Data-driven insights to support operational decision-making',
    ],

    result: 'Faster response times and better operational awareness',
  },

  {
    icon: <FaCogs />,
    title: 'Managed Services for Always-On Operations',
    desc: 'Utilities require continuous uptime. Our managed services ensure your systems remain stable, secure, and optimized.',

    deliver: [
      'Proactive monitoring and issue resolution',
      'Continuous system optimization and updates',
      'Ongoing support aligned to business and operational needs',
    ],

    result:
      'Higher system availability and reduced operational pressure on internal teams',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        {/* TOP */}
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsTag}>OUR SOLUTIONS</span>

          <h2>
            How Teckonnect Supports
            <span> Utility Organizations</span>
          </h2>

          <p>
            We don’t just provide IT services—we build operational confidence
            across your environment.
          </p>
        </div>

        {/* GRID */}
        <div className={styles.benefitsGrid}>
          {benefits.map((item, index) => (
            <div
              key={index}
              className={styles.benefitCard}
            >
              {/* ICON */}
              <div className={styles.iconWrap}>{item.icon}</div>

              {/* DOT LINE */}
              <div className={styles.dotLine}></div>

              {/* TITLE */}
              <h3>{item.title}</h3>

              {/* DESCRIPTION */}
              <p>{item.desc}</p>

              {/* WHAT WE DELIVER */}
              <div className={styles.deliverSection}>
                <h4>What we deliver:</h4>

                <ul>
                  {item.deliver.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              {/* RESULT */}
              <div className={styles.resultBox}>
                <strong>Result:</strong>

                <span>{item.result}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
