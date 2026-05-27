import React from 'react';
import styles from '../AdobePartner.module.css';

const benefitsData = [
  {
    title: 'Creative Cloud Enablement',
    description:
      'Teckonnect supports organisations in utilising Adobe Creative Cloud to produce high-quality design and digital content. We assist in the adoption and efficient use of leading creative tools, enabling teams to collaborate effectively and maintain consistency across all visual outputs. By simplifying creative workflows and improving accessibility to design resources, we help organisations accelerate content delivery and maintain a strong and unified brand identity.',
  },
  {
    title: 'Document Cloud and Digital Workflows',
    description:
      'We help organisations transition from manual document handling to fully digital processes using Adobe Document Cloud. Teckonnect enables secure creation, editing, sharing, and signing of documents, allowing businesses to operate with greater speed and accuracy. By streamlining document workflows, organisations can reduce operational delays, improve compliance, and enhance collaboration across teams and locations.',
  },
  {
    title: 'Experience Cloud and Customer Engagement',
    description:
      'Teckonnect enables organisations to leverage Adobe Experience Cloud to deliver consistent and personalised customer experiences. We help businesses better understand customer behaviour and manage interactions across multiple digital touchpoints. By establishing structured engagement systems, organisations can improve communication, enhance user experiences, and build stronger relationships with their customers.',
  },
  {
    title: 'Content Management and Experience Optimisation',
    description:
      'Teckonnect supports organisations in managing their digital content ecosystem using Adobe platforms such as Adobe Experience Manager. We design solutions that allow businesses to create, organise, and deliver content efficiently at scale while maintaining quality and consistency. By integrating performance insights and optimisation strategies, we help organisations continuously improve their digital presence and maximise engagement outcomes.',
  },
  {
    title: 'Ongoing Support and Value Enhancement',
    description:
      'Teckonnect remains committed to supporting organisations beyond initial implementation by refining and enhancing Adobe-based solutions over time. We focus on maintaining performance, improving usability, and ensuring that systems continue to meet changing business requirements. Our approach ensures that organisations derive sustained value from their Adobe investments.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsHeader}>
          <span className={styles.benefitsTag}>
            ADOBE SOLUTION CAPABILITIES
          </span>

          <h2 className={styles.benefitsTitle}>
            Adobe Digital{' '}
            <span className={styles.highlightText}>
              Services & Capabilities
            </span>
          </h2>

          <p className={styles.benefitsSubtitle}>
            Teckonnect enables organisations to strengthen digital experiences,
            simplify workflows, and optimise content management through
            structured Adobe solutions.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={styles.benefitCard}
            >
              <span className={styles.cardNumber}>0{index + 1}</span>

              <h3 className={styles.benefitTitle}>{item.title}</h3>

              <p className={styles.benefitDescription}>{item.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
