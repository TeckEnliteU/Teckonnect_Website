import React from 'react';
import styles from '../AWSPartner.module.css';

const benefitsData = [
  {
    title: 'Cloud Migration and System Modernisation',
    description:
      'We guide organisations through a structured cloud adoption journey by assessing existing systems and planning effective migration strategies. Teckonnect ensures that transitions to AWS are smooth and controlled, minimising disruption to business operations. Our focus on modernising applications and infrastructure enables organisations to move toward more efficient, cloud-aligned architectures that improve reliability and simplify ongoing management.',
  },
  {
    title: 'Data, Analytics and Intelligent Solutions',
    description:
      'Teckonnect helps organisations transform their data into a valuable asset by building analytics capabilities on AWS. We design solutions that provide clear insights into business performance, allowing organisations to make informed decisions with confidence. By integrating advanced data processing and intelligent technologies, we support the creation of data-driven systems that enhance both operational visibility and long-term planning.',
  },
  {
    title: 'Security, Governance and Compliance',
    description:
      'Security is integrated into every AWS solution delivered by Teckonnect. We help organisations establish structured governance frameworks that ensure visibility, control, and protection of cloud environments. By applying consistent security practices and leveraging AWS capabilities, we enable businesses to safeguard their applications and data while maintaining alignment with industry and regulatory expectations.',
  },
  {
    title: 'Managed Cloud and Continuous Optimisation',
    description:
      'Teckonnect provides ongoing management and optimisation services to ensure AWS environments operate at peak efficiency. Our approach focuses on monitoring system performance, improving resource utilisation, and maintaining cost effectiveness over time. By continuously refining cloud environments, we help organisations maximise value while ensuring reliability and long-term sustainability.',
  },
];

const Benefits = () => {
  return (
    <section className={styles.benefitsSection}>
      <div className={styles.benefitsContainer}>
        <div className={styles.benefitsHeader}>
          <span className={styles.benefitsTag}>AWS SOLUTION CAPABILITIES</span>

          <h2 className={styles.benefitsTitle}>
            AWS Cloud{' '}
            <span className={styles.highlightText}>
              Services & Capabilities
            </span>
          </h2>

          <p className={styles.benefitsSubtitle}>
            Teckonnect enables organisations to modernise, secure, and optimise
            cloud environments through <br /> structured AWS solutions designed
            for long-term operational efficiency.
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
