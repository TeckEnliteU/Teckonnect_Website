import React from 'react';

import {
  FaRocket,
  FaCloudUploadAlt,
  FaServer,
  FaDatabase,
  FaGlobe,
  FaShieldAlt,
  FaCogs,
  FaCoins,
  FaHeadset,
} from 'react-icons/fa';

import styles from '../Aws.module.css';

const Features = () => {
  const features = [
    {
      id: '01',
      icon: <FaRocket />,
      title: 'Cloud Strategy & Advisory',
      points: [
        'IT infrastructure & cloud readiness assessment',
        'Scalable AWS architecture planning',
        'Landing Zone & governance setup',
        'Cloud transformation roadmap',
      ],
      highlight: 'Scalable AWS foundations for future growth',
    },

    {
      id: '02',
      icon: <FaCloudUploadAlt />,
      title: 'AWS Migration & Modernization',
      points: [
        'Application & database migration',
        'Lift-and-shift modernization',
        'Performance optimization',
        'Managed migration support',
      ],
      highlight: 'Smooth migration with minimal downtime',
    },

    {
      id: '03',
      icon: <FaServer />,
      title: 'Compute & Hosting',
      points: [
        'Amazon EC2 deployment',
        'Auto scaling infrastructure',
        'Serverless applications',
        'Enterprise workload hosting',
      ],
      highlight: 'High availability & optimized performance',
    },

    {
      id: '04',
      icon: <FaDatabase />,
      title: 'Storage & Data Management',
      points: [
        'Amazon S3 object storage',
        'Backup & disaster recovery',
        'Secure archival strategies',
        'Lifecycle management',
      ],
      highlight: 'Reliable & secure enterprise storage',
    },

    {
      id: '05',
      icon: <FaGlobe />,
      title: 'Networking & Connectivity',
      points: [
        'VPC architecture design',
        'Secure AWS connectivity',
        'Traffic & DNS management',
        'Load balancing solutions',
      ],
      highlight: 'Fast, resilient cloud networking',
    },

    {
      id: '06',
      icon: <FaShieldAlt />,
      title: 'Security & Compliance',
      points: [
        'IAM & access management',
        'Cloud workload protection',
        'Data encryption',
        'Continuous threat monitoring',
      ],
      highlight: 'Enterprise-grade AWS security',
    },

    {
      id: '07',
      icon: <FaCogs />,
      title: 'DevOps & Automation',
      points: [
        'CI/CD pipeline automation',
        'Infrastructure as Code',
        'Containerization & EKS',
        'Continuous deployment workflows',
      ],
      highlight: 'Accelerated delivery & efficiency',
    },

    {
      id: '08',
      icon: <FaCoins />,
      title: 'AWS Cost Optimization',
      points: [
        'Cloud cost monitoring',
        'FinOps governance',
        'Savings & reserved plans',
        'Resource optimization',
      ],
      highlight: 'Reduce costs & maximize ROI',
    },

    {
      id: '09',
      icon: <FaHeadset />,
      title: 'Managed AWS Support',
      points: [
        '24/7 monitoring & support',
        'Performance tuning',
        'Infrastructure maintenance',
        'Continuous cloud improvement',
      ],
      highlight: 'Reliable & uninterrupted operations',
    },
  ];

  return (
    <section className={styles.awsFeatures}>
      {/* GLOW */}
      <div className={styles.featureGlowOne}></div>
      <div className={styles.featureGlowTwo}></div>

      <div className={styles.awsFeaturesContainer}>
        {/* TOP */}
        <div className={styles.featuresTop}>
          <span className={styles.featuresLabel}>WHAT WE DELIVER</span>

          <h2 className={styles.featuresTitle}>
            AWS Solutions for
            <span> Modern Enterprises</span>
          </h2>
        </div>

        {/* GRID */}
        <div className={styles.featuresGrid}>
          {features.map((item) => (
            <div
              className={styles.featureCard}
              key={item.id}
            >
              {/* NUMBER */}
              <div className={styles.featureNumber}>{item.id}</div>

              {/* ICON */}
              <div className={styles.featureIcon}>{item.icon}</div>

              {/* TITLE */}
              <h3>{item.title}</h3>

              {/* POINTS */}
              <ul>
                {item.points.map((point, index) => (
                  <li key={index}>{point}</li>
                ))}
              </ul>

              {/* HIGHLIGHT */}
              <div className={styles.featureHighlight}>✓ {item.highlight}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Features;
