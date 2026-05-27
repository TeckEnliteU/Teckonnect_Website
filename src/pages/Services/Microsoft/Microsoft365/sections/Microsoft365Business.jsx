import React from 'react';
import styles from '../Microsoft365.module.css';

const BusinessAspects = () => {
  return (
    <section className={styles.businessSection}>
      <div className={styles.businessContainer}>
        {/* TOP CONTENT */}
        <div className={styles.businessLeft}>
          <span className={styles.businessLabel}>BUSINESS ASPECTS</span>

          <div className={styles.businessLine}></div>

          <h2 className={styles.businessTitle}>
            Digital Transformation &<span> IT Consulting Services</span>
          </h2>

          <p className={styles.businessDescription}>
            Teckonnect helps organizations solve complex IT and digital
            transformation challenges through expert technology consulting —
            delivering scalable, secure, and cost-effective solutions that drive
            business growth.
          </p>
        </div>

        {/* MODERN CONTENT LAYOUT */}
        <div className={styles.businessRight}>
          {/* ITEM 01 */}
          <div className={styles.businessCard}>
            <span className={styles.businessNumber}>01</span>

            <h3>Scalable cloud infrastructure design</h3>

            <p>
              Modern architecture planning built for growth, flexibility, and
              performance.
            </p>
          </div>

          {/* ITEM 02 */}
          <div className={styles.businessCard}>
            <span className={styles.businessNumber}>02</span>

            <h3>Enterprise security & compliance frameworks</h3>

            <p>
              Advanced governance and protection strategies for enterprise
              environments.
            </p>
          </div>

          {/* ITEM 03 */}
          <div className={styles.businessCard}>
            <span className={styles.businessNumber}>03</span>

            <h3>Digital workplace strategy & roadmapping</h3>

            <p>
              Create connected, collaborative, and productive digital work
              environments.
            </p>
          </div>

          {/* ITEM 04 */}
          <div className={styles.businessCard}>
            <span className={styles.businessNumber}>04</span>

            <h3>Cost-effective IT investment optimization</h3>

            <p>
              Reduce operational complexity while maximizing technology ROI.
            </p>
          </div>

          {/* ITEM 05 */}
          <div className={styles.businessCard}>
            <span className={styles.businessNumber}>05</span>

            <h3>Accelerated cloud adoption strategies</h3>

            <p>
              Enable faster transformation with streamlined deployment and
              migration.
            </p>
          </div>

          {/* ITEM 06 */}
          <div className={styles.businessCard}>
            <span className={styles.businessNumber}>06</span>

            <h3>Long-term operational efficiency gains</h3>

            <p>
              Improve productivity, automation, and scalability across business
              operations.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessAspects;
