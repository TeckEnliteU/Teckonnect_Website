import React from 'react';
import styles from '../SmallEnterpriseBusiness.module.css';

const Overview = () => {
  return (
    <section className={styles.overview}>
      <div className={styles.overviewContainer}>
        {/* LEFT */}
        <div className={styles.overviewLeft}>
          <span className={styles.overviewTag}>BUSINESS TRANSFORMATION</span>

          <h2>
            Business
            <span>IT Solutions</span>
            <strong>& Digital Transformation</strong>
            <strong>Services</strong>
          </h2>

          <div className={styles.headingLine}></div>
        </div>

        {/* RIGHT */}
        <div className={styles.overviewRight}>
          <p className={styles.leadText}>
            Teckonnect delivers end-to-end IT solutions tailored for both small
            businesses and large enterprises. We combine cloud technologies,
            cybersecurity, and modern workplace solutions to help organisations
            streamline operations, improve collaboration, and scale effectively.
          </p>

          <p>
            Businesses today require agile and cost-effective IT strategies that
            support both immediate operational needs and long-term growth. Our
            approach focuses on flexibility, performance, security, and
            innovation to help organisations stay competitive in a rapidly
            evolving digital environment.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Overview;
