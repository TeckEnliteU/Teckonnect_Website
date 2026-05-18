import React from 'react';
import styles from '../Retail.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>RETAIL MODERNISATION</span>

          <h2>
            Retail
            <span>IT Solutions</span>
            <strong>& Digital Commerce</strong>
            <strong>Infrastructure</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end retail IT solutions that support
            omnichannel operations, real-time inventory management, and
            personalised customer engagement. We combine cloud infrastructure,
            data analytics, and retail technologies to help businesses improve
            efficiency and customer satisfaction.
          </p>

          <p>
            Retail environments require agility, scalability, and seamless
            integration across online and offline channels. Our approach ensures
            retailers can modernise operations, enhance customer experiences,
            and adapt quickly to changing market demands.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
