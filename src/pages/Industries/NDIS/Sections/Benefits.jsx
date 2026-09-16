import { FiShield, FiCalendar, FiClock, FiBarChart2 } from 'react-icons/fi';

import styles from '../NDIS.module.css';

const benefits = [
  {
    icon: <FiShield />,
    title: 'Protecting Participant Data',
    desc: 'Safeguard participant records with secure systems that reduce the risk of data loss, unauthorised access, and compliance breaches.',
  },
  {
    icon: <FiCalendar />,
    title: 'Meeting Compliance Requirements',
    desc: 'Support NDIS Practice Standards with organised documentation, secure record management, and audit-ready processes.',
  },
  {
    icon: <FiClock />,
    title: 'Reducing Administrative Work',
    desc: 'Streamline rostering, reporting, participant documentation, and everyday workflows so staff spend more time delivering care.',
  },
  {
    icon: <FiBarChart2 />,
    title: 'Supporting Sustainable Growth',
    desc: 'Scale your technology with confidence as your organisation expands services, staff, and participant capacity.',
  },
];

export default function Benefits() {
  return (
    <section className={styles.benefits}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsTop}>
          <span className={styles.benefitsTag}>THE PRESSURES</span>

          <h2>
            What <span>NDIS providers</span> are carrying
          </h2>

          <p>
            Running an NDIS service means balancing participant care, compliance
            obligations, operational efficiency, and sustainable growth. The
            right technology reduces complexity and allows teams to focus on
            delivering better outcomes.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefits.map((item) => (
            <div
              key={item.title}
              className={styles.benefitCard}
            >
              <div className={styles.iconWrap}>{item.icon}</div>

              <div className={styles.cardLine}></div>

              <h3>{item.title}</h3>

              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
