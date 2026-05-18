import React from 'react';
import { FaPlus } from 'react-icons/fa';

import styles from '../Ibm.module.css';

const faqData = [
  {
    question: 'What do IBM Managed Services include?',
    answer:
      'IBM Managed Services typically include monitoring, incident resolution, patching, governance, optimisation, security operations, and infrastructure support across hybrid cloud environments.',
  },

  {
    question: 'What does IBM Silver Partner mean?',
    answer:
      'IBM Partner Plus enables partners to progress through validated tiers including Silver, reflecting technical expertise, ecosystem engagement, and enterprise delivery capabilities.',
  },

  //   {
  //     question:'Can Teckonnect support hybrid environments beyond IBM?',
  //     answer:
  //       'Yes. Teckonnect operates across hybrid and multi-vendor environments, enabling clients to unify infrastructure, operations, and governance efficiently.',
  //   },

  {
    question: 'Do you support Red Hat OpenShift on IBM Cloud?',
    answer:
      'Yes — including setup, hardening, operations, monitoring, and platform optimisation aligned with enterprise cloud-native requirements.',
  },

  {
    question: 'Can you help move from pilot AI to production?',
    answer:
      'Absolutely. We support AI governance, operational readiness, data foundations, MLOps enablement, and scalable deployment workflows.',
  },

  {
    question: 'How do I get started?',
    answer:
      'Book a consultation with our IBM services team. We assess your current environment, define business goals, and create a tailored transformation roadmap.',
  },

  {
    question: (
      <>
        Can Teckonnect support hybrid environments
        <br />
        beyond IBM?
      </>
    ),
    answer:
      'Yes. Teckonnect operates across hybrid and multi-vendor environments, enabling clients to unify infrastructure, operations, and governance efficiently.',
  },
];

export default function IbmQuestions() {
  return (
    <section className={styles.ibmQuestion}>
      {/* BACKGROUND */}

      <div className={styles.ibmQuestionGrid}></div>

      {/* CONTAINER */}

      <div className={styles.ibmQuestionContainer}>
        {/* TOP */}

        <div className={styles.ibmQuestionTop}>
          <span className={styles.ibmQuestionLabel}>FAQS</span>

          <h2 className={styles.ibmQuestionTitle}>
            Frequently Asked
            <span> Questions</span>
          </h2>

          <p className={styles.ibmQuestionDescription}>
            Everything you need to know about our IBM managed services, cloud
            transformation, security operations, AI enablement, and enterprise
            support capabilities.
          </p>
        </div>

        {/* FAQ LIST */}

        <div className={styles.ibmQuestionList}>
          {faqData.map((item, index) => (
            <div
              className={styles.ibmQuestionItem}
              key={index}
            >
              {/* QUESTION */}

              <div className={styles.ibmQuestionQuestion}>
                <h3>{item.question}</h3>

                <div className={styles.ibmQuestionPlus}>
                  <FaPlus />
                </div>
              </div>

              {/* ANSWER */}

              <div className={styles.ibmQuestionAnswer}>
                <p>{item.answer}</p>
              </div>

              {/* BOTTOM BORDER */}

              <div className={styles.ibmQuestionBorder}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
