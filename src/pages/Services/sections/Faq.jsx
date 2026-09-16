import React, { useState } from 'react';
import { FiPlus, FiMinus } from 'react-icons/fi';
import styles from '../Services.module.css';

const faqs = [
  {
    question: 'Can Teckonnect support hybrid environments beyond IBM?',
    answer:
      'Yes. Teckonnect supports hybrid and multi-cloud environments across IBM, Microsoft, AWS, Adobe, and on-premises infrastructure. We help organisations manage, secure, and optimise their technology ecosystem through a unified service model.',
  },
  {
    question: 'How do I get started?',
    answer:
      'Getting started is simple. Contact our team for a discovery session where we assess your business objectives, current technology landscape, and operational requirements before recommending the most suitable solution.',
  },
  {
    question: 'Do you support Acrobat + eSign workflows for approvals?',
    answer:
      'Absolutely. We implement Adobe Acrobat and eSign workflows that streamline document approvals, automate business processes, improve compliance, and enhance overall productivity.',
  },
  {
    question: 'Can you help choose the right Creative Cloud plan for a team?',
    answer:
      'Yes. Our specialists help evaluate your team size, collaboration requirements, creative workloads, and licensing needs to recommend the most cost-effective Adobe Creative Cloud solution.',
  },
];

export default function FAQSection() {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section className={styles.faqSection}>
      <div className={styles.faqHeader}>
        <span>FAQs</span>

        <h2>Frequently Asked Questions</h2>

        <p>
          Everything you need to know about our IBM managed services, cloud
          transformation, security operations, AI enablement, and enterprise
          support capabilities.
        </p>
      </div>

      <div className={styles.faqList}>
        {faqs.map((faq, index) => (
          <div
            key={index}
            className={styles.faqItem}
          >
            <div className={styles.faqQuestion}>
              <span>{faq.question}</span>
              <FiPlus />
            </div>

            <div className={styles.faqAnswer}>
              <p>{faq.answer}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
