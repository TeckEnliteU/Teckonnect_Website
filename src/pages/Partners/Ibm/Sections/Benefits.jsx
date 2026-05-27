import React from 'react';
import styles from '../IBMPartner.module.css';

const benefitsData = [
  {
    title: 'Artificial Intelligence and Intelligent Automation',
    description:
      'Teckonnect helps organisations adopt AI-driven solutions using IBM technologies to improve efficiency and decision-making. By incorporating intelligent automation into business processes, we enable organisations to reduce manual effort and streamline repetitive workflows. Our approach focuses on creating systems that respond dynamically to changing requirements while maintaining consistency and operational control.',
  },
  {
    title: 'Data Platforms and Advanced Analytics',
    description:
      'We support organisations in building structured data environments that enable better visibility and informed decision-making. Teckonnect leverages IBM data technologies to create systems that manage, organise, and analyse large volumes of information effectively. By transforming complex data into clear insights, we help organisations strengthen planning, improve performance, and respond more effectively to business demands.',
  },
  {
    title: 'Hybrid Cloud and Infrastructure Modernisation',
    description:
      'Teckonnect assists organisations in modernising their IT environments through IBM hybrid cloud solutions, including IBM Cloud and Red Hat platforms. We design infrastructures that seamlessly connect on-premises and cloud systems, providing flexibility and resilience. This approach allows organisations to optimise resources, improve system performance, and maintain control over critical operations while adapting to evolving business needs.',
  },
  {
    title: 'Enterprise Integration and Consulting',
    description:
      'Teckonnect delivers end-to-end consulting and integration services that align IBM technologies with business strategies. We focus on connecting systems, applications, and data into a cohesive environment that improves efficiency and coordination. By combining technical expertise with a clear implementation approach, we help organisations realise tangible value from their technology investments.',
  },
  {
    title: 'Security and Operational Stability',
    description:
      'Security and system reliability are key elements in every IBM-based solution we deliver. Teckonnect ensures that business data and infrastructure are protected through consistent security practices and controlled access frameworks. Our approach helps organisations maintain stability while reducing risks in complex and evolving digital environments.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsHeader}>
          <span className={styles.benefitsTag}>IBM SOLUTION CAPABILITIES</span>

          <h2 className={styles.benefitsTitle}>
            IBM Enterprise{' '}
            <span className={styles.highlightText}>
              Services & Capabilities
            </span>
          </h2>

          <p className={styles.benefitsSubtitle}>
            Teckonnect enables organisations to modernise infrastructure,
            improve decision-making, and strengthen operational efficiency
            through structured IBM solutions.
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
