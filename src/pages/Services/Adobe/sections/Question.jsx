import React from 'react';

import { FaPlus } from 'react-icons/fa';

import styles from '../Adobe.module.css';

const Question = () => {
  const questionData = [
    {
      question: 'What does "Adobe Certified Reseller" mean?',

      answer:
        "Within Adobe's reseller ecosystem, partners participate in Adobe's Partner Connection program and may be recognized at specific membership levels. The program rewards resellers based on sales, technical expertise, and engagement.",
    },

    {
      question: 'Can you help choose the right Creative Cloud plan for a team?',

      answer:
        'Yes. We map user roles, collaboration workflows, onboarding needs, and business requirements to the correct Creative Cloud setup for teams.',
    },

    {
      question: 'Do you support Acrobat + eSign workflows for approvals?',

      answer:
        'We help organizations modernize approvals, signatures, document routing, and digital workflows using Acrobat business and eSign capabilities.',
    },

    {
      question: 'Do you manage renewals and licence re-allocation?',

      answer:
        'Yes. We provide licence lifecycle management, renewal planning, governance support, and optimization strategies to reduce software wastage.',
    },
  ];

  return (
    <section className={styles.adobeQuestion}>
      <div className={styles.questionContainer}>
        {/* TOP */}
        <div className={styles.questionTop}>
          <span className={styles.questionLabel}>QUESTIONS</span>

          <h2 className={styles.questionTitle}>
            Frequently Asked
            <span> Questions</span>
          </h2>
        </div>

        {/* LIST */}
        <div className={styles.questionList}>
          {questionData.map((item, index) => (
            <div
              className={styles.questionItem}
              key={index}
            >
              {/* QUESTION */}
              <div className={styles.questionQuestion}>
                <h3>{item.question}</h3>

                <span className={styles.questionPlus}>
                  <FaPlus />
                </span>
              </div>

              {/* ANSWER */}
              <div className={styles.questionAnswer}>
                <p>{item.answer}</p>
              </div>

              {/* BORDER */}
              <div className={styles.questionBorder}></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Question;
