import React from 'react';
import styles from '../MicrosoftPartner.module.css';

const benefitsData = [
  {
    title: 'Infrastructure and Cloud Transformation',
    description:
      'Teckonnect supports organizations in building flexible and scalable environments using Microsoft Azure. We focus on modernizing infrastructure in a controlled and efficient manner, allowing businesses to transition from traditional systems to cloud-based platforms without disruption. Our solutions ensure improved system performance, operational efficiency, and the ability to scale as business demands grow.',
  },
  {
    title: 'Modern Work and Collaboration',
    description:
      'We help organizations establish connected and productive workplaces through Microsoft 365. Teckonnect designs digital environments that simplify communication and enable seamless collaboration across teams. Our solutions create consistency in the way employees work, ensuring that productivity remains strong while maintaining a structured and reliable workflow across the organization.',
  },
  {
    title: 'Business Applications and Process Enablement',
    description:
      'Teckonnect develops business-driven solutions using Microsoft platforms to streamline operations and improve efficiency. Our approach focuses on simplifying workflows and creating systems that provide better control over business activities. These solutions help organizations manage their processes more effectively while supporting better coordination and operational clarity.',
  },
  {
    title: 'Data Management and Intelligence',
    description:
      'We enable organizations to make better use of their data through structured analytics and reporting solutions built on Microsoft technologies. Teckonnect focuses on transforming complex data into clear and meaningful insights that support informed decision-making. Our solutions ensure that data becomes a dependable asset for improving both operational performance and long-term planning.',
  },
  {
    title: 'Security and Compliance Framework',
    description:
      'Security is a fundamental element of every solution delivered by Teckonnect. We design systems that protect business data while maintaining stability and reliability across all operations. By applying consistent security practices and controlled access models, we help organizations operate securely while meeting necessary compliance expectations.',
  },
  {
    title: 'Continuous Optimization and Support',
    description:
      'Teckonnect remains engaged beyond implementation to ensure solutions continue to perform effectively as business needs evolve. We refine, optimize, and enhance systems over time, helping organizations maintain efficiency and adaptability. Our commitment is to deliver consistent value through ongoing support and improvement.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsHeader}>
          <span className={styles.benefitsTag}>MICROSOFT SOLUTIONS</span>

          <h2 className={styles.benefitsTitle}>
            Microsoft Solution{' '}
            <span className={styles.highlightText}>Capabilities</span>
          </h2>

          <p className={styles.benefitsSubtitle}>
            Teckonnect delivers scalable, secure, and business-focused Microsoft
            solutions designed to modernize operations and support long-term
            growth.
          </p>
        </div>

        <div className={styles.benefitsGrid}>
          {benefitsData.map((item, index) => (
            <div
              key={index}
              className={styles.benefitCard}
            >
              <div className={styles.cardTop}>
                <span className={styles.cardNumber}>0{index + 1}</span>
              </div>

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
