import React from 'react';

import styles from '../Azure.module.css';

const faqData = [
  {
    question: 'What is an Azure landing zone and why do I need it?',

    answer:
      'Microsoft describes Azure landing zones as a standardised approach to set up and manage Azure environments at scale — supporting security, governance, and operational efficiency. Without a landing zone, organisations often end up with ungoverned subscriptions, inconsistent security policies, and spiralling costs.',
  },

  {
    question: 'How do you reduce migration risk?',

    answer:
      'Azure Migrate supports discovery, readiness assessment, planning, and execution to reduce risk and downtime during migration. Teckonnect layers structured migration waves, dependency mapping, and controlled cutover planning.',
  },

  {
    question: 'Do you support hybrid and multi-cloud environments?',

    answer:
      'Yes. Many organisations operate in hybrid environments with on-premises infrastructure alongside Azure. Our landing zone and governance approach accommodates hybrid connectivity patterns and consistent policy enforcement.',
  },

  {
    question: 'How long does an Azure migration typically take?',

    answer:
      'Timelines vary depending on estate size, workload complexity, and readiness. A foundation and first migration wave can typically be delivered within 8–12 weeks, with phased migration programs continuing thereafter.',
  },
];

const AzureBusiness = () => {
  return (
    <section className={styles.azureBusiness}>
      <div className={styles.businessContainer}>
        {/* TOP */}

        <div className={styles.businessTop}>
          <div className={styles.businessBadge}>FAQs</div>

          <h2 className={styles.businessTitle}>
            Common <span>questions</span>
          </h2>

          <p className={styles.businessDescription}>
            Answers to what organisations typically ask before starting their
            Azure cloud journey with Teckonnect.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className={styles.faqWrapper}>
          {faqData.map((item, index) => (
            <div
              className={styles.faqItem}
              key={index}
            >
              {/* QUESTION */}

              <div className={styles.faqQuestion}>
                <h3>{item.question}</h3>

                <span className={styles.faqArrow}>↗</span>
              </div>

              {/* ANSWER */}

              <div className={styles.faqAnswer}>
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AzureBusiness;
