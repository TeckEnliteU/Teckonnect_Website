import React from 'react';
import {
  FaCloud,
  FaShieldAlt,
  FaRobot,
  FaServer,
  FaChartLine,
  FaArrowRight,
  FaLayerGroup,
} from 'react-icons/fa';
import styles from '../Ibm.module.css';

const services = [
  {
    id: '01',
    tag: 'INFRASTRUCTURE',
    title: 'IBM Hybrid Cloud Managed Services',
    desc: 'Design, deployment, operations, and optimisation of hybrid environments for scalability, compliance, and performance.',
    icon: <FaCloud />,
    color: 'blue',
    points: [
      'Hybrid architecture planning',
      'Workload modernisation roadmap',
      '24/7 monitoring & operations',
      'Capacity & cost optimisation',
    ],
  },

  {
    id: '02',
    tag: 'CLOUD NATIVE',
    title: 'Red Hat OpenShift on IBM Cloud',
    desc: 'Secure and scalable cloud-native environments with operational consistency across hybrid platforms.',
    icon: <FaServer />,
    color: 'cyan',
    points: [
      'Cluster deployment & hardening',
      'Role-based access control',
      'Availability & observability',
      'Upgrades & reliability engineering',
    ],
  },

  {
    id: '03',
    tag: 'ARTIFICIAL INTELLIGENCE',
    title: 'Enterprise AI Enablement',
    desc: 'Governed AI foundations and deployable workflows that take projects from pilot to production.',
    icon: <FaRobot />,
    color: 'green',
    points: [
      'AI discovery workshops',
      'Pilot-to-production delivery',
      'Data readiness planning',
      'MLOps operational enablement',
    ],
  },

  {
    id: '04',
    tag: 'SECURITY',
    title: 'IBM Security Operations & Compliance',
    desc: 'Identity protection, monitoring, governance, and compliance support for enterprise infrastructure.',
    icon: <FaShieldAlt />,
    color: 'blue',
    points: [
      'Security baselining',
      'Identity governance',
      'Continuous monitoring',
      'Audit documentation',
    ],
  },

  {
    id: '05',
    tag: 'ASSET MANAGEMENT',
    title: 'IBM Maximo Services',
    desc: 'Workflow optimisation, adoption acceleration, and managed support for operational excellence.',
    icon: <FaChartLine />,
    color: 'cyan',
    points: [
      'Implementation support',
      'Workflow improvements',
      'Performance optimisation',
      'Managed operations',
    ],
  },

  {
    id: '06',
    tag: 'LICENSING & GOVERNANCE',
    title: 'Renewals & Vendor Governance',
    desc: 'Visibility and compliance across licensing, renewals, and vendor coordination processes.',
    icon: <FaLayerGroup />,
    color: 'green',
    points: [
      'Renewal visibility',
      'Usage alignment guidance',
      'Vendor coordination',
      'Support escalation paths',
    ],
  },
];

export default function FeaturesSection() {
  return (
    <section className={styles.features}>
      <div className={styles.bgGlow1}></div>
      <div className={styles.bgGlow2}></div>

      <div className={styles.container}>
        <div className={styles.heading}>
          <span className={styles.smallTitle}>IBM SERVICE PORTFOLIO</span>

          <h2>
            What We <span>Deliver</span>
          </h2>

          <p>
            Six focused practice areas — from hybrid infrastructure to AI
            enablement, security, and licensing governance.
          </p>
        </div>

        <div className={styles.grid}>
          {services.map((service, index) => (
            <div
              className={`${styles.card} ${styles[service.color]}`}
              key={index}
            >
              <div className={styles.leftBorder}></div>

              <div className={styles.iconWrap}>
                <div className={styles.icon}>{service.icon}</div>
              </div>

              <div className={styles.content}>
                <div className={styles.top}>
                  <span className={styles.serviceId}>SERVICE {service.id}</span>

                  <span className={styles.tag}>{service.tag}</span>
                </div>

                <h3>{service.title}</h3>

                <p>{service.desc}</p>
              </div>

              <div className={styles.listArea}>
                <h4>INCLUDES</h4>

                <ul>
                  {service.points.map((point, i) => (
                    <li key={i}>{point}</li>
                  ))}
                </ul>
              </div>

              <div className={styles.right}>
                <span>{service.id}</span>
                {/* 
                <button>
                  <FaArrowRight />
                </button> */}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
