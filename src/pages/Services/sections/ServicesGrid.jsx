import styles from '../Services.module.css';

import { Link } from 'react-router-dom';

const services = [
  {
    title: 'Licensing & Renewals',
    desc: 'Managed licensing across all major platforms with visibility and control',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Licensing & Renewals 2.svg`,
  },
  {
    title: 'Cloud Migration',
    desc: 'Secure migration and optimisation of workloads across Azure, AWS, IBM and hybrid environments',
    icon: `${import.meta.env.BASE_URL}images/services/icons/cloud-migration 1.svg`,
  },
  {
    title: 'Workplace & Collaboration',
    desc: 'Modern workplace solutions using Microsoft 365 and Adobe collaboration tools',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Workplace & Collaboration.svg`,
  },
  {
    title: 'Managed Cloud Services',
    desc: 'Ongoing monitoring, optimisation, and operational support for cloud environments.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Managed Cloud Services 1.svg`,
  },
  {
    title: 'Security & Governance',
    desc: 'Identity management, data protection, and compliance across platforms and environments',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Built In IT Governance 1.svg`,
  },
  {
    title: 'Data, Analytics & AI',
    desc: 'Insights, automation, and responsible AI adoption using platform‑native AI services',
    icon: `${import.meta.env.BASE_URL}images/services/icons/artificial-intelligence-ai-icon 1.svg`,
  },
  {
    title: 'Content & Digital Workflows',
    desc: 'ocument, content, and creative workflows powered by Adobe and IBM FileNet.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Content & Digital Workflows 1.svg`,
  },
  {
    title: 'Advisory & Architecture',
    desc: 'Strategic guidance, best‑practice reviews, and platform alignment for long‑term success.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Advisory & Architecture 1.svg`,
  },
  {
    title: '24×7 Managed Support',
    desc: 'A single point of accountability delivering continuous support across all platforms',
    icon: `${import.meta.env.BASE_URL}images/services/icons/24×7 Managed Support 1.svg`,
  },
];

// how we work ////////////////////////////////////////////////////////

const workSteps = [
  {
    number: '01',
    title: 'Understand',
    subtitle: 'Business • Users • Challenges',
    description:
      'We understand your business, users, goals, and the challenges you need to solve.',
  },
  {
    number: '02',
    title: 'Assess',
    subtitle: 'Technology • Processes • Infrastructure',
    description:
      'We assess your technology, processes, and infrastructure to identify opportunities.',
  },
  {
    number: '03',
    title: 'Design',
    subtitle: 'Strategy • Solution • Objectives',
    description:
      'We design tailored solutions aligned with your business needs and objectives.',
  },
  {
    number: '04',
    title: 'Implement',
    subtitle: 'Deploy • Integrate • Launch',
    description:
      'We deploy and integrate solutions seamlessly, turning strategy into measurable action.',
  },
  {
    number: '05',
    title: 'Support & Optimize',
    subtitle: 'Monitor • Improve • Grow',
    description:
      'We provide ongoing support and optimisation to improve performance and long-term value.',
  },
];
/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesGrid() {
  return (
    <section className={styles.keySection}>
      {/* CERTIFICATIONS */}
      <div className={styles.certSection}>
        <h3 className={styles.certTitle}>
          Certified expertise for secure and dependable delivery.
        </h3>

        <div className={styles.certRow}>
          {[
            {
              logo: 'Microsoftcert.svg',
              link: '/services/microsoft',
            },
            {
              logo: 'awscert.svg',
              link: '/services/aws',
            },
            {
              logo: 'IBMcert.svg',
              link: '/services/ibm',
            },
            {
              logo: 'adobe certified reseller.png',
              link: '/services/adobe',
            },
          ].map((item, i) => (
            <div
              key={i}
              className={styles.certItem}
            >
              <Link to={item.link}>
                <img
                  src={`${import.meta.env.BASE_URL}logos/${item.logo}`}
                  alt={item.logo}
                />
              </Link>
            </div>
          ))}
        </div>
      </div>
      {/* HEADING */}
      <h2 className={styles.keyh2}>Our Key Services</h2>

      {/* GRID */}
      <div className={styles.keyGrid}>
        {services.map((item, i) => (
          <div
            key={i}
            className={styles.keyCard}
          >
            <div className={styles.keyIcon}>
              <img
                src={item.icon}
                alt={item.title}
              />
            </div>

            <h3 className={styles.keyh3}>{item.title}</h3>

            <p className={styles.keyp}>{item.desc}</p>

            <span className={styles.cardGlow}></span>
          </div>
        ))}
      </div>

      <section className={styles.workSection}>
        <div className={styles.heading}>
          <h2>How We Work</h2>
        </div>

        <div className={styles.workGrid}>
          {workSteps.map((item) => (
            <div
              key={item.number}
              className={styles.workCard}
            >
              <div className={styles.stepNumber}>{item.number}</div>

              <h3>{item.title}</h3>

              <h5>{item.subtitle}</h5>

              <p>{item.description}</p>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
