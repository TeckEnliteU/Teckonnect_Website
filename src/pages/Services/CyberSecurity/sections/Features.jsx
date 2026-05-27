import React from 'react';

import {
  FaShieldAlt,
  FaBug,
  FaCloud,
  FaDatabase,
  FaUserLock,
  FaCheckCircle,
} from 'react-icons/fa';

import styles from '../CyberSecurity.module.css';

const featureData = [
  {
    number: '01',
    icon: <FaShieldAlt />,
    title: 'Threat Detection & Response',
    description:
      'Identify and neutralize threats in real time with intelligent monitoring, SOC operations, and advanced analytics.',

    points: [
      '24/7 SOC monitoring',
      'Endpoint Detection & Response',
      'Incident response automation',
      'Threat intelligence integration',
    ],
  },

  {
    number: '02',
    icon: <FaBug />,
    title: 'Vulnerability Assessment & Penetration Testing',

    description:
      'Discover hidden vulnerabilities and strengthen security posture before attackers exploit weaknesses.',

    points: [
      'Vulnerability scanning',
      'Ethical hacking & VAPT',
      'Risk prioritisation',
      'Remediation roadmap',
    ],
  },

  {
    number: '03',
    icon: <FaCloud />,
    title: 'Cloud Security Solutions',

    description:
      'Secure hybrid and multi-cloud workloads across AWS, Azure, and enterprise cloud platforms.',

    points: [
      'Cloud configuration security',
      'Identity & access governance',
      'Data encryption',
      'Compliance monitoring',
    ],
  },

  {
    number: '04',
    icon: <FaDatabase />,
    title: 'Data Protection & Backup Security',

    description:
      'Protect critical enterprise data against ransomware, breaches, and accidental loss.',

    points: [
      'Secure backup solutions',
      'Disaster recovery planning',
      'Ransomware protection',
      'Business continuity support',
    ],
  },

  {
    number: '05',
    icon: <FaUserLock />,
    title: 'Identity & Access Management',

    description:
      'Ensure only authorised users can securely access enterprise systems and resources.',

    points: [
      'Multi-factor authentication',
      'Role-based access control',
      'Privileged access management',
      'Single sign-on integration',
    ],
  },

  {
    number: '06',
    icon: <FaCheckCircle />,
    title: 'Compliance & Risk Management',

    description:
      'Align enterprise security frameworks with compliance standards and governance requirements.',

    points: [
      'ISO 27001 readiness',
      'GDPR compliance',
      'Security audit support',
      'Risk assessment frameworks',
    ],
  },
];

const Features = () => {
  return (
    <section className={styles.cyberFeature}>
      {/* BACKGROUND */}

      <div className={styles.cyberFeatureGrid}></div>

      <div className={styles.cyberFeatureGlowOne}></div>
      <div className={styles.cyberFeatureGlowTwo}></div>

      {/* CONTAINER */}

      <div className={styles.cyberFeatureContainer}>
        {/* TOP */}

        <div className={styles.cyberFeatureTop}>
          <span className={styles.cyberFeatureLabel}>WHAT WE OFFER</span>

          <h2 className={styles.cyberFeatureTitle}>
            Our <span>Cybersecurity</span> Solutions
          </h2>

          <p className={styles.cyberFeatureText}>
            Enterprise-grade cybersecurity services designed to protect
            infrastructure, cloud environments, applications, and sensitive
            business data against evolving cyber threats.
          </p>
        </div>

        {/* GRID */}

        <div className={styles.cyberFeatureGridBox}>
          {featureData.map((item, index) => (
            <div
              className={styles.cyberFeatureCard}
              key={index}
            >
              {/* NUMBER */}

              <div className={styles.cyberFeatureNumber}>{item.number}</div>

              {/* ICON */}

              <div className={styles.cyberFeatureIcon}>{item.icon}</div>

              {/* CONTENT */}

              <h3>{item.title}</h3>

              <p>{item.description}</p>

              {/* POINTS */}

              <div className={styles.cyberFeaturePoints}>
                {item.points.map((point, idx) => (
                  <div
                    className={styles.cyberFeatureItem}
                    key={idx}
                  >
                    <span>›</span>
                    {point}
                  </div>
                ))}
              </div>

              {/* GLOW */}

              <div className={styles.cyberFeatureCardGlow}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
