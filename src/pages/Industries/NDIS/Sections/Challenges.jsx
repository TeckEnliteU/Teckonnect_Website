import styles from '../NDIS.module.css';

const solutions = [
  {
    category: 'CYBERSECURITY',
    title: 'Built for Sensitive Participant Data',
    desc: 'Protect participant records with layered cybersecurity, identity protection, secure access controls, and modern security practices designed to reduce risk and support compliance across your organisation.',
  },
  {
    category: 'MICROSOFT 365 & COPILOT',
    title: 'More Time for Participant Care',
    desc: 'Simplify documentation, reporting, email, collaboration, and everyday administration so your support workers and coordinators spend less time on manual tasks and more time supporting participants.',
  },
  {
    category: 'CLOUD INFRASTRUCTURE',
    title: 'Reliable & Secure Cloud Services',
    desc: 'Modern cloud solutions improve availability, data protection, backup, disaster recovery, and business continuity while supporting the changing needs of growing NDIS providers.',
  },
  {
    category: 'ONGOING TECHNOLOGY PARTNERSHIP',
    title: 'Support Beyond Implementation',
    desc: 'Receive proactive IT support, strategic technology guidance, continuous improvements, and a trusted partner who understands the operational needs of disability support providers.',
  },
];

export default function Challenges() {
  return (
    <section className={styles.challenges}>
      <div className={styles.challengesContainer}>
        <div className={styles.challengeTop}>
          <span>HOW TECKONNECT HELPS</span>

          <h2>
            Support designed around
            <strong> your NDIS services</strong>
          </h2>

          <p>
            Teckonnect combines secure infrastructure, Microsoft technologies,
            cloud services, cybersecurity, and ongoing IT support to help
            disability support providers work more efficiently while delivering
            better participant outcomes.
          </p>
        </div>

        <div className={styles.solutionGrid}>
          {solutions.map((item) => (
            <div
              key={item.title}
              className={styles.solutionRow}
            >
              <div className={styles.solutionLeft}>{item.category}</div>

              <div className={styles.solutionRight}>
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
