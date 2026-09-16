import styles from '../NDIS.module.css';

export default function Overview() {
  const outcomes = [
    'More time for participant care through reduced administration.',
    'Greater confidence in meeting NDIS compliance requirements.',
    'Improved protection of participant information and sensitive records.',
    'Reliable systems that support growth without increasing IT complexity.',
  ];

  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        <div className={styles.overviewHeader}>
          <span className={styles.overviewTag}>IN PRACTICE</span>

          <h2>
            What this looks like for
            <strong> an NDIS provider</strong>
          </h2>
        </div>

        <div className={styles.overviewCard}>
          <div className={styles.overviewLeft}>
            <span className={styles.caseTag}>REPRESENTATIVE EXAMPLE</span>

            <p>
              A growing disability support provider was managing participant
              records, rostering, reporting, and compliance across multiple
              systems. Staff were spending significant time on administration,
              making it difficult to maintain consistent documentation while
              focusing on participant outcomes.
            </p>

            <p>
              Teckonnect modernised their technology environment by introducing
              secure cloud solutions, Microsoft 365 collaboration tools,
              improved cybersecurity, and streamlined document management. These
              improvements reduced manual effort while supporting compliance and
              future organisational growth.
            </p>
          </div>

          <div className={styles.overviewRight}>
            <span className={styles.caseTag}>KEY OUTCOMES</span>

            <ul>
              {outcomes.map((item) => (
                <li key={item}>✓ {item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
