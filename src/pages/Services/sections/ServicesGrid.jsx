import styles from '../Services.module.css';
import { motion } from 'framer-motion';

import { Link } from 'react-router-dom';
/* ========================= */
/* 🔥 UNIFIED ANIMATION */
/* ========================= */

const container = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.07,
      delayChildren: 0.1,
    },
  },
};

const textReveal = {
  hidden: {
    opacity: 0,
    y: 40, // 👈 visible movement
  },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.7,
      ease: [0.22, 1, 0.36, 1], // 👈 smooth premium easing
    },
  },
};

const cardAnim = {
  hidden: {
    opacity: 0,
    y: 50, // 👈 clear bottom-up
  },
  show: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      delay: i * 0.2,
      duration: 0.1,
      ease: [0.22, 1, 0.25, 1],
    },
  }),
};
/* ========================= */
/* DATA */
/* ========================= */

const services = [
  {
    title: 'Licensing & Renewals',
    desc: 'Simplify your software lifecycle with expert licensing and renewal management. We help you navigate Microsoft licensing models with clarity, ensuring cost optimization, compliance, and scalability. From initial selection to renewal planning, our team provides strategic guidance to align licensing with your business goals, eliminate unnecessary costs, and maintain full visibility across your software assets.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Licensing & Renewals 2.svg`,
  },
  {
    title: 'Cloud Migration',
    desc: 'Move to the cloud with confidence using our structured and secure migration approach. we assess your current infrastructure, design a tailored migration strategy, and ensure minimal disruption during the transition. whether youre moving workloads to microsoft azure or hybrid environments, we focus on performance, cost-efficiency, and long-term scalability to modernize your it ecosystem.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/cloud-migration 1.svg`,
  },
  {
    title: 'Workplace & Collaboration',
    desc: 'Flexible Microsoft licensinempower your workforce with modern collaboration tools that enhance productivity and communication. we implement and optimize solutions like microsoft 365 to enable seamless teamwork, secure data sharing, and flexible remote work. our approach ensures your employees stay connected and efficient, while maintaining governance and compliance across your digital workplace environment.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Workplace & Collaboration.svg`,
  },
  {
    title: 'Managed Cloud Services',
    desc: 'Ensure your cloud environment runs smoothly with proactive monitoring and management. our managed services cover performance optimization, cost control, and continuous support across your cloud infrastructure. we help you reduce downtime, improve efficiency, and maintain security while allowing your internal teams to focus on core business priorities instead of day-to-day cloud operations.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Managed Cloud Services 1.svg`,
  },
  {
    title: 'Security & Governance',
    desc: 'protect your business with a comprehensive approach to security and compliance. we implement identity management, data protection, and governance frameworks to safeguard your digital assets. our solutions are designed to meet industry standards and regulatory requirements while minimizing risks, ensuring that your organization remains secure across all platforms and environments.',
    icon: `${import.meta.env.BASE_URL}images/homesections/icons/Built In IT Governance 1.svg`,
  },
  {
    title: 'Data, Analytics & AI',
    desc: 'Turn data into actionable insights with advanced analytics and ai-driven solutions. we help you collect, process, and analyze data to uncover trends, improve decision-making, and automate processes. by leveraging modern platforms, we enable responsible ai adoption that drives innovation, enhances operational efficiency, and delivers measurable business outcomes.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/artificial-intelligence-ai-icon 1.svg`,
  },
  {
    title: 'Content & Digital Workflows',
    desc: 'Streamline your content management and business processes with intelligent digital workflows. we design solutions that automate document handling, approvals, and collaboration using platforms like adobe and ibm filenet. this reduces manual effort, improves accuracy, and accelerates business operations, allowing your teams to focus on higher-value tasks',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Content & Digital Workflows 1.svg`,
  },
  {
    title: 'Advisory & Architecture',
    desc: 'Build a strong technology foundation with expert advisory and architecture services. we provide strategic guidance, best-practice recommendations, and system design tailored to your business needs. our goal is to align your technology investments with long-term objectives, ensuring scalability, efficiency, and resilience in an ever-evolving digital landscape.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/Advisory & Architecture 1.svg`,
  },
  {
    title: '24×7 Managed Support',
    desc: 'Get reliable, round-the-clock support to keep your systems running without interruption. our 24×7 managed support services provide a single point of contact for issue resolution, monitoring, and maintenance. we ensure quick response times, proactive problem-solving, and continuous system performance, giving you peace of mind and uninterrupted business operations.',
    icon: `${import.meta.env.BASE_URL}images/services/icons/24×7 Managed Support 1.svg`,
  },
];

/* ========================= */
/* COMPONENT */
/* ========================= */

export default function ServicesGrid() {
  return (
    <section className={styles.keySection}>
      {/* 🔥 HEADING */}
      <motion.h2
        className={styles.keyh2}
        variants={textReveal}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        Our Key Services
      </motion.h2>

      {/* 🔥 GRID */}
      <motion.div
        className={styles.keyGrid}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        {services.map((item, i) => {
          // const Icon = item.icon;

          return (
            <motion.div
              key={i}
              className={styles.keyCard}
              variants={cardAnim}
              custom={i}
              whileHover={{
                y: -12,
                scale: 1.04,
                rotateX: 4,
                rotateY: -4,
              }}
            >
              {/* <div className={styles.keyIcon}>
                <Icon />
              </div> */}
              <div className={styles.keyIcon}>
                <img
                  src={item.icon}
                  alt={item.title}
                />
              </div>
              <h3 className={styles.keyh3}>{item.title}</h3>
              <p className={styles.keyp}>{item.desc}</p>

              {/* 🔥 glow */}
              <span className={styles.cardGlow}></span>
            </motion.div>
          );
        })}
      </motion.div>

      {/* 🔥 CERTIFICATIONS */}
      <motion.div
        className={styles.certSection}
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <motion.h3
          variants={textReveal}
          className={styles.certTitle}
        >
          Certified expertise for secure and dependable delivery.
        </motion.h3>

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
            <motion.div
              key={i}
              className={styles.certItem}
              variants={cardAnim}
              custom={i}
            >
              <Link to={item.link}>
                <img
                  src={`${import.meta.env.BASE_URL}logos/${item.logo}`}
                  alt={item.logo}
                />
              </Link>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
