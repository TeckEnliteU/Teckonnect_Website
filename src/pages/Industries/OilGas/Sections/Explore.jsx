import React from 'react';
import styles from '../OilGas.module.css';

const reasons = [
  'A single partner for cloud, security, and managed services',
  'A governance-first approach aligned to regulated industries',
  'Solutions designed to reduce complexity, not increase it',
  'A proven model that supports performance, security, and long-term stability',
];

const outcomes = [
  'Greater operational reliability across systems',
  'Reduced risk from downtime, cyber threats, and system failures',
  'Better visibility and control across your infrastructure',
  'A technology environment that supports growth, change, and future readiness',
];

const Explore = () => {
  return (
    <section className={styles.chooseSection}>
      <div className={styles.chooseContainer}>
        {/* LEFT */}

        <div className={styles.chooseLeft}>
          <span className={styles.chooseTag}>WHY TECKONNECT</span>

          <h2>
            Why Utility Organizations
            <span> Choose Teckonnect</span>
          </h2>

          <p className={styles.chooseText}>
            Unlike traditional providers, Teckonnect focuses on practical
            outcomes, not just technology implementation.
          </p>

          <div className={styles.reasonWrap}>
            {reasons.map((item, index) => (
              <div
                key={index}
                className={styles.reasonBox}
              >
                <div className={styles.reasonNumber}>0{index + 1}</div>

                <p>{item}</p>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT */}

        <div className={styles.chooseRight}>
          <div className={styles.mainCard}>
            <span className={styles.cardTag}>YOUR BENEFITS</span>

            <h3>
              What This Means for
              <span> Your Organization</span>
            </h3>

            <p className={styles.cardText}>With Teckonnect, you gain:</p>

            <div className={styles.outcomeWrap}>
              {outcomes.map((item, index) => (
                <div
                  key={index}
                  className={styles.outcomeCard}
                >
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Explore;
